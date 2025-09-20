import { Card } from "@/components/ui/card";
import { GraduationCap, MapPin } from "lucide-react";
import iitKgpImage from "@assets/image_1758046521081.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about building technology that creates real impact, combining entrepreneurship, 
            AI research, and product development to solve complex problems.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm a tech entrepreneur and AI researcher currently pursuing B.Tech in Chemical Engineering 
                at IIT Kharagpur. My passion lies at the intersection of technology, business, and innovation.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As the former Co-Founder and COO of Hodos, I led the development of a corporate travel 
                expense management platform that automated complex financial workflows for enterprise clients. 
                My research focuses on AI applications in data science and machine learning.
              </p>
            </div>
            
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Education</h4>
                  <div className="space-y-2">
                    <div>
                      <p className="font-medium">B.Tech, Chemical Engineering</p>
                      <p className="text-muted-foreground">Indian Institute of Technology Kharagpur</p>
                      <p className="text-sm text-muted-foreground">2023 - 2027 </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Academic Excellence</h4>
                  <p className="text-muted-foreground">
                    Ranked among top 1% in the country in JEE Advanced 2023, securing a seat in IIT Kharagpur.
                  </p>
                </div>
              </div>
            </Card>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <img
                src={iitKgpImage}
                alt="IIT Kharagpur Campus"
                className="rounded-lg shadow-2xl w-full max-w-lg"
                data-testid="img-campus"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}