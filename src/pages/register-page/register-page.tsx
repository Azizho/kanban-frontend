"use client"
import { AuthCheck } from '@/components/auth-check'
import { AuthForm } from '@/components/auth-form'
import { request } from '@/config/request'
import { useMode } from '@/mode'
import { registerSchema } from '@/schema/register-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

const RegisterPage = () => {
	const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(registerSchema) })
	const [serverError, setServerError] = useState<string | false>(false)
	const mode = useMode().mode
	const router = useRouter().replace
	const submit = handleSubmit((data) => {
		request.post("/register", data).then(res => {
			if (res.status === 201) {
				localStorage.setItem("token", res.data.token)
				router("/")
			}
		}).catch((err) => {
			setServerError(err.response.data.message)
		})
	})

	return (
		<AuthForm serverError={serverError} errors={errors} mode={mode} isLogin={false} register={register} submit={submit} />
	)
}

export default AuthCheck(RegisterPage, true)