'use client'

import { registerUser } from '@/actions/auth'
import { Input } from '@nextui-org/react'
import Link from 'next/link'
import { useFormState } from 'react-dom'
import SubmitButton from './SubmitButton'

const initState = { message: null }

const SignupForm = () => {
  const [formState, action] = useFormState<{ message: string | null }>(
    registerUser,
    initState
  )

  return (
    <form
      action={action}
      className="bg-content1 border border-default-100 shadow-lg rounded-md p-3 flex flex-col gap-2"
    >
      <h3 className="my-4">Sign up</h3>
      <Input fullWidth size="lg" placeholder="Email" name="email" required />
      <Input
        name="password"
        fullWidth
        size="lg"
        type="password"
        placeholder="Password"
        required
      />
      <SubmitButton label={'Sign up'} />
      <div>
        <Link href="/signin">{`Already have an account?`}</Link>
      </div>
    </form>
  )
}

export default SignupForm
