'use client'
import { Input } from '@nextui-org/react'
import Link from 'next/link'

const SigninForm = () => {
  return (
    <form className="bg-content1 border border-default-100 shadow-lg rounded-md p-3 flex flex-col gap-2 ">
      <h3 className="my-4">Sign in</h3>
      <Input
        fullWidth
        required
        size="lg"
        placeholder="Email"
        name="email"
        type="email"
      />
      <Input
        name="password"
        fullWidth
        required
        size="lg"
        type="password"
        placeholder="Password"
      />

      <div>
        <Link href="/signup">{`Don't have an account?`}</Link>
      </div>
    </form>
  )
}

export default SigninForm
