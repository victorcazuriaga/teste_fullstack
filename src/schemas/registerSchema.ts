import {z} from 'zod';
export const registerSchema = z.object({
    name: z.string().min(1,"Nome é obrigatório").min(3, "Nome deve ter no mínimo 3 caracteres"),
    email: z.string().min(1,"E-mail é obrigatório").email("E-mail inválido"),
    password: z.string().min(1,"Senha é obrigatória").min(6, "Senha deve ter no mínimo 6 caracteres"),
    confirmPassword: z.string().min(1,"Confirmação de senha é obrigatória").min(6,"Senha deve ter no mínimo 6 caracteres"),
}).superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
        ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: "Senhas não coincidem",
            path: ["confirmPassword"],
        });
    }
});