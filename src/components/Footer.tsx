import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Heart, Mail } from "lucide-react";
import { useState } from "react";

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log("Newsletter signup:", email);
    setEmail("");
    // Add success toast here
  };

  return (
    <footer className="bg-gradient-hero border-t border-border">
      {/* Newsletter Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Card className="p-8 shadow-card bg-gradient-card border-0">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-primary-light/20 p-3">
                <Mail className="h-8 w-8 text-primary" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Stay Updated on Period Health
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get the latest insights on period products, health tips, and exclusive offers 
              delivered to your inbox monthly.
            </p>
            
            <form onSubmit={handleNewsletterSignup} className="flex gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button 
                type="submit" 
                className="bg-primary hover:bg-primary-dark whitespace-nowrap"
              >
                Subscribe
              </Button>
            </form>
            
            <p className="text-xs text-muted-foreground mt-3">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </Card>
        </div>
      </div>

      {/* Main Footer */}
      <div className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <Heart className="h-8 w-8 text-primary fill-current" />
                <h3 className="text-xl font-bold text-foreground">Period Product Finder</h3>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Empowering women across India to find their perfect period products through 
                research-backed recommendations and comprehensive product information.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">
                    Take Quiz
                  </Button>
                </li>
                <li>
                  <a href="https://www.uninhibited.org.in/" target="_blank" rel="noopener noreferrer">
                    <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">
                      Health Resources
                    </Button>
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Support</h4>
              <ul className="space-y-2">
                <li>
                  <Button variant="link" className="p-0 h-auto text-muted-foreground hover:text-primary">
                    FAQ
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-border py-6 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Period Product Finder. Made with love for women in India.
          </p>
          <p className="text-sm text-muted-foreground mt-2 sm:mt-0">
            Empowering period health, one recommendation at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};