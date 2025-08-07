import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { resultContent } from "@/data/quiz-data";
import { useIsMobile } from "@/hooks/use-mobile";

export default function QuizResults() {
  const [match, params] = useRoute("/quiz/results/:path");
  const isMobile = useIsMobile();
  
  if (!match || !params?.path) {
    return null;
  }

  const result = resultContent[params.path];
  
  if (!result) {
    return null;
  }

  return (
    <div className={`min-h-screen bg-gray-50 flex items-center justify-center p-4 ${isMobile ? 'mobile-top-positioning' : ''}`}>
      <div className="w-full max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="quiz-card p-8 md:p-12 text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5, type: "spring" }}
            className="mb-8"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="text-white w-8 h-8" />
            </div>
          </motion.div>

          {/* Result Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight"
          >
            {result.title}
          </motion.h1>

          {/* Result Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg text-gray-600 mb-8 leading-relaxed"
          >
            {result.subtitle}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex justify-center"
          >
            <Button
              className="gradient-bg text-white font-semibold py-4 px-8 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 text-lg max-w-full break-words text-center"
              size="lg"
            >
              {result.buttonText}
            </Button>
          </motion.div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="mt-8 p-6 bg-gray-50 rounded-xl text-left"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-3">
              Your Sleep Pattern Analysis
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Based on your responses, we've identified specific areas where your sleep recovery could be improved. 
              The patterns you described are more common than you might think, and there are targeted approaches 
              that can help optimize your sleep for better morning energy and overall well-being.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
