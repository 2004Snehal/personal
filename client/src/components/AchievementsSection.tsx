import { Card } from "@/components/ui/card";
import { Trophy, Star, TrendingUp, Award } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  description: string;
  metric?: string;
  icon: 'trophy' | 'star' | 'trending' | 'award';
}

export default function AchievementsSection() {
  //todo: remove mock functionality - achievements data will come from props
  const achievements: Achievement[] = [
    
  ];

  const getIcon = (iconType: string) => {
    switch (iconType) {
      case 'trophy':
        return <Trophy className="h-6 w-6" />;
      case 'star':
        return <Star className="h-6 w-6" />;
      case 'trending':
        return <TrendingUp className="h-6 w-6" />;
      case 'award':
        return <Award className="h-6 w-6" />;
      default:
        return <Trophy className="h-6 w-6" />;
    }
  };

  return (
    <section id="achievements" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Major Achievements</h2>
          <p className="text-lg text-muted-foreground">
            Recognition for academic excellence, leadership, and research contributions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((achievement) => (
            <Card 
              key={achievement.id} 
              className="p-6 text-center hover-elevate transition-all duration-300"
              data-testid={`achievement-${achievement.id}`}
            >
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <div className="text-primary">
                    {getIcon(achievement.icon)}
                  </div>
                </div>
                
                {achievement.metric && (
                  <div className="text-2xl font-bold text-primary">
                    {achievement.metric}
                  </div>
                )}
                
                <div>
                  <h3 className="font-semibold text-lg mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Additional stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-primary mb-2">3+</div>
            <div className="text-muted-foreground">Research Projects</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">1</div>
            <div className="text-muted-foreground">Startup Founded</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">2</div>
            <div className="text-muted-foreground">Internships</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary mb-2">2+</div>
            <div className="text-muted-foreground">Competitive Exams Top 1 Percentile</div>
          </div>
        </div>
      </div>
    </section>
  );
}