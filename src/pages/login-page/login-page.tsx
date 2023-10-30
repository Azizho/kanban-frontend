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

const LoginPage = () => {
	const { register, handleSubmit, formState: { errors } } = useForm({ resolver: zodResolver(registerSchema) })
	const [serverError, setServerError] = useState<string | false>(false)
	const mode = useMode().mode
	const router = useRouter().replace
	const submit = handleSubmit((data) => {
		request.post("/login", data).then(res => {
			if (res.status === 200) {
				localStorage.setItem("token", res.data.token)
				router("/")
			}
		}).catch((err) => {
			setServerError(err.response.data.message)
		})
	})
	return (
		<div>
			<AuthForm errors={errors} isLogin mode={mode} register={register} submit={submit} serverError={serverError} />
		</div>
	)
}

export default AuthCheck(LoginPage, true)