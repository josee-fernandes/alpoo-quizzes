'use client'

import { quizzes } from "@/app/services/data";
import { NextPage } from "next";
import { use, useMemo, useState } from "react";

interface QuizPageProps {
  params: Promise<{
    id: string
  }>
}

const Home: NextPage<QuizPageProps> = ({ params }) => {
  const parsedParams = use(params)
  const id = Number(parsedParams.id)

  const [viewAnswers, setViewAnswers] = useState(false)
  const [selected, setSelected] = useState('')

  const quiz = useMemo(() => quizzes.find(quiz => quiz.id === id), [id])

  if (!quiz) return (
    <div className="max-w-[1200px] w-[90%] mx-auto py-10">
      Quiz {id} not found
    </div>
  )

  return (
    <div className="max-w-[1200px] w-[90%] mx-auto py-10"> 
      <h1 className="text-2xl font-bold">{quiz.title}</h1>
      {quiz.questions.map((question) => (
        <div key={`q-${question.id}`} className="mt-10">
          <h2>{question.prefix} {question.question} {!viewAnswers ? '' : selected === question.answer ? '✅' : '❌'}</h2>
          {question.options.map((option) => (
            <div key={`q-${question.id}-o-${option.id}`} className="mt-2 flex gap-2">
              <input type="radio" name={`q-${question.id}`} value={option.prefix} onChange={event => setSelected(event.target.value)} />
              <label>{option.prefix}) {option.answer}</label>
            </div>
          ))}
        </div>
      ))}
      <div>
        <button
          className="bg-zinc-700 px-4 py-2 rounded-lg hover:bg-zinc-800 transition-all mt-10"
          onClick={() => setViewAnswers(oldViewAnswers => !oldViewAnswers)}
        >
          Check answers
        </button>
      </div>
    </div>
  );
}

export default Home