import React from "react"
import { useSelector, useDispatch } from 'react-redux'

import MatchText from "./match-text"
import ContentEditable from 'react-contenteditable'

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
    <React.Fragment>
      <label className="block mt-5">
        <p className="dark:text-green-400">テスト文章</p>
        <div className="relative z-0 dark:bg-gray-100 focus:ring focus:border-white  dark:text-gray-800 ">
          <MatchText />
          <textarea
            rows={textAreaRow}
            className="relative form-input mt-1 block w-full text-xl bg-transparent z-10"
            placeholder="0120-1234-5678"
            value={targetText}
            onChange={e => updateTargetText(e.target.value)}
          />
        </div>
      </label>
    </React.Fragment>
  )
}