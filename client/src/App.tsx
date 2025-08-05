import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import QuizLanding from "@/pages/quiz-landing";
import Quiz from "@/pages/quiz";
import QuizResults from "@/pages/quiz-results";

function Router() {
  return (
    <Switch>
      <Route path="/" component={QuizLanding} />
      <Route path="/quiz" component={Quiz} />
      <Route path="/quiz/results/:path" component={QuizResults} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
