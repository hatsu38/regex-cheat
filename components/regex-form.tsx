import React, { useState } from 'react'
import FlagsModal from "./flags-modal"
import { useSelector, useDispatch } from 'react-redux'
import ContentEditable from 'react-contenteditable'

const useRegexText = () => {
  const regexText = useSelector((state) => state.regexText)
  const regexFlags = useSelector((state) => state.regexFlags)
  const dispatch = useDispatch()
  const updateRegexText = (value) =>
    dispatch({
      type: "UPDATE_REGEX_TEXT",
      regexText: value
    })
  return { regexText, regexFlags, dispatch, updateRegexText }
}

export default function RegexForm() {
  const [showModal, setShowModal] = useState(false);
  const { regexText, regexFlags, updateRegexText } = useRegexText()
  const trueFlags = regexFlags.filter(flag => flag.checked)
  const trueFlagsKeys = trueFlags.map(flag => flag.name).join("")

  return (
    <>
      <div className="flex justify-between">
        <span className="dark:text-green-400">正規表現</span>
        <a className="dark:text-green-400" onClick={() => setShowModal(true)}>Flags</a>
      </div>
      <div className="grid grid-cols-9 justify-between text-2xl py-4 form-input mt-1 block w-full rounded-md dark:bg-gray-100">
        <ContentEditable
          html={`${regexText}`}
          disabled={false}
          onChange={e => updateRegexText(e.target.value)}
          tagName='div'
          className="dark:text-gray-700 col-span-8"
        />
        <div className="dark:text-gray-500 text-right outline-none" onClick={() => setShowModal(true)}>
          <span>{trueFlagsKeys}</span>
          <svg className="inline-block w-4 ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
          </svg>
        </div>
      </div>
      {showModal && <FlagsModal setShowModal={setShowModal} />}
    </>
  )
}