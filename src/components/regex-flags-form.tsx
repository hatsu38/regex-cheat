import React from 'react'
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
    const newFlags = flags.map(flag => {
      if(flag.name != name) { return flag }
      return { name: name, checked: checked, note: flag.note }
    })
    updateFlags(newFlags)
  }

  return (
    <React.Fragment>
      <div className="flex flex-col items-center justify-center mb-3">
        <div className="flex flex-col">
          {flags.map(flag =>
            <label className="inline-flex items-center mt-3" key={flag.name}>
              <input
                type="checkbox"
                name={flag.name}
                className="form-checkbox h-5 w-5 text-gray-600"
                checked={flag.checked}
                onChange={(e) => handleCheckBox(e)}
              />
              <p className="ml-2">
                <span className="dark:text-green-400 font-bold">{flag.name}</span>
                <span className="text-white">：{flag.note}</span>
              </p>
            </label>
          )}
        </div>
      </div>
    </React.Fragment>
  )
}