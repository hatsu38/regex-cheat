import React from "react"
import { useSelector, useDispatch } from 'react-redux'

const useTargetText = () => {
  const targetText = useSelector((state) => state.targetText)
  const regexText = useSelector((state) => state.regexText)
  const dispatch = useDispatch()
  const updateTargetText = (value) =>
    dispatch({
      type: "UPDATE_TARGET_TEXT",
      targetText: value
    })
  return { targetText, regexText, dispatch, updateTargetText }
}

export default function MatchText() {
  const { targetText, regexText } = useTargetText()
  if (!regexText.trim()) { return null }

  const regex = new RegExp(`(${regexText})`, 'gmi')
  const parts = targetText.split(regex);
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