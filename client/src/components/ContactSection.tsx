import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const [calendlyUrl, setCalendlyUrl] = useState("");

  useEffect(() => {
    const now = new Date();
    const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;
    setCalendlyUrl(`https://calendly.com/palsnehal004/30min?month=${formattedDate}`);
  }, []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    //todo: implement actual form submission to backend
    console.log('Form submitted:', formData);
    
    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  const openEmail = () => {
    window.open('mailto:palsnehal004@gmail.com', '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-lg text-muted-foreground">
            Interested in collaboration, opportunities, or just want to chat about tech and entrepreneurship?
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <Card className="p-6 hover-elevate cursor-pointer" onClick={openEmail}>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-muted-foreground">palsnehal004@gmail.com</p>
                    </div>
                  </div>
                </Card>
                
                <Card 
                  className="p-6 hover-elevate cursor-pointer" 
                  onClick={() => openLink('https://www.linkedin.com/in/snehal-pal-4735b4266/')}
                  data-testid="contact-linkedin"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Linkedin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">LinkedIn</h4>
                      <p className="text-muted-foreground">Connect professionally</p>
                    </div>
                  </div>
                </Card>
                
                <Card 
                  className="p-6 hover-elevate cursor-pointer" 
                  onClick={() => openLink('https://github.com/2004Snehal')}
                  data-testid="contact-github"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Github className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">GitHub</h4>
                      <p className="text-muted-foreground">View my code and projects</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">What I'm Looking For</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Product management and analytics opportunities</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>AI research collaborations and projects</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Startup mentorship and entrepreneurship discussions</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                  <span>Speaking opportunities at tech events</span>
                </li>
              </ul>
            </div>
          </div>
          
          <Card className="p-8">
            <h3 className="text-2xl font-semibold mb-6">Schedule a Meeting</h3>
            <div className="w-full">
              <iframe
                src={calendlyUrl}
                width="100%"
                height="700px"
                frameBorder="0"
                title="Schedule a meeting"
                data-testid="calendly-embed"
              ></iframe>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}