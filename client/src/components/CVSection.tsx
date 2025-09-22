import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, FileText } from "lucide-react";

export default function CVSection() {
  const openGoogleDriveCV = () => {
    //todo: replace with actual Google Drive link
    console.log('Opening CV from Google Drive');
    window.open('https://drive.google.com/drive/folders/1NgWxgX4_aqREwa1f92m1Jmgd-SprJUI3?usp=drive_link', '_blank');
  };

  return (
    <section className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Resume</h2>
          <p className="text-lg text-muted-foreground">
            Download my comprehensive CV showcasing education, experience, and achievements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Professional CV</h3>
                  <p className="text-muted-foreground">Updated March 2025</p>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Education</span>
                  <span className="font-medium">IIT Kharagpur</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Experience</span>
                  <span className="font-medium">Startup & Research</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border/50">
                  <span className="text-muted-foreground">Skills</span>
                  <span className="font-medium">AI, Product, Business</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-muted-foreground">Languages</span>
                  <span className="font-medium">English, Hindi, Bengali</span>
                </div>
              </div>
              
              <div className="flex gap-4">
                <Button 
                  onClick={openGoogleDriveCV}
                  className="flex-1 hover-elevate"
                  data-testid="button-google-drive-cv"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View on Google Drive
                </Button>
              </div>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6">
              <h4 className="font-semibold text-lg mb-4">What's Included</h4>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Complete academic background </span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Hodos startup experience and achievements</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Research internships and projects</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Technical skills and competencies</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-muted-foreground">Leadership positions and awards</span>
                </li>
              </ul>
            </Card>
            
            <Card className="p-6 bg-primary/5">
              <h4 className="font-semibold text-lg mb-2">Quick Contact</h4>
              <p className="text-muted-foreground mb-4">
                Interested in collaborating or learning more about my work?
              </p>
              <div className="text-sm space-y-1">
                <p><strong>Email:</strong> palsnehal004@gmail.com</p>
                <p><strong>LinkedIn:</strong> snehal-pal-4735b4266</p>
                <p><strong>GitHub:</strong> 2004Snehal</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}