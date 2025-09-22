import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Play, FileText } from "lucide-react";
import researchLabImage from "@assets/generated_images/AI_research_lab_photo_5f121141.png";
import gcReport from "@assets/Data_Analytics_Report.pdf";

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  youtubeUrl?: string;
  reportUrl?: string;
  category: 'AI/ML' | 'Business Analytics' | 'Automation';
}

export default function ProjectsSection() {
  //todo: remove mock functionality - project data will come from props or API
  const projects: Project[] = [
    {
      id: "1",
      title: "Business Revenue Optimization",
      description: "Comprehensive data analytics project for ElectroMart analyzing marketing effectiveness, customer behavior, and revenue optimization. Led market analysis using advanced ML models including XGBoost and LightGBM with SHAP analysis for actionable business insights.",
      technologies: ["Python", "XGBoost", "LightGBM", "SHAP", "Data Analytics", "Business Intelligence"],
      reportUrl: "#gc-report", // Links to GC Data Analytics Report PDF
      category: "Business Analytics"
    },
    {
      id: "2", 
      title: "Text-to-3D Model Generation",
      description: "Advanced 3D model generation system using OpenAI's SHAP-E framework. Built an intuitive interface for converting text descriptions into detailed 3D models with real-time rendering and export capabilities.",
      technologies: ["OpenAI SHAP-E", "Python", "3D Modeling", "Machine Learning", "Computer Graphics"],
      githubUrl: "https://github.com/2004Snehal/3d-model-generation-shape",
      youtubeUrl: "https://youtu.be/ym_xpzOyj_8",
      category: "AI/ML"
    },
    {
      id: "3",
      title: "Automated Book Publication System", 
      description: "End-to-end automation system for book publishing workflow including manuscript processing, formatting, cover generation, and distribution management. Streamlined the entire publishing pipeline for efficiency and quality.",
      technologies: ["Python", "Automation", "Publishing Workflow", "Document Processing", "API Integration"],
      youtubeUrl: "https://youtu.be/TUT97ng8cmk",
      category: "Automation"
    }
  ];

  const openLink = (url: string) => {
    if (url === "#gc-report") {
      // Open the GC report PDF in a new tab
      window.open(gcReport, '_blank');
      return;
    }
    window.open(url, '_blank');
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI/ML':
        return 'bg-chart-1 text-primary-foreground';
      case 'Business Analytics':
        return 'bg-chart-2 text-primary-foreground';
      case 'Automation':
        return 'bg-chart-3 text-primary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcasing innovative solutions in AI, business analytics, and automation
          </p>
        </div>

        {/* Hero project image */}
        <div className="mb-16">
          <div className="relative rounded-xl overflow-hidden">
            <img
              src={researchLabImage}
              alt="AI Research Lab"
              className="w-full h-64 lg:h-80 object-cover"
              data-testid="img-research-lab"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="text-2xl font-bold text-white mb-2">AI Research & Development</h3>
              <p className="text-white/90 max-w-md">
                Cutting-edge research in machine learning, computer vision, and data science
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="p-6 hover-elevate transition-all duration-300" data-testid={`project-${project.id}`}>
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold leading-tight">{project.title}</h3>
                  <Badge className={getCategoryColor(project.category)}>
                    {project.category}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 4 && (
                    <Badge variant="secondary" className="text-xs">
                      +{project.technologies.length - 4}
                    </Badge>
                  )}
                </div>
                
                <div className="flex gap-2 pt-4">
                  {project.githubUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openLink(project.githubUrl!)}
                      data-testid={`button-github-${project.id}`}
                    >
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                  )}
                  {project.youtubeUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openLink(project.youtubeUrl!)}
                      data-testid={`button-youtube-${project.id}`}
                    >
                      <Play className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  )}
                  {project.reportUrl && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openLink(project.reportUrl!)}
                      data-testid={`button-report-${project.id}`}
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Report
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}