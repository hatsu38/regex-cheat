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

export default function MatchTextForm() {
  const { targetText, regexText, updateTargetText } = useTargetText()

  const Highlighted = ({text = '', highlight = ''}) => {
    if (!highlight.trim()) {
      return <span>{text}</span>
    }
    const regex = new RegExp(`(${highlight})`, 'gmi')
    const parts = text.split(regex);

    return (
      <span>
        {parts.filter(Boolean).map((part, i) => (
          regex.test(part) &&
            <React.Fragment key={i}>
              <mark>{part}</mark>
              <br />
            </React.Fragment>
        ))}
      </span>
    )
  }

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
      <Highlighted text={targetText} highlight={regexText} />
    </>
  )
}