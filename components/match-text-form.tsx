import React from "react"
import { useSelector, useDispatch } from 'react-redux'

import MatchText from "./match-text"

const useTargetText = () => {
  const targetText = useSelector((state) => state.targetText)
  const dispatch = useDispatch()
  const updateTargetText = (value) =>
    dispatch({
      type: "UPDATE_TARGET_TEXT",
      targetText: value
    })
  return { targetText, dispatch, updateTargetText }
}

export default function MatchTextForm() {
  const { targetText, updateTargetText } = useTargetText()

  const lfCount = targetText.split("\n").length + 1
  const textAreaRow = Math.max(lfCount, 4)

  return (
    <>
      <label className="block mt-5">
        <span className="dark:text-green-400">テスト文章</span>
        <textarea
          rows={textAreaRow}
          className="resize-y form-input mt-1 block w-full text-xl rounded-md dark:bg-gray-100 dark:text-gray-800 focus:ring focus:border-white"
          placeholder="0120-1234-5678"
          defaultValue={targetText}
          onChange={e => updateTargetText(e.target.value)}
        />
      </label>
      <MatchText />
    </>
  )
}