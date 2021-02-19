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
  const parts = targetText.split(regex)
  console.log("parts", parts)
  const filteredParts = parts.filter(part => Boolean && regex.test(part))
  return (
    <span>
      {filteredParts.map((part, i) => (
        <React.Fragment key={i}>
          <mark>{part}</mark>
          <br />
        </React.Fragment>
      ))}
    </span>
  )
}