import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Leaf, 
  Heart, 
  Clock, 
  Shield, 
  RefreshCw,
  Star,
  Circle
} from "lucide-react";
import { Product } from "@/data/products";

interface ResultsProps {
  recommendations: { primary: Product; alternatives: Product[] } | null;
  onRetakeQuiz: () => void;
  onBackToHome: () => void;
}

export const Results = ({ recommendations, onRetakeQuiz, onBackToHome }: ResultsProps) => {
  if (!recommendations) return null;
  
  const { primary: topProduct, alternatives } = recommendations;

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'pad':
        return <Shield className="h-5 w-5" />;
      case 'tampon':
        return <Circle className="h-5 w-5" />;
      case 'cup':
        return <Heart className="h-5 w-5" />;
      default:
        return <Shield className="h-5 w-5" />;
    }
  };

  const getEcoColor = (rating: string) => {
    switch (rating) {
      case 'high': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-hero py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Your Perfect Match!
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Based on your quiz responses, we've found the ideal period products for your unique needs.
          </p>
        </div>

        {/* Top Recommendation */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
            Our Top Pick for You
          </h2>
          
          <Card className="p-8 shadow-card bg-gradient-card border-2 border-primary/20 animate-slide-up">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-primary">{getTypeIcon(topProduct.type)}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">
                      {topProduct.brand} {topProduct.name}
                    </h3>
                    <Badge variant="secondary" className="mt-1">
                      {topProduct.type.charAt(0).toUpperCase() + topProduct.type.slice(1)}
                    </Badge>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">{topProduct.description}</p>

                <div className="space-y-3 mb-6">
                  {topProduct.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-primary fill-current" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  <Badge className={getEcoColor(topProduct.ecoRating)}>
                    <Leaf className="h-3 w-3 mr-1" />
                    {topProduct.ecoRating} eco impact
                  </Badge>
                {topProduct.skinType === 'sensitive' && (
                    <Badge className="bg-pink-100 text-pink-800">
                      <Shield className="h-3 w-3 mr-1" />
                      Sensitive skin friendly
                    </Badge>
                  )}
                  {topProduct.reusable && (
                    <Badge className="bg-blue-100 text-blue-800">
                      <RefreshCw className="h-3 w-3 mr-1" />
                      Reusable
                    </Badge>
                  )}
                </div>
              </div>

              <div>
                <div className="bg-background rounded-lg p-6 mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="font-semibold text-foreground">Price Range</span>
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    {topProduct.priceRange}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">per pack/unit</div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Shop Now:</h4>
                  {topProduct.retailers.map((retailer, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="w-full justify-between hover:bg-primary hover:text-white"
                      asChild
                    >
                      <a href={retailer.url} target="_blank" rel="noopener noreferrer">
                        {retailer.name} - {retailer.price}
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Alternative Recommendations */}
        {alternatives.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
              Other Products You Could Try
            </h2>
            <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
              Based on your answers, here are some other great options including different product types:
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {alternatives.map((product, index) => (
                <Card key={product.id} className="p-6 shadow-card bg-gradient-card border-0 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary">{getTypeIcon(product.type)}</div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground">
                        {product.brand} {product.name}
                      </h3>
                      <Badge variant="outline">
                        {product.type.charAt(0).toUpperCase() + product.type.slice(1)}
                      </Badge>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{product.description}</p>

                  <div className="flex items-center justify-between mb-4">
                    <div className="text-lg font-semibold text-primary">
                      {product.priceRange}
                    </div>
                    <Badge className={getEcoColor(product.ecoRating)}>
                      {product.ecoRating} eco
                    </Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {product.retailers.slice(0, 2).map((retailer, idx) => (
                      <Button
                        key={idx}
                        variant="outline"
                        size="sm"
                        className="text-xs hover:bg-primary hover:text-white"
                        asChild
                      >
                        <a href={retailer.url} target="_blank" rel="noopener noreferrer">
                          {retailer.name} - {retailer.price}
                        </a>
                      </Button>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Why We Picked This */}
        <Card className="p-8 shadow-card bg-gradient-card border-0 mb-12">
          <h2 className="text-2xl font-semibold text-foreground mb-4 text-center">
            Why We Picked This for You
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <Heart className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Perfect Fit</h3>
              <p className="text-sm text-muted-foreground">
                Matches your flow level and activity preferences perfectly
              </p>
            </div>
            <div>
              <Clock className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Lifestyle Match</h3>
              <p className="text-sm text-muted-foreground">
                Suits your daily routine and protection needs
              </p>
            </div>
            <div>
              <Leaf className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Values Aligned</h3>
              <p className="text-sm text-muted-foreground">
                Matches your environmental and budget preferences
              </p>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="text-center space-y-4 sm:space-y-0 sm:space-x-4 sm:flex sm:justify-center">
          <Button
            onClick={onRetakeQuiz}
            variant="outline"
            size="lg"
            className="w-full sm:w-auto"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Retake Quiz
          </Button>
          <Button
            onClick={onBackToHome}
            size="lg"
            className="w-full sm:w-auto bg-primary hover:bg-primary-dark"
          >
            Explore More
          </Button>
        </div>
      </div>
    </div>
  );
};