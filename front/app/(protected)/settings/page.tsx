import { logout } from '../actions'

export default function SettingsPage() {
  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-center text-gray-900 mb-8">設定</h1>

      <div className="bg-white rounded-2xl shadow-sm divide-y divide-gray-100">
        {/* アカウント情報 */}
        <div className="px-6 py-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">アカウント情報</p>
          <div className="flex flex-col gap-1">
            <button className="flex justify-between items-center py-2 text-sm text-gray-700 hover:text-blue-600 transition-colors text-left">
              メールアドレス変更
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="flex justify-between items-center py-2 text-sm text-gray-700 hover:text-blue-600 transition-colors text-left">
              パスワード変更
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* システム */}
        <div className="px-6 py-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">システム</p>
          <button className="py-2 text-sm text-red-500 hover:text-red-700 transition-colors">
            退会する
          </button>
        </div>
      </div>

      {/* ログアウト */}
      <form action={logout} className="mt-6">
        <button
          type="submit"
          className="w-full py-2 px-4 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors"
        >
          ログアウト
        </button>
      </form>
    </div>
  )
}
