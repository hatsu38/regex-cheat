import React, { useState } from 'react'
import RegexFlagsForm from "./regex-flags-form"

export default function FlagsModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <React.Fragment>
      <a className="dark:text-green-400" onClick={() => setShowModal(true)}>Flags</a>
      {showModal &&
        <div className="modal-wrapper">
          <a className="modal-overlay" onClick={() => setShowModal(false)}></a>
          <div className="modal-window">
            <div className="modal-content">
              <h2 className="head-title dark:text-green-400">Flags</h2>
              <RegexFlagsForm />
              <div className="">
                <button type="button" name="button" className="text-white" onClick={() => setShowModal(false)}>
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