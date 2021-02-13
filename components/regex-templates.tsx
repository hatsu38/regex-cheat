import React from "react"
import { useDispatch } from 'react-redux'

const email = {
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

const phone = {
  regexText: '^0\\d{9,10}$',
  targetText: `08011112222
080-1111-2222
18011112222
180111122223`
}

const separatePhone = {
  regexText: '^0\\d{2,3}-\\d{1,4}-\\d{4}$',
  targetText: `08011112222
080-1111-2222
18011112222
180111122223`
}

const zipCode = {
  regexText: '^\\d{7}$',
  targetText: `1234567
123-4567
12345678
123456`
}

const separateZipCode = {
  regexText: '^\\d{3}-\\d{4}$',
  targetText: `123-4567
1234567
123-45678
12-34567`
}

const url = {
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

  const handleTemplate = (type) => {
    switch (type) {
      case "email":
        return updateText(email)
      case "zipCode":
        return updateText(zipCode)
      case "separateZipCode":
        return updateText(separateZipCode)
      case "phone":
          return updateText(phone)
      case "separatePhone":
        return updateText(separatePhone)
      case "url":
        return updateText(url)
    }
  }

  return (
    <div className="grid grid-flow-col grid-cols-3 grid-rows-3 gap-4 text-white">
      <div onClick={() => handleTemplate("phone")}>ハイフンなし電話番号</div>
      <div onClick={() => handleTemplate("separatePhone")}>ハイフンあり電話番号</div>
      <div onClick={() => handleTemplate("zipCode")}>ハイフンなし郵便番号</div>
      <div onClick={() => handleTemplate("separateZipCode")}>ハイフンあり郵便番号</div>
      <div onClick={() => handleTemplate("email")}>メールアドレス</div>
      <div onClick={() => handleTemplate("email")}>生年月日</div>
      <div onClick={() => handleTemplate("url")}>URL</div>
    </div>
  )
}