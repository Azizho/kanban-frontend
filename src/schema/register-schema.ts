import zod from 'zod';
export const registerSchema = zod.object({
	email: zod.string().email({ message: 'Некорректная почта' }),
	password: zod
		.string()
		.min(6, { message: 'Пароль должен быть не меньше 6 символов!' })
		.max(32, { message: 'Максимальная длина пароля 32 символов' }),
	userName: zod
		.string()
		.min(2, {
			message: 'Имя пользователя должен быть не меньше 6 символов!',
		})
		.max(12, {
			message: 'Максимальная длина имени пользователя 12 символов',
		}),
});
