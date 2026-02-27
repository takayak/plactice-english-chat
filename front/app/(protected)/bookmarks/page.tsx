export default function BookmarksPage() {
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-center text-gray-900 mb-8">ブックマーク一覧</h1>

      {/* ブックマークが空の状態 */}
      <div className="text-center text-gray-400 mt-16">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
        </svg>
        <p className="text-sm">ブックマークはまだありません</p>
        <p className="text-xs mt-1">チャット画面で気に入った表現をブックマークしてみましょう</p>
      </div>
    </div>
  )
}
