import { useSelector, useDispatch } from 'react-redux'
import PlayCircle from './icons/play-circle'

type State = {
  targetText: string
  regexText: string
  regexFlags: []
  selected_name: string
}

type Regex = {
  code: string
  name: string
  targetText: string
  regexText: string
  sample: string
}

type Props = {
  regex: {
    code: string
    name: string
    targetText: string
    regexText: string
    sample: string
  }
}

const useText = () => {
  const storeRegex = useSelector((state: State) => state)
  const dispatch = useDispatch()
  const updateText = (obj: Regex) =>
    dispatch({
      type: 'UPDATE_ALL_TEXT',
      targetText: obj.targetText,
      regexText: obj.regexText,
      selected_name: obj.name,
    })
  return { storeRegex, dispatch, updateText }
}

const RegexTemplateDetails: React.FC<Props> = (props) => {
  const { storeRegex, updateText } = useText()
  const { regex } = props

  return (
    <div
      key={regex.code}
      className="flex items-center py-5 border-t border-gray-200 font-medium cursor-pointer hover:bg-gray-200"
      onClick={() => updateText(regex)}
      onKeyPress={() => updateText(regex)}
      role="button"
      tabIndex={0}
    >
      <PlayCircle
        classNames={`mr-2 ${
          regex.name === storeRegex.selected_name
            ? 'text-green-500'
            : 'text-gray-400'
        }`}
      />
      <dl className="grid grid-cols-1 text-gray-800">
        <dt className="text-sm">{regex.name}</dt>
        <dd className="mt-1 text-sm text-gray-500">例){regex.sample}</dd>
      </dl>
    </div>
  )
}

export default RegexTemplateDetails
