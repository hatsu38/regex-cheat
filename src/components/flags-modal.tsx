import RegexFlagsForm from './regex-flags-form'

type Props = {
  setShowModal: (showModal: boolean) => void
}

const FlagsModal: React.FC<Props> = (props) => {
  const { setShowModal } = props
  return (
    <>
      <div className="modal-wrapper">
        <span
          role="button"
          className="modal-overlay"
          onClick={() => setShowModal(false)}
          onKeyPress={() => setShowModal(false)}
          tabIndex={0}
        />
        <div className="modal-window">
          <div className="modal-content">
            <h2 className="head-title dark:text-green-400">Flags</h2>
            <RegexFlagsForm />
            <button
              type="button"
              name="button"
              className="text-white"
              onClick={() => setShowModal(false)}
            >
              閉じる
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default FlagsModal
