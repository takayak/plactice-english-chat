import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

async function updatePassword(formData: FormData) {
  'use server'
  const password = formData.get('password') as string
  const confirmPassword = formData.get('confirmPassword') as string

  if (password !== confirmPassword) {
    redirect(`/reset-password/update?error=${encodeURIComponent('パスワードが一致しません')}`)
  }

  const supabase = await createClient()

  const { error } = await supabase.auth.updateUser({ password })

  if (error) {
    redirect(`/reset-password/update?error=${encodeURIComponent(error.message)}`)
  }

  redirect('/chat')
}

export default async function UpdatePasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const { error } = await searchParams

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-sm">
      <h1 className="text-2xl font-bold text-center mb-8 text-gray-900">新しいパスワードの設定</h1>

      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
          {decodeURIComponent(error)}
        </div>
      )}

      <form action={updatePassword} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-sm font-medium text-gray-700">
            新しいパスワード
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            autoComplete="new-password"
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
            新しいパスワード（確認用）
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            required
            autoComplete="new-password"
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors mt-2"
        >
          パスワードを更新
        </button>
      </form>
    </div>
  )
}
