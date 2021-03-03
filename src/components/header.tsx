import React from 'react'
import { useSelector } from 'react-redux'

type State = {
  selected_name: string
}

const useText = () => {
  const selected_name = useSelector((state: State) => state.selected_name)
  return { selected_name }
}


const Header: React.FC = () => {
  const { selected_name } = useText()

  return (
    <header className="bg-gray-600 fixed z-50 h-16 w-full shadow-md flex items-center justify-between grid grid-cols-12">
      <div className="flex items-center h-full col-span-2 border-r border-gray-300">
        <div className="flex items-center w-full text-center">
          <span className="w-full text-white text-sm uppercase font-extrabold">
            Regex Cheat Sheet
          </span>
        </div>
      </div>
      <div className="flex items-center text-sm col-span-10 h-full">
        <div className="flex items-center w-full text-left">
          <a href="/" className="text-white px-4 w-full">
            {selected_name}
          </a>
        </div>
        <div className="flex items-center w-full text-right">
          <a href="/" className="text-white px-4 w-full ">
            Support
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
