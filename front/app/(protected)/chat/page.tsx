export default function ChatPage() {
  return (
    <div className="flex flex-col h-screen">
      {/* チャットログエリア */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* AI の初期メッセージ */}
        <div className="flex justify-start mb-4">
          <div className="max-w-md bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm text-sm text-gray-800">
            こんにちは！今日はどんな英語を学びたいですか？
          </div>
        </div>
      </div>

      {/* 入力フッター */}
      <div className="border-t border-gray-200 bg-white p-4">
        <div className="flex gap-3 items-center max-w-3xl mx-auto">
          <input
            type="text"
            placeholder="（例）会議で使えるフレーズ"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <button
            type="button"
            className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
