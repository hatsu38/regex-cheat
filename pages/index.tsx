import RegexForm from "../components/regex-form"
import MatchTextForm from "../components/match-text-form"

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="my-4">
        <h1 className="italic text-center text-5xl mt-20 dark:text-green-400">Regex Cheat</h1>
      </div>
      <RegexForm />
      <MatchTextForm />
    </div>
  )
}
