import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Clock, Target, HelpCircle, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

export default function QuizLanding() {
  const [, setLocation] = useLocation();
  const isMobile = useIsMobile();

  const startQuiz = () => {
    setLocation("/quiz");
  };

  return (
    <div className={`min-h-screen bg-gray-50 flex items-center justify-center p-4 ${isMobile ? 'mobile-top-positioning' : ''}`}>
      <div className="w-full max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="quiz-card p-8 md:p-12 text-center"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            className="mb-8"
          >
            <div className="w-20 h-20 gradient-bg rounded-full flex items-center justify-center mx-auto">
              <HelpCircle className="text-white text-2xl w-8 h-8" />
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Is Your Body Trying to Tell You Something After You Sleep?
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto"
          >
            You've adapted to the stiffness, the fog, the fatigue. But that doesn't mean it's normal. In just 5 gentle questions, you'll see what your body might really be asking for.
          </motion.p>

          {/* Feature Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <div className="flex items-center justify-center gap-3 bg-gray-50 rounded-xl px-6 py-3">
              <Clock className="text-purple-500 w-5 h-5" />
              <span className="text-gray-700 font-medium">Takes 2-3 minutes</span>
            </div>
            <div className="flex items-center justify-center gap-3 bg-gray-50 rounded-xl px-6 py-3">
              <Target className="text-purple-500 w-5 h-5" />
              <span className="text-gray-700 font-medium">Personalized results</span>
            </div>
          </motion.div>

          {/* Start Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <Button
              onClick={startQuiz}
              className="gradient-bg text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto text-lg"
              size="lg"
            >
              <Play className="w-5 h-5" />
              Start Quiz
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
