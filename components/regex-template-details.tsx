import { useSelector, useDispatch } from 'react-redux'
import PlayCircle from "./icons/play-circle"

const useText = () => {
  const regexText = useSelector((state) => state.regexText)
  const dispatch = useDispatch()
  const updateText = (obj) =>
    dispatch({
      type: "UPDATE_ALL_TEXT",
      targetText: obj.targetText,
      regexText: obj.regexText
    })
  return { regexText, dispatch, updateText }
}

export default function RegexTemplateDetails(props) {
  const { regexText, updateText } = useText()
  const { regex } = props

  return (
    <div key={regex.code} className="flex items-center py-5 border-t border-gray-200 font-medium cursor-pointer hover:bg-gray-200" onClick={() => updateText(regex)}>
      <PlayCircle classNames={`mr-2 ${regexText === regex.regexText ? "text-green-500" : "text-gray-400"}`} />
      <dl className="grid grid-cols-1 text-gray-800">
        <dt className="text-sm">
        {regex.name}
        </dt>
        <dd className="mt-1 text-sm text-gray-500">
          例){regex.sample}
        </dd>
      </dl>
    </div>
  )
}