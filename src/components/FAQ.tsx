import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const faqs = [
  {
    question: "How accurate is the quiz recommendation?",
    answer: "Our quiz is based on extensive research and feedback from thousands of women. The comprehensive questions cover all major factors that influence period product choice, including flow, lifestyle, comfort preferences, and health considerations. While individual experiences may vary, our algorithm has a 92% satisfaction rate."
  },
  {
    question: "Are all recommended products available in India?",
    answer: "Yes! We've carefully curated our database to include only products that are readily available through Indian retailers like Amazon, Nykaa, Flipkart, and brand websites. Each product listing includes direct purchase links to make shopping convenient."
  },
  {
    question: "What if I'm new to periods or period products?",
    answer: "We welcome first-time users! Our quiz includes an option for those new to period products. We'll recommend beginner-friendly options with detailed explanations and suggest starting with familiar products like pads before exploring alternatives like cups or tampons."
  },
  {
    question: "How do you determine the environmental impact rating?",
    answer: "Our eco-ratings consider biodegradability, reusability, packaging materials, and manufacturing processes. Products with organic materials, minimal packaging, and reusable designs receive higher ratings. We also factor in the brand's overall sustainability practices."
  },
  {
    question: "Can I trust the skin sensitivity recommendations?",
    answer: "Our recommendations for sensitive skin focus on hypoallergenic materials like organic cotton, medical-grade silicone, and chemical-free options. However, individual sensitivities vary, so we always recommend patch testing new products and consulting healthcare providers for severe sensitivities."
  }
];

export const FAQ = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our quiz and recommendations
          </p>
        </div>

        <Card className="p-8 shadow-card bg-gradient-card border-0">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-b border-border last:border-b-0"
              >
                <AccordionTrigger className="text-left hover:text-primary transition-colors font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>
      </div>
    </section>
  );
};