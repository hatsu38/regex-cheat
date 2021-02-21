import RegexFlagsForm from "./regex-flags-form"

export default function FlagsModal(props) {
  const { setShowModal } = props
  return (
    <>
      <div className="modal-wrapper">
        <a className="modal-overlay" onClick={() => setShowModal(false)}></a>
        <div className="modal-window">
          <div className="modal-content">
            <h2 className="head-title dark:text-green-400">Flags</h2>
            <RegexFlagsForm />
            <button type="button" name="button" className="text-white" onClick={() => setShowModal(false)}>
              閉じる
            </button>
          </div>
        </div>
      </div>
    </>
  )
}