const alphanumeric = {
  code: "alphanumeric",
  name: "半角英数字",
  sample: "ABCdef012",
  regexText: '^[a-zA-Z0-9]+$',
  targetText:
`ABCdef012
Foo#
999
あいうえお`
}

const alphabets = {
  code: "alphabet",
  name: "半角英字",
  sample: "abcdef",
  regexText: '^[a-zA-Z]+$',
  targetText:
`ABCdef
ABCDEF
abcdef
Foo#
あいうえお`
}

const uppercaseAlphabets = {
  code: "uppercaseAlphabets",
  name: "大文字英字",
  sample: "ABCDEF",
  regexText: '^[A-Z]+$',
  targetText:
`ABCDEF
Foo#
ABC123
abcdef
あいうえお`
}

const numbers = {
  code: "number",
  name: "数字",
  sample: "123456",
  regexText: '^[0-9]+$',
  targetText:
`123456
Foo#
ABC123
あいうえお`
}

const email = {
  code: "email",
  name: "Email",
  sample: "example@gmail.com",
  regexText: '[^@ \\t\\r\\n]+@[^@ \\t\\r\\n]+\\.[^@ \\t\\r\\n]+',
  targetText:
`geon@ihateregex.io
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
  targetText:`08011112222 
080-1111-2222
09011112222
18011112222
080111122223`
}

const separatePhone = {
  code: "separatePhone",
  name: "ハイフンあり電話番号",
  sample: "090-1234-5678",
  regexText: '^0\\d{2,3}-\\d{1,4}-\\d{4}$',
  targetText:`08011112222 
080-1111-2222
090-1111-2222
18011112222
180111122223`
}

const phone = {
  code: "phone",
  name: "指定なし電話番号",
  sample: "090-1234-5678",
  regexText: '^0(?:\\d{9,10}|\\d{2,3}-\\d{1,4}-\\d{4})\$',
  targetText:`08011112222 
090-1111-2222
18011112222
090-1111-2222
180111122223`
}

const combineZipCode = {
  code: "combineZipCode",
  name: "ハイフンなし郵便番号",
  sample: "1520000",
  regexText: '^\\d{7}$',
  targetText:`1234567 
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

const zipCode = {
  code: "zipCode",
  name: "指定なし郵便番号",
  sample: "152-0000",
  regexText: '^(?:\\d{7}|\\d{3}-\\d{4})$',
  targetText: `123-4567 
123-45678
1234567
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

const withZeroHyphenDate = {
  code: "date",
  name: "ハイフン区切り日付",
  sample: "2021-02-14",
  regexText: '^[12]\\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$',
  targetText: `2020年2月22日 
1999年01月30日 
2020-03-31 
2020-2-28 
2020-12-31 
2020/2/22 
1985/01/12 
2010/12/11 
2022/02/22`
}

const withoutZeroHyphenDate = {
  code: "date",
  name: "ハイフン区切り日付",
  sample: "2021-02-14",
  regexText: '^[12]\\d{3}-([1-9]|1[0-2])-([1-9]|[12][0-9]|3[01])$',
  targetText: `2020年2月22日 
1999年01月30日 
2020-03-31 
2020-2-28 
2020-12-31 
2020/2/22 
1985/01/12 
2010/12/11 
2022/02/22`
}

const withZeroSlashDate = {
  code: "date",
  name: "スラッシュ区切り日付",
  sample: "2021/02/14",
  regexText: '^[12]\\d{3}/(0[1-9]|1[0-2])/(0[1-9]|[12][0-9]|3[01])$',
  targetText: `2020年2月22日 
1999年01月30日 
2020-03-31 
2020-2-28 
2020-12-31 
2020/2/22 
1985/01/12 
2010/12/11 
2022/02/22`
}

const withoutZeroSlashDate = {
  code: "date",
  name: "スラッシュ区切り日付",
  sample: "2021/02/14",
  regexText: '^[12]\\d{3}/([1-9]|1[0-2])/([1-9]|[12][0-9]|3[01])$',
  targetText: `2020年2月22日 
1999年01月30日 
2020-03-31 
2020-2-28 
2020-12-31 
2020/2/22 
1985/01/12 
2010/12/11 
2022/02/22`
}

const withZeroJaDate = {
  code: "date",
  name: "年月日区切り日付",
  sample: "2021年02月14日",
  regexText: '^[12]\\d{3}年(0[1-9]|1[0-2])月(0[1-9]|[12][0-9]|3[01])日$',
  targetText: `2020年2月22日 
1999年01月30日 
2020-03-31 
2020-2-28 
2020-12-31 
2020/2/22 
1985/01/12 
2010/12/11 
2022/02/22`
}

const withoutZeroJaDate = {
  code: "date",
  name: "年月日区切り日付",
  sample: "2021年02月14日",
  regexText: '^[12]\\d{3}年([1-9]|1[0-2])月(0[1-9]|[12][0-9]|3[01])日$',
  targetText: `2020年2月22日 
1999年01月30日 
2020-03-31 
2020-2-28 
2020-12-31 
2020/2/22 
1985/01/12 
2010/12/11 
2022/02/22`
}

const withZeroSeparateDate = {
  code: "date",
  name: "指定なし区切り日付",
  sample: "2021-2-14",
  regexText: '^[12]\\d{3}[/\\-年](0[1-9]|1[0-2])[/\\-月](0[1-9]|[12][0-9]|3[01])?$',
  targetText: `2020年2月22日 
1999年01月30日 
2020-03-31 
2020-2-28 
2020-12-31 
2020/2/22 
1985/01/12 
2010/12/11 
2022/02/22`
}

const withoutZeroSeparateDate = {
  code: "date",
  name: "指定なし区切り日付",
  sample: "2021-2-14",
  regexText: '^[12]\\d{3}[/\\-年]([1-9]|1[0-2])[/\\-月]([1-9]|[12][0-9]|3[01])?$',
  targetText: `2020年2月22日 
1999年01月30日 
2020-03-31 
2020-2-28 
2020-12-31 
2020/2/22 
1985/01/12 
2010/12/11 
2022/02/22`
}

export const groups = [
  {
    name: "英数字",
    regularExpressions: [alphanumeric, alphabets, uppercaseAlphabets, numbers]
  },
  {
    name: "電話番号",
    regularExpressions: [combinePhone, separatePhone, phone]
  },
  {
    name: "郵便番号",
    regularExpressions: [combineZipCode, separateZipCode, zipCode]
  },
  {
    name: "日付",
    zeroPadding: true,
    regularExpressions: [withZeroHyphenDate, withZeroSlashDate, withZeroJaDate, withZeroSeparateDate]
  },
  {
    name: "日付",
    zeroPadding: false,
    regularExpressions: [withoutZeroHyphenDate, withoutZeroSlashDate, withoutZeroJaDate, withoutZeroSeparateDate]
  },
  {
    name: "URL",
    regularExpressions: [url]
  },
  {
    name: "Email",
    regularExpressions: [email]
  },
]

export default groups