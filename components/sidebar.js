import Github from "./icons/github"
import Twitter from "./icons/twitter"
export default function Sidebar() {
  return (
    <div className="bg-gray-700 min-h-screen col-span-2 border-r border-gray-300">
      <div className="sm:py-2">
        <div className="hidden sm:block uppercase font-bold text-xs px-4 py-2 dark:text-green-500">
          SNS
        </div>
        <div className="">
          <a href="#" className="block sm:flex sm:items-center text-center sm:text-left shadow-light sm:shadow-none py-6 sm:py-2 sm:px-4 border-l-4 border-transparent hover:bg-black">
            <Twitter />
            <div className="text-white text-sm">Twitter</div>
          </a>
        </div>
        <div className="">
          <a href="#" className="block sm:flex sm:items-center text-center sm:text-left shadow-light sm:shadow-none py-6 sm:py-2 sm:px-4 border-l-4 border-transparent hover:bg-black">
            <Github />
            <div className="text-white text-sm">Github</div>
          </a>
        </div>
      </div>
    </div>
  )
}