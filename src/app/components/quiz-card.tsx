import Link from "next/link"

interface QuizCardProps {
  number: number
}

export const QuizCard: React.FC<QuizCardProps> = ({ number }) => {
  return (
    <li className="border p-4 rounded-lg border-zinc-500 hover:bg-zinc-900 transition-all">
      <Link href={`/quiz/${number}`} className="size-full block">Quiz {number}</Link>
    </li>
  )
}