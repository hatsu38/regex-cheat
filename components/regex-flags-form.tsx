import React, { useEffect} from "react"
import { useSelector, useDispatch } from 'react-redux'

const useFlags = () => {
  const flags = useSelector((state) => state.regexFlags)
  const dispatch = useDispatch()
  const updateFlags = (value) =>
    dispatch({
      type: "UPDATE_FLAGS",
      regexFlags: value
    })
  return { flags, dispatch, updateFlags }
}

export default function RegexFlagsForm() {
  const { flags, updateFlags } = useFlags()
  const handleCheckBox = (e) => {
    const { name, checked } = e.target
    const newStateFlags = flags.map(([key, value]) => {
      if (key != name) { return [key, value] }
      return [name, checked]
    })
    updateFlags(newStateFlags)
  }

  return (
    <React.Fragment>
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col">
          {flags.map(([key, value]) =>
            <label className="inline-flex items-center mt-3" key={key}>
              <input
                type="checkbox"
                name={key}
                className="form-checkbox h-5 w-5 text-gray-600"
                checked={value}
                onChange={(e) => handleCheckBox(e)}
              />
              <span className="ml-2 dark:text-green-400">{key}</span>
            </label>
          )}
        </div>
      </div>
    </React.Fragment>
  )
}