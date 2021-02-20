import React from "react"
import { useDispatch } from 'react-redux'

const email = {
  code: "email",
  name: "Email",
  sample: "example@gmail.com",
  regexText: '[^@ \\t\\r\\n]+@[^@ \\t\\r\\n]+\\.[^@ \\t\\r\\n]+',
  targetText: `geon@ihateregex.io
test@gmail.com mail@test.org
mail@testing.com
hello@
@test
email@gmail
theproblem@test@gmail.com
mail with@space.com`
}

const combinePhone = {
  code: "combinePhone",
  name: "ハイフンなし電話番号",
  sample: "09012345678",
  regexText: '^0\\d{9,10}$',
  targetText: `08011112222
080-1111-2222
18011112222
180111122223`
}

const separatePhone = {
  code: "separatePhone",
  name: "ハイフンあり電話番号",
  sample: "090-1234-5678",
  regexText: '^0\\d{2,3}-\\d{1,4}-\\d{4}$',
  targetText: `08011112222
080-1111-2222
18011112222
180111122223`
}

const combineZipCode = {
  code: "combineZipCode",
  name: "ハイフンなし郵便番号",
  sample: "1520000",
  regexText: '^\\d{7}$',
  targetText: `1234567
123-4567
12345678
123456`
}

const separateZipCode = {
  code: "separateZipCode",
  name: "ハイフンあり郵便番号",
  sample: "152-0000",
  regexText: '^\\d{3}-\\d{4}$',
  targetText: `123-4567
1234567
123-45678
12-34567`
}

const url = {
  code: "url",
  name: "URL",
  sample: "https://example.com",
  regexText: '^https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()!@:%_\\+.~#?&\\/\\/=]*)',
  targetText: `abcdef
www.whatever.com
https://github.com/geongeorge/i-hate-regex
https://www.facebook.com/
https://www.google.com/
https://xkcd.com/2293/
https://this-shouldn't.match@example.com
http://www.example.com/`
}

const birthDay = {
  code: "brithDay",
  name: "日付",
  sample: "2021-2-14",
  regexText: '[12]\\d{3}[/\\-年](0?[1-9]|1[0-2])[/\\-月](0?[1-9]|[12][0-9]|3[01])日?$',
  targetText: `2020年2月22
2020-2-22
2020/2/22
1985/01/12
2010/12/11
2022/02/22`
}

const groups = [
  {
    name: "電話番号",
    regularExpressions: [combinePhone, separatePhone]
  },
  {
    name: "Email",
    regularExpressions: [email]
  },
  {
    name: "郵便番号",
    regularExpressions: [combineZipCode, separateZipCode]
  },
  {
    name: "URL",
    regularExpressions: [url]
  },
  {
    name: "日付",
    regularExpressions: [birthDay]
  }
]

const useText = () => {
  const dispatch = useDispatch()
  const updateText = (obj) =>
    dispatch({
      type: "UPDATE_ALL_TEXT",
      targetText: obj.targetText,
      regexText: obj.regexText
    })
  return { dispatch, updateText }
}


export default function RegexTemplates() {
  const { updateText } = useText()

  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 text-white mt-5 shadow font-bold">
      {groups.map(group =>
        <div className="px-4 py-1 bg-gray-50">
          <h3 className="text-gray-800 py-3">{group.name}</h3>
          {group.regularExpressions.map(regex =>
            <div className="flex items-center py-5 border-t border-gray-200 font-medium cursor-pointer hover:bg-gray-200" onClick={() => updateText(regex)}>
              <svg width="24" height="24" data-icon="play-circle" className="mr-2 text-gray-300" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M371.7 238l-176-107c-15.8-8.8-35.7 2.5-35.7 21v208c0 18.4 19.8 29.8 35.7 21l176-101c16.4-9.1 16.4-32.8 0-42zM504 256C504 119 393 8 256 8S8 119 8 256s111 248 248 248 248-111 248-248zm-448 0c0-110.5 89.5-200 200-200s200 89.5 200 200-89.5 200-200 200S56 366.5 56 256z" /></svg>
              <dl className="grid grid-cols-1 text-gray-800">
                <dt className="text-sm">
                {regex.name}
                </dt>
                <dd className="mt-1 text-sm text-gray-500">
                  例){regex.sample}
                </dd>
              </dl>
            </div>
          )}
        </div>
      )}
    </div>
  )
}