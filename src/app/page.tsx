import { QuizCard } from "./components/quiz-card";

export default function Home() {
  return (
    <div className="max-w-[1200px] w-[90%] mx-auto py-10"> 
      <nav>
        <ul className="flex flex-col gap-2">
          <QuizCard number={1} />
          <QuizCard number={2} />
          <QuizCard number={3} />
          <QuizCard number={4} />
          <QuizCard number={5} />
          <QuizCard number={6} />
        </ul>
      </nav>
    </div>
  );
}
