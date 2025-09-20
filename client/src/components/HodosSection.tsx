import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, TrendingUp, Users, DollarSign, Target } from "lucide-react";

export default function HodosSection() {
  const openHodosWebsite = () => {
    window.open('https://www.hodosindia.com', '_blank');
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Entrepreneurship - Hodos</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Leading innovation in corporate travel expense management through automation and strategic partnerships
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Mission & Vision</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Hodos revolutionizes corporate travel expense management by automating complex financial workflows, 
                integrating with major booking platforms, and providing real-time expense tracking for enterprise clients.
              </p>
              <Button 
                onClick={openHodosWebsite}
                className="hover-elevate"
                data-testid="button-hodos-website"
              >
                Visit Hodos Website
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <Card className="p-6">
              <h4 className="text-xl font-semibold mb-4">My Role as Co-Founder & COO</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Target className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Built MVP for travel audit automation</span>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Collaborated with industry leaders including Otis, Dassault, and Rakuten</span>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>Led investor discussions and evaluated strategic funding opportunities</span>
                </li>
              </ul>
            </Card>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <Card className="p-6 text-center hover-elevate">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Enterprise Scale</h4>
              <p className="text-sm text-muted-foreground">
                Built for large corporations with complex travel policies
              </p>
            </Card>
            
            <Card className="p-6 text-center hover-elevate">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Industry Partners</h4>
              <p className="text-sm text-muted-foreground">
                Collaborated with Fortune 500 companies
              </p>
            </Card>
            
            <Card className="p-6 text-center hover-elevate">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Cost Optimization</h4>
              <p className="text-sm text-muted-foreground">
                Automated expense tracking and audit processes
              </p>
            </Card>
            
            <Card className="p-6 text-center hover-elevate">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">Strategic Vision</h4>
              <p className="text-sm text-muted-foreground">
                Led product roadmap and market positioning
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}