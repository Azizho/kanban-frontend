import { Logo } from '@/assets/icons/logo'
import Link from 'next/link'
import { BaseSyntheticEvent, FC } from 'react'
import type { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import { RegisterForm } from './components/register-form/register-form'
import { LoginForm } from './components/login-form/login-form'

type AuthFormProps = {
	register: UseFormRegister<FieldValues>,
	mode: "light" | "dark",
	errors: FieldErrors<FieldValues>,
	submit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>,
	isLogin: boolean,
	serverError?: string | false
}

export const AuthForm: FC<AuthFormProps> = ({ serverError, register, mode, errors, submit, isLogin }) => {
	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<Link href="/">
				<Logo mode={mode} />
			</Link>
			<h1 className="text-kanban_black_200 dark:text-kanban_white_200 text-4xl font-bold mt-8">
				{isLogin ? "Log in" : "Sign Up"}
			</h1>
			{errors['userName'] || errors['email'] || errors['password'] || serverError ? (
				<div className='flex flex-col gap-2 rounded-md mt-5 bg-kanban_white_200 p-5 font-bold'>
					{serverError && (
						<div className="text-center text-kanban_red_100 text-xs" >
							Ошибка сервера:<br />
							<h3>{serverError as string}</h3>
						</div>
					)}
					{errors?.userName && (
						<p className="text-kanban_red_100" >
							{errors.userName.message as string}
						</p>
					)}
					{errors?.email && (
						<p className="text-kanban_red_100 font-bold" >
							{errors.email.message as string}
						</p>
					)}
					{errors?.password && (
						<p className="text-kanban_red_100 font-bold" >
							{errors.password.message as string}
						</p>
					)}
				</div>
			) : null}
			{isLogin ? (
				<LoginForm register={register} submit={submit} />
			) : (
				<RegisterForm register={register} submit={submit} />
			)}
			{
				isLogin ? (<p className='pt-1 
				text-kanban_black_200 dark:text-kanban_white_200'>Create A New Account? <Link href={"/register"} className="text-kanban_blueviolet_100">Sign Up</Link></p>) : (<p className='pt-1 
				text-kanban_black_200 dark:text-kanban_white_200'>Already Have An Account? <Link href={"/login"} className="text-kanban_blueviolet_100">Log In</Link></p>)
			}
		</div>
	)
}
