import FlagsModal from "./flags-modal"
import { useSelector, useDispatch } from 'react-redux'

const useRegexText = () => {
  const regexText = useSelector((state) => state.regexText)
  const dispatch = useDispatch()
  const updateRegexText = (value) =>
    dispatch({
      type: "UPDATE_REGEX_TEXT",
      regexText: value
    })
  return { regexText, dispatch, updateRegexText }
}

export default function RegexForm() {
  const { regexText, updateRegexText } = useRegexText()

  return (
    <>
      <div className="flex justify-between">
        <span className="dark:text-green-400">正規表現</span>
        <FlagsModal />
      </div>
      <label className="block">
        <input
          type="text"
          value={regexText}
          className="form-input mt-1 block w-full h-20 text-3xl rounded-md dark:bg-gray-100 dark:text-gray-800"
          placeholder="^[a-z0-9_-]{3,15}$"
          onChange={e => updateRegexText(e.target.value)}
        />
      </label>
    </>
  )
}