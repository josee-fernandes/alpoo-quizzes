'use client'

import { quizzes } from "@/app/services/data";
import { NextPage } from "next";
import { use, useCallback, useEffect, useMemo, useState } from "react";

interface QuizPageProps {
  params: Promise<{
    id: string
  }>
}

const Home: NextPage<QuizPageProps> = ({ params }) => {
  const parsedParams = use(params)
  const id = Number(parsedParams.id)

  const [viewAnswers, setViewAnswers] = useState(false)

  const quiz = useMemo(() => quizzes.find(quiz => quiz.id === id), [id])

  const [selected, setSelected] = useState<{ [key: number]: string }>({})

  const populateDefaultSelected = useCallback(() => {
    if (quiz) {
      const defaultSelected: { [key: number]: string } = {}

      for (const question of quiz.questions) {
        defaultSelected[question.id] = ''
      }

      setSelected(defaultSelected)
    }
  }, [quiz])

  useEffect(() => {
    populateDefaultSelected()
  }, [populateDefaultSelected])

  if (!quiz) return (
    <div className="max-w-[1200px] w-[90%] mx-auto py-10">
      Quiz {id} not found
    </div>
  )

  return (
    <div className="max-w-[1200px] w-[90%] mx-auto py-10"> 
      <div className="w-full flex justify-between items-center gap-4">
        <h1 className="text-2xl font-bold">{quiz.title}</h1>
        <button
          className="bg-zinc-700 px-4 py-2 rounded-lg hover:bg-zinc-800 transition-all max-w-[142px] w-full"
          onClick={() => setViewAnswers(oldViewAnswers => !oldViewAnswers)}
        >
          Check answers
        </button>
      </div>
      <div className="grid grid-cols-2 gap-10">
        {quiz.questions.map((question) => (
            <div key={`q-${id}-q-${question.id}`} className="mt-10">
              <h2>{!viewAnswers ? '' : selected[question.id] === question.answer ? '✅' : '❌'} {question.prefix} {question.question}</h2>
              {question.options.map((option) => (
                <div key={`q-${question.id}-o-${option.id}`} className="mt-2 flex gap-2">
                  <input
                    type="radio"
                    id={`q-${question.id}`}
                    name={`q-${question.id}`}
                    value={option.prefix}
                    onChange={event => setSelected(oldSelected => ({
                          ...oldSelected, [question.id]: event.target.value
                        })
                      )
                    }
                  />
                  <label htmlFor={`q-${question.id}`}>{option.prefix}) {option.answer}</label>
                </div>
              ))}
            </div>
          )
        )}
      </div>
      <div className="w-full flex justify-end mt-10">
        <button
          className="bg-zinc-700 px-4 py-2 rounded-lg hover:bg-zinc-800 transition-all max-w-[142px] w-full"
          onClick={() => setViewAnswers(oldViewAnswers => !oldViewAnswers)}
        >
          Check answers
        </button>
      </div>
    </div>
  );
}

export default Home