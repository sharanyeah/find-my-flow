import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Sparkles } from "lucide-react";

interface HeroProps {
  onStartQuiz: () => void;
}

export const Hero = ({ onStartQuiz }: HeroProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero py-20 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-r from-primary-light/20 to-transparent" />
      
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
              <Heart className="h-4 w-4 fill-current" />
              Curated for your flow, designed for your vibe
            </div>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Find Your Perfect
            <span className="block text-primary animate-float">
              Period Product
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
            Take our research-backed quiz to discover the ideal menstrual products for your unique needs. 
            Get personalized recommendations from trusted Indian and international brands.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button 
              onClick={onStartQuiz}
              size="lg"
              className="group bg-primary hover:bg-primary-dark text-white px-8 py-4 text-lg font-semibold shadow-button hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              Take the Quiz
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-primary-light/20 p-3">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Research-Backed</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Comprehensive questions to find your perfect match
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-primary-light/20 p-3">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Made for India</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Curated products available across Indian retailers
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="rounded-full bg-primary-light/20 p-3">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Instant Results</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Get personalized recommendations in under 2 minutes
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};