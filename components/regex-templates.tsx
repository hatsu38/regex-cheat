import React, { useState } from 'react'
import groups from '../lib/templates/regex'
import RegexTemplateDetails from "./regex-template-details"

export default function RegexTemplates() {
  const [zeroPadding, setZeroPadding] = useState(true)

  // NOTE: zeroPaddingがTrue(ゼロ埋めあり)のとき、zeroPaddingがFalseを除く
  // zeroPaddingがFalse(ゼロ埋めなし)のとき、zeroPaddingがTrueを除く
  const filteredGroups = groups.filter(group => group.zeroPadding != !zeroPadding)

  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 text-white mt-5 shadow font-bold">
      {filteredGroups.map(group =>
        <div className="px-4 py-1 bg-gray-50" key={group.name}>
          <div className="flex py-3 items-center justify-between text-gray-800">
            <h3>{group.name}</h3>
            {group.name === "日付" && (
              <div className="flex items-center text-gray-600 font-thin text-sm cursor-pointer" onClick={() => setZeroPadding(!zeroPadding)}>
                <span className="mr-1">ゼロ埋め {zeroPadding ? "あり" : "なし"}</span>
                <div className={`h-4 w-9 transition duration-200 ease-in border rounded-2xl relative inline-block ${zeroPadding ? "bg-green-500" : "bg-gray-300"}`}>
                  <span className={`absolute top-0 bg-white w-4 h-4 rounded-full ${zeroPadding ? "right-0" : "left-0"}`}></span>
                </div>
              </div>
            )}
          </div>
          {group.regularExpressions.map(regex =>
            <RegexTemplateDetails regex={regex} key={regex.code}/>
          )}
        </div>
      )}
    </div>
  )
}