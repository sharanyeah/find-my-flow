import { useState } from "react";
import { Hero } from "@/components/Hero";
import { Quiz } from "@/components/Quiz";
import { Results } from "@/components/Results";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { QuizAnswer, getRecommendations, Product } from "@/data/products";

type ViewState = 'home' | 'quiz' | 'results';

const Index = () => {
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [recommendations, setRecommendations] = useState<{ primary: Product; alternatives: Product[] } | null>(null);

  const handleStartQuiz = () => {
    setCurrentView('quiz');
  };

  const handleQuizComplete = (answers: QuizAnswer) => {
    const products = getRecommendations(answers);
    setRecommendations(products);
    setCurrentView('results');
  };

  const handleRetakeQuiz = () => {
    setCurrentView('quiz');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
  };

  const handleBackFromQuiz = () => {
    setCurrentView('home');
  };

  if (currentView === 'quiz') {
    return <Quiz onComplete={handleQuizComplete} onBack={handleBackFromQuiz} />;
  }

  if (currentView === 'results' && recommendations) {
    return (
      <Results 
        recommendations={recommendations}
        onRetakeQuiz={handleRetakeQuiz}
        onBackToHome={handleBackToHome}
      />
    );
  }

  return (
    <div className="min-h-screen">
      <Hero onStartQuiz={handleStartQuiz} />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
