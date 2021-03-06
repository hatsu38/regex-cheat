import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

type Flag = {
  name: string
  checked: boolean
  note: string
}

type State = {
  targetText: string
  regexText: string
  regexFlags: []
}

const useTargetText = () => {
  const targetText = useSelector((state: State) => state.targetText)
  const regexText = useSelector((state: State) => state.regexText)
  const regexFlags = useSelector((state: State) => state.regexFlags)
  const dispatch = useDispatch()
  const updateTargetText = (value: string) =>
    dispatch({
      type: 'UPDATE_TARGET_TEXT',
      targetText: value,
    })
  return { targetText, regexText, regexFlags, dispatch, updateTargetText }
}

const tryRegex = (regexText: string, trueFlagsKeys: string) => {
  try {
    return {
      status: true,
      text: new RegExp(`(${regexText})`, trueFlagsKeys),
    }
  } catch (error) {
    return { status: false, text: error }
  }
}

const MatchText: React.FC = () => {
  const { targetText, regexText, regexFlags } = useTargetText()
  if (!regexText.trim()) {
    return null
  }

  const trueFlags = regexFlags.filter((flag: Flag) => flag.checked)
  const trueFlagsKeys = trueFlags.map((flag: Flag) => flag.name).join('')
  const regexWithStatus = tryRegex(regexText, trueFlagsKeys)
  const regex = regexWithStatus.text
  const regexStatus = regexWithStatus.status
  const lines = targetText.split('\n')

  return (
    <>
      <div className="overflow-auto">
        <div className="absolute top-0 form-input mt-1 text-xl bg-transparent">
          {lines.map((line: string, i: number) => (
            <React.Fragment key={i}>
              {line.split(' ').map((part, j) => (
                <React.Fragment key={j}>
                  {regexStatus && regex.test(part) ? (
                    <mark key={j} className="rounded bg-green-300">
                      {part}
                    </mark>
                  ) : (
                    <span key={j}>{part}</span>
                  )}{' '}
                </React.Fragment>
              ))}
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  )
}

export default MatchText
