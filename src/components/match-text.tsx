import React from "react"
import { useSelector, useDispatch } from 'react-redux'

const useTargetText = () => {
  const targetText = useSelector((state) => state.targetText)
  const regexText = useSelector((state) => state.regexText)
  const regexFlags = useSelector((state) => state.regexFlags)
  const dispatch = useDispatch()
  const updateTargetText = (value) =>
    dispatch({
      type: "UPDATE_TARGET_TEXT",
      targetText: value
    })
  return { targetText, regexText, regexFlags, dispatch, updateTargetText }
}

export default function MatchText() {
  const { targetText, regexText, regexFlags } = useTargetText()
  if (!regexText.trim()) { return null }

  const trueFlags = regexFlags.filter(flag => flag.checked)
  const trueFlagsKeys = trueFlags.map(flag => flag.name)
  const regex = new RegExp(`(${regexText})`, trueFlagsKeys.join(""))
  const lines = targetText.split("\n")

  return (
    <div className="overflow-auto">
      <div className="absolute top-0 form-input mt-1 text-xl bg-transparent">
      {lines.map((line, i) =>
        <React.Fragment key={i}>
          {line.split(" ").map((part, j) =>
            <React.Fragment key={j}>
              {regex.test(part) ? <mark key={j} className="rounded bg-green-300">{part}</mark> : <span key={j}>{part}</span>}{" "}
            </React.Fragment>
          )}
          <br />
        </React.Fragment>
        )}
      </div>
    </div>
  )
}