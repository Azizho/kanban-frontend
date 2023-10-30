import { EmailLogo } from '@/assets/icons/email'
import { PasswordLogo } from '@/assets/icons/password'
import { UserLogo } from '@/assets/icons/user'
import { BaseSyntheticEvent, FC } from 'react'
import { FieldValues, UseFormRegister } from 'react-hook-form'

type LoginFormProps = {
	register: UseFormRegister<FieldValues>,
	submit: (e?: BaseSyntheticEvent<object, any, any> | undefined) => Promise<void>,
}

export const LoginForm: FC<LoginFormProps> = ({ register, submit }) => {
	return (
		<form className="mt-8 flex flex-col" onSubmit={submit}>
			<div className="relative mb-4">
				<div className={`absolute left-2.5 top-1/2 -translate-y-1/2`}>

					<UserLogo />
				</div>
				<input
					type="text"
					{...register("userName")}
					className="border border-gray-300 rounded-md pl-10 pr-4 py-2"
					placeholder="Username"
				/>
			</div>

			<div className="relative mb-4">
				<div className={`absolute left-2.5 top-1/2 -translate-y-1/2`}>
					<EmailLogo />
				</div>
				<input
					type="text"
					{...register("email")}
					className="border border-gray-300 rounded-md pl-10 pr-4 py-2"
					placeholder="Email"
				/>
			</div>

			<div className="relative mb-4">
				<div className={`absolute left-2.5 top-1/2 -translate-y-1/2`}>
					<PasswordLogo />
				</div>
				<input
					type="password"
					{...register("password")}
					className="border border-gray-300 rounded-md pl-10 pr-4 py-2"
					placeholder="Password"
				/>
			</div>

			<button
				type="submit"
				className="text-kanban_white_200 rounded-md px-4 py-2 bg-kanban_blueviolet_100"
			>
				Submit
			</button>
		</form>
	)
}
