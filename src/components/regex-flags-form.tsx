import { useSelector, useDispatch } from 'react-redux'

type Event = {
  target: {
    name: string
    checked: boolean
  }
}

type Flag = {
  name: string
  checked: boolean
  note: string
}

const useFlags = () => {
  const flags = useSelector((state) => state.regexFlags)
  const dispatch = useDispatch()
  const updateFlags = (value: []) =>
    dispatch({
      type: 'UPDATE_FLAGS',
      regexFlags: value,
    })
  return { flags, dispatch, updateFlags }
}

const RegexFlagsForm: React.FC = () => {
  const { flags, updateFlags } = useFlags()
  const handleCheckBox = (event: Event) => {
    const { name, checked } = event.target
    const newFlags = flags.map((flag: Flag) => {
      if (flag.name != name) {
        return flag
      }
      return { name: name, checked: checked, note: flag.note }
    })
    updateFlags(newFlags)
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center mb-3">
        <div className="flex flex-col">
          {flags.map((flag: Flag) => (
            <label className="inline-flex items-center mt-3" key={flag.name}>
              <input
                type="checkbox"
                name={flag.name}
                className="form-checkbox h-5 w-5 text-gray-600"
                checked={flag.checked}
                onChange={(e) => handleCheckBox(e)}
              />
              <p className="ml-2">
                <span className="dark:text-green-400 font-bold">
                  {flag.name}
                </span>
                <span className="text-white">：{flag.note}</span>
              </p>
            </label>
          ))}
        </div>
      </div>
    </>
  )
}

export default RegexFlagsForm
