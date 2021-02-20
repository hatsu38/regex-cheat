import { useSelector, useDispatch } from 'react-redux'

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
      <svg width="24" height="24" data-icon="play-circle" className={`mr-2 ${regexText === regex.regexText ? "text-green-500" : "text-gray-400"}`} role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z" /></svg>
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