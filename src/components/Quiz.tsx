import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { QuizAnswer } from "@/data/products";

interface QuizProps {
  onComplete: (answers: QuizAnswer) => void;
  onBack: () => void;
}

const questions = [
  {
    id: 'flow',
    question: 'How would you describe your usual menstrual flow throughout your cycle?',
    options: [
      { value: 'light', label: 'Light', description: 'Spotting or light bleeding, usually manageable' },
      { value: 'moderate', label: 'Moderate', description: 'Regular, predictable flow for 3-5 days' },
      { value: 'heavy', label: 'Heavy', description: 'Heavy bleeding that requires serious protection' },
      { value: 'irregular', label: 'Irregular', description: 'Unpredictable patterns that change monthly' }
    ]
  },
  {
    id: 'duration',
    question: 'Typically, how many days does your period last from start to finish?',
    options: [
      { value: 'short', label: '1-3 days', description: 'Short periods' },
      { value: 'moderate', label: '4-6 days', description: 'Standard length periods' },
      { value: 'long', label: '7+ days', description: 'Longer periods' }
    ]
  },
  {
    id: 'activity',
    question: 'What\'s your usual level of physical activity when you\'re on your period?',
    options: [
      { value: 'sedentary', label: 'Mostly chilling at home', description: 'Home rest, minimal movement' },
      { value: 'light', label: 'Light movement', description: 'Stretching, walking, gentle yoga' },
      { value: 'moderate', label: 'Gym and jogging', description: 'Regular workouts and cardio' },
      { value: 'intense', label: 'Intense workouts and water sports', description: 'High-intensity exercise and swimming' }
    ]
  },
  {
    id: 'skinSensitivity',
    question: 'How sensitive is your skin during your period, especially in areas that come into contact with products?',
    options: [
      { value: 'ultra', label: 'Ultra-sensitive', description: 'Need hypoallergenic, gentle products' },
      { value: 'sometimes', label: 'Sometimes reactive', description: 'Occasional irritation or sensitivity' },
      { value: 'chill', label: 'Pretty chill', description: 'Low-maintenance, no sensitivity issues' }
    ]
  },
  {
    id: 'internalComfort',
    question: 'How familiar and comfortable are you with internal products like tampons or menstrual cups?',
    options: [
      { value: 'pro', label: 'Pro who loves them', description: 'Experienced and comfortable with internal products' },
      { value: 'curious', label: 'Curious to try', description: 'Interested but haven\'t tried yet' },
      { value: 'external', label: 'Prefer external options', description: 'Stick to pads and external options' },
      { value: 'never', label: 'Not interested', description: 'Prefer to avoid internal products' }
    ]
  },
  {
    id: 'leakConcern',
    question: 'How often do you experience leaks or product failures during your period?',
    options: [
      { value: 'rare', label: 'Rare annoyance', description: 'Leaks hardly ever happen' },
      { value: 'occasional', label: 'Happens occasionally', description: 'Some leaks, but manageable' },
      { value: 'frequent', label: 'Frequent frustration', description: 'Leaks are a regular concern' }
    ]
  },
  {
    id: 'environmental',
    question: 'How important is the environmental impact of your period products in your decision-making?',
    options: [
      { value: 'major', label: 'Major must-have', description: 'Eco-friendliness is a top priority' },
      { value: 'nice', label: 'Nice-to-have', description: 'Consider it but not the main factor' },
      { value: 'not', label: 'Not actively considered', description: 'Focus on other factors first' }
    ]
  },
  {
    id: 'budget',
    question: 'What\'s your typical monthly budget for period care products?',
    options: [
      { value: 'affordable', label: 'Very affordable (₹0-200)', description: 'Budget-conscious choices' },
      { value: 'balanced', label: 'Balanced spend (₹200-500)', description: 'Mid-range, good value products' },
      { value: 'splurge', label: 'Don\'t mind splurging (₹500-1000)', description: 'Premium products occasionally' },
      { value: 'best', label: 'Go all out (₹1000+)', description: 'Always get the best available' }
    ]
  },
  {
    id: 'overnight',
    question: 'How critical is overnight protection for you to avoid leaks and get restful sleep?',
    options: [
      { value: 'critical', label: 'Every night essential', description: 'Must have reliable overnight protection' },
      { value: 'some', label: 'Some nights only', description: 'Occasional overnight protection needed' },
      { value: 'not', label: 'Not really concerned', description: 'Overnight protection isn\'t a priority' }
    ]
  },
  {
    id: 'fragrance',
    question: 'When it comes to scent and fragrance in period products, what\'s your take?',
    options: [
      { value: 'free', label: 'Fragrance-free only', description: 'Avoid any scents or fragrances' },
      { value: 'light', label: 'Light scent OK', description: 'Don\'t mind subtle fragrances' },
      { value: 'no-preference', label: 'No preference', description: 'Scent doesn\'t matter to me' }
    ]
  },
  {
    id: 'absorbency',
    question: 'What absorbency level do you usually reach for when choosing your period products?',
    options: [
      { value: 'light', label: 'Light or regular', description: 'Light to regular absorbency is sufficient' },
      { value: 'super', label: 'Super or extra absorbent', description: 'Need super or extra absorbent for heavier days' },
      { value: 'overnight', label: 'Overnight level protection', description: 'Require maximum overnight protection' }
    ]
  },
  {
    id: 'travel',
    question: 'How often do you travel or move around while on your period?',
    options: [
      { value: 'homebound', label: 'Mostly homebound', description: 'Stay at home or local area' },
      { value: 'occasional', label: 'Occasional travel', description: 'Few trips for work or leisure' },
      { value: 'frequent', label: 'Frequently on-the-go', description: 'Regular travel and movement' },
      { value: 'fulltime', label: 'Full-time traveler', description: 'Constantly moving and traveling' }
    ]
  },
  {
    id: 'sleepPosition',
    question: 'What\'s your typical sleeping position during your period, and do you feel product comfort is affected by it?',
    options: [
      { value: 'back', label: 'Back sleeper', description: 'Sleep on back, comfort matters' },
      { value: 'side', label: 'Side sleeper', description: 'Sleep on side, need flexible products' },
      { value: 'stomach', label: 'Stomach sleeper', description: 'Sleep on stomach, thin products preferred' },
      { value: 'toss', label: 'Toss and turn', description: 'Move around, need secure protection' }
    ]
  },
  {
    id: 'priorityFeature',
    question: 'Which feature matters most to you when picking a period product besides absorbency?',
    options: [
      { value: 'disposal', label: 'Easy disposal or cleaning', description: 'Convenience in disposal or maintenance' },
      { value: 'discreet', label: 'Discreet and low-profile', description: 'Invisible under clothing' },
      { value: 'comfort', label: 'Softness and comfort', description: 'Gentle materials and comfortable fit' },
      { value: 'design', label: 'Fun design with colors', description: 'Attractive patterns and colors' }
    ]
  },
  {
    id: 'allergies',
    question: 'Do you have any allergies or sensitivities that impact your choice of period products?',
    options: [
      { value: 'strict', label: 'Strictly hypoallergenic needed', description: 'Must have hypoallergenic products' },
      { value: 'sometimes', label: 'Sometimes sensitive', description: 'Occasional reactions to certain materials' },
      { value: 'none', label: 'Don\'t worry about allergies', description: 'No known allergies or sensitivities' }
    ]
  },
  {
    id: 'productType',
    question: 'Which type of period product would you prefer to try or continue using?',
    options: [
      { value: 'pad', label: 'Pads', description: 'External protection, easy to use' },
      { value: 'tampon', label: 'Tampons', description: 'Internal protection, great for active days' },
      { value: 'cup', label: 'Menstrual Cups', description: 'Reusable, eco-friendly option' },
      { value: 'underwear', label: 'Period Underwear', description: 'All-in-one protection and comfort' }
    ]
  }
];

export const Quiz = ({ onComplete, onBack }: QuizProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Partial<QuizAnswer>>({});

  const handleAnswer = (value: string) => {
    const questionId = questions[currentQuestion].id as keyof QuizAnswer;
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(answers as QuizAnswer);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else {
      onBack();
    }
  };

  const currentQuestionData = questions[currentQuestion];
  const currentAnswer = answers[currentQuestionData.id as keyof QuizAnswer];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-hero py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-foreground">Period Product Quiz</h2>
            <span className="text-sm text-muted-foreground">
              {currentQuestion + 1} of {questions.length}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        <Card className="p-8 shadow-card bg-gradient-card border-0 animate-fade-in">
          <h3 className="text-xl font-semibold text-foreground mb-3">
            {currentQuestionData.question}
          </h3>

          <div className="space-y-3">
            {currentQuestionData.options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 hover:border-primary hover:bg-primary/5 ${
                  currentAnswer === option.value
                    ? 'border-primary bg-primary/10 shadow-soft'
                    : 'border-border bg-background'
                }`}
              >
                <div className="font-medium text-foreground">{option.label}</div>
                <div className="text-sm text-muted-foreground mt-1">{option.description}</div>
              </button>
            ))}
          </div>

          <div className="flex items-center justify-between mt-8">
            <Button
              variant="outline"
              onClick={handlePrevious}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              {currentQuestion === 0 ? 'Back to Home' : 'Previous'}
            </Button>

            <Button
              onClick={handleNext}
              disabled={!currentAnswer}
              className="flex items-center gap-2 bg-primary hover:bg-primary-dark disabled:opacity-50"
            >
              {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'}
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};