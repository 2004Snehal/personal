import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2, GraduationCap } from "lucide-react";

interface TimelineItem {
  id: string;
  title: string;
  organization: string;
  period: string;
  location: string;
  description: string;
  type: 'startup' | 'research' | 'internship';
  isUpcoming?: boolean;
}

export default function TimelineSection() {
  //todo: remove mock functionality - timeline data will come from props or context
  const timelineData: TimelineItem[] = [
    {
      id: "1",
      title: "Product Analyst Intern",
      organization: "Purplle",
      period: "Summer 2026",
      location: "Mumbai, India",
      description: "Upcoming product analytics internship focusing on data-driven product insights and user experience optimization.",
      type: "internship",
      isUpcoming: true
    },
    {
      id: "2", 
      title: "Research Intern",
      organization: "Center of Excellence in AI, AI Department, IIT Kharagpur",
      period: "Jan 2025 - Mar 2025",
      location: "Kharagpur, India",
      description: "Applied advanced AI algorithms including Transformers and GNNs for land use classification using satellite imagery, achieving 68% accuracy in PolSAR classification.",
      type: "research"
    },
    {
      id: "3",
      title: "Winter Research Intern", 
      organization: "Aalborg University",
      period: "Dec 2024 - Jan 2025",
      location: "Aalborg, Denmark",
      description: "Co-developed a scalable name-matching system implementing MFI-blocking algorithms for the MEHDIE project, evaluating multiple blocking strategies for enterprise-scale applications.",
      type: "research"
    },
    {
      id: "4",
      title: "Co-Founder & COO",
      organization: "Hodos",
      period: "Jan 2025 - June 2025", 
      location: "India",
      description: "Built corporate travel expense management platform with booking APIs, account aggregation, and ERP solutions. Led GTM strategy and business development initiatives with VC discussions.",
      type: "startup"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'startup':
        return <Building2 className="h-5 w-5" />;
      case 'research':
        return <GraduationCap className="h-5 w-5" />;
      case 'internship':
        return <Building2 className="h-5 w-5" />;
      default:
        return <Calendar className="h-5 w-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'startup':
        return 'bg-primary text-primary-foreground';
      case 'research':
        return 'bg-chart-1 text-primary-foreground';
      case 'internship':
        return 'bg-chart-2 text-primary-foreground';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <section id="timeline" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Career Timeline</h2>
          <p className="text-lg text-muted-foreground">
            My journey through entrepreneurship, research, and product development
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>
          
          <div className="space-y-8">
            {timelineData.map((item, index) => (
              <div key={item.id} className="relative flex gap-8 items-start">
                {/* Timeline dot */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-full border-4 border-background flex items-center justify-center z-10 ${
                  item.isUpcoming ? 'bg-muted text-muted-foreground' : 'bg-primary text-primary-foreground'
                }`}>
                  {getIcon(item.type)}
                </div>
                
                {/* Content card */}
                <Card className={`flex-1 p-6 hover-elevate transition-all duration-300 ${
                  item.isUpcoming ? 'border-dashed' : ''
                }`} data-testid={`timeline-item-${item.id}`}>
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                        {item.isUpcoming && (
                          <Badge variant="secondary" className="ml-2">
                            Upcoming
                          </Badge>
                        )}
                      </h3>
                      <p className="text-primary font-medium">{item.organization}</p>
                    </div>
                    <Badge className={getTypeColor(item.type)}>
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-6 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}