import React, { useState } from 'react'
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
  const [showModal, setShowModal] = useState(false);

  const { flags, updateFlags } = useFlags()
  const handleCheckBox = (e) => {
    const { name, checked } = e.target
    const newFlags = flags.map(flag => {
      if(flag.name != name) { return flag }
      return { name: name, checked: checked }
    })
    updateFlags(newFlags)
  }

  return (
    <React.Fragment>
      <button onClick={() => setShowModal(true)} className="text-white">Flags</button>
      {showModal &&
      <div className="modal-wrapper">
        <a className="modal-overlay" onClick={() => setShowModal(false)}></a>
        <div className="modal-window">
          <div className="modal-content">
            <h2 className="head-title">Flags</h2>
            <div className="flex flex-col items-center justify-center">
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
                    <span className="ml-2 dark:text-green-400">{flag.name}</span>
                  </label>
                )}
              </div>
            </div>
            <div className="btn_layout_02 mb-0">
              <button type="button" name="button" onClick={() => setShowModal(false)}>
                閉じる
              </button>
            </div>
          </div>
        </div>
      </div>
      }
    </React.Fragment>
  )
}