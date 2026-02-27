import Link from 'next/link'
import { redirect } from 'next/navigation'
import { createClient } from '@/utils/supabase/server'

async function sendResetEmail(formData: FormData) {
  'use server'
  const supabase = await createClient()

  const { error } = await supabase.auth.resetPasswordForEmail(
    formData.get('email') as string,
    {
      redirectTo: `${process.env.NEXT_PUBLIC_SITE_URL ?? ''}/auth/callback?next=/reset-password/update`,
    }
  )

  if (error) {
    redirect(`/reset-password?error=${encodeURIComponent(error.message)}`)
  }

  redirect(`/reset-password?message=${encodeURIComponent('再設定メールを送信しました。メールをご確認ください。')}`)
}

export default async function ResetPasswordPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; message?: string }>
}) {
  const { error, message } = await searchParams

  return (
    <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-sm">
      <h1 className="text-2xl font-bold text-center mb-2 text-gray-900">パスワードの再設定</h1>
      <p className="text-sm text-gray-500 text-center mb-8">
        登録済みのメールアドレスに再設定用のリンクを送信します。
      </p>

      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-lg text-sm">
          {decodeURIComponent(error)}
        </div>
      )}
      {message && (
        <div className="mb-4 p-3 bg-green-50 text-green-700 rounded-lg text-sm">
          {decodeURIComponent(message)}
        </div>
      )}

      <form action={sendResetEmail} className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium text-gray-700">
            メールアドレス
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors mt-2"
        >
          再設定メールを送信
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-gray-600">
        <Link href="/login" className="text-blue-600 hover:underline">
          ログイン画面に戻る
        </Link>
      </div>
    </div>
  )
}
