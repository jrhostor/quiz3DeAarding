import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { firstQuestion, quizPaths, type QuizAnswer } from "@/data/quiz-data";
import { useIsMobile } from "@/hooks/use-mobile";

interface UserAnswer {
  questionIndex: number;
  answer: QuizAnswer;
}

export default function Quiz() {
  const [, setLocation] = useLocation();
  const isMobile = useIsMobile();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedPath, setSelectedPath] = useState<string>("");
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<QuizAnswer | null>(null);
  const [animationDirection, setAnimationDirection] = useState<"left" | "right">("right");

  const totalQuestions = 5;
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;

  // Get current question based on index and path
  const getCurrentQuestion = () => {
    if (currentQuestionIndex === 0) {
      return firstQuestion;
    }
    
    if (selectedPath && quizPaths[selectedPath]) {
      return quizPaths[selectedPath][currentQuestionIndex - 1];
    }
    
    return null;
  };

  const currentQuestion = getCurrentQuestion();

  const handleAnswerSelect = (answer: QuizAnswer) => {
    setSelectedAnswer(answer);
  };

  const handleNext = () => {
    if (!selectedAnswer) return;

    // Store the answer
    const newAnswer: UserAnswer = {
      questionIndex: currentQuestionIndex,
      answer: selectedAnswer
    };
    
    setUserAnswers(prev => [...prev, newAnswer]);

    // If this is the first question, set the path
    if (currentQuestionIndex === 0 && selectedAnswer.path) {
      setSelectedPath(selectedAnswer.path);
    }

    // Check if quiz is complete
    if (currentQuestionIndex >= totalQuestions - 1) {
      setLocation(`/quiz/results/${selectedPath || selectedAnswer.path}`);
      return;
    }

    // Move to next question
    setAnimationDirection("right");
    setCurrentQuestionIndex(prev => prev + 1);
    setSelectedAnswer(null);
  };

  const handleBack = () => {
    if (currentQuestionIndex === 0) return;

    setAnimationDirection("left");
    setCurrentQuestionIndex(prev => prev - 1);
    setUserAnswers(prev => prev.slice(0, -1));
    setSelectedAnswer(null);
  };

  // Reset to landing if no question data
  useEffect(() => {
    if (!currentQuestion) {
      setLocation("/");
    }
  }, [currentQuestion, setLocation]);

  if (!currentQuestion) {
    return null;
  }

  const slideVariants = {
    enter: (direction: string) => ({
      x: direction === "right" ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: string) => ({
      zIndex: 0,
      x: direction === "right" ? -1000 : 1000,
      opacity: 0
    })
  };

  return (
    <div className={`min-h-screen bg-gray-50 flex items-center justify-center p-4 ${isMobile ? 'mobile-top-positioning' : ''}`}>
      <div className="w-full max-w-2xl mx-auto">
        <div className="quiz-card p-8 md:p-12">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-600">
                Question {currentQuestionIndex + 1} of {totalQuestions}
              </span>
              <span className="text-sm font-medium text-gray-600">
                {Math.round(progress)}%
              </span>
            </div>
            <Progress value={progress} className="w-full" />
          </div>

          {/* Question Content */}
          <AnimatePresence mode="wait" custom={animationDirection}>
            <motion.div
              key={currentQuestionIndex}
              custom={animationDirection}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="mb-8"
            >
              {/* Question */}
              <div className="mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  {currentQuestion.question}
                </h2>
              </div>

              {/* Answer Options */}
              <div className="space-y-4">
                {currentQuestion.answers.map((answer, index) => (
                  <motion.button
                    key={answer.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleAnswerSelect(answer)}
                    className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-20 ${
                      selectedAnswer?.id === answer.id
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-purple-300 hover:bg-purple-25'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className="w-6 h-6 rounded-full border-2 border-gray-300 mr-4 flex-shrink-0 flex items-center justify-center">
                        <div className={`w-3 h-3 rounded-full bg-purple-500 transition-opacity duration-200 ${
                          selectedAnswer?.id === answer.id ? 'opacity-100' : 'opacity-0'
                        }`} />
                      </div>
                      <span className="text-gray-700 font-medium leading-relaxed">
                        {currentQuestionIndex === 0 ? `${answer.id}. ${answer.text}` : `${String.fromCharCode(65 + index)}. ${answer.text}`}
                      </span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8">
            <Button
              variant="ghost"
              onClick={handleBack}
              className={`text-gray-500 hover:text-gray-700 font-medium py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors duration-200 ${
                currentQuestionIndex === 0 ? 'invisible' : 'visible'
              }`}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
            
            <div className="flex-1" />
            
            <Button
              onClick={handleNext}
              disabled={!selectedAnswer}
              className="gradient-bg text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {currentQuestionIndex >= totalQuestions - 1 ? 'See Results' : 'Next'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
