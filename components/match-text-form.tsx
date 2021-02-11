export default function MatchTextForm() {
  return (
    <label className="block mt-5">
      <span className="dark:text-green-400">テスト文章</span>
      <textarea
        rows={6}
        className="form-input mt-1 block w-full text-xl rounded-md dark:bg-gray-100 dark:text-gray-800 focus:ring focus:border-white"
        placeholder="0120-1234-5678"
      />
    </label>
  )
}