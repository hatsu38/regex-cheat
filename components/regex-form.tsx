export default function RegexForm() {
  return (
    <>
      <label className="block">
      <span className="dark:text-green-400">正規表現</span>
      <input
        type="text"
        className="form-input mt-1 block w-full h-20 text-2xl rounded-md dark:bg-gray-100 dark:text-gray-800"
        placeholder="^[a-z0-9_-]{3,15}$"
        />
    </label>
  </>
  )
}