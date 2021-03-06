import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ContentEditable from 'react-contenteditable'
import FlagsModal from './flags-modal'
import RegexValidMessage from './regex-valid-message'

type Flag = {
  name: string
  targetText: string
  regexText: string
  regexFlags: []
  checked: boolean
}

const tryRegex = (regexText: string, trueFlagsKeys: string) => {
  try {
    new RegExp(`(${regexText})`, trueFlagsKeys)
    return true
  } catch (error) {
    return false
  }
}

const useRegexText = () => {
  const regexText = useSelector((state: Flag) => state.regexText)
  const regexFlags = useSelector((state: Flag) => state.regexFlags)
  const dispatch = useDispatch()
  const updateRegexText = (value: string) =>
    dispatch({
      type: 'UPDATE_REGEX_TEXT',
      regexText: value,
    })
  return { regexText, regexFlags, dispatch, updateRegexText }
}

const RegexForm: React.FC = () => {
  const [showModal, setShowModal] = useState(false)
  const { regexText, regexFlags, updateRegexText } = useRegexText()
  const trueFlags = regexFlags.filter((flag: Flag) => flag.checked)
  const trueFlagsKeys = trueFlags.map((flag: Flag) => flag.name).join('')
  const regexWithStatus = tryRegex(regexText, trueFlagsKeys)

  return (
    <>
      <div className="flex justify-between">
        <span className="dark:text-green-400">正規表現</span>
        <span
          role="button"
          tabIndex={0}
          className="dark:text-green-400 cursor-pinter"
          onClick={() => setShowModal(true)}
          onKeyPress={() => setShowModal(true)}
        >
          Flags
        </span>
      </div>
      <div className="flex justify-between text-2xl py-4 form-input mt-1 block w-full dark:bg-gray-100">
        <ContentEditable
          html={`${regexText}`}
          disabled={false}
          onChange={(e) => updateRegexText(e.target.value)}
          tagName="div"
          className="dark:text-gray-700 outline-none mr-1 break-words"
        />
        <div
          role="button"
          tabIndex={0}
          className="dark:text-gray-500 text-right outline-none"
          onClick={() => setShowModal(true)}
          onKeyPress={() => setShowModal(true)}
        >
          <span>{trueFlagsKeys}</span>
          <svg
            className="inline-block w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9"
            />
          </svg>
        </div>
      </div>
      {showModal && <FlagsModal setShowModal={setShowModal} />}
      {!regexWithStatus && <RegexValidMessage />}
    </>
  )
}

export default RegexForm
