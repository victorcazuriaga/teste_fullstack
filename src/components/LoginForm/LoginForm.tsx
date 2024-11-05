import { ILoginForm } from "@/@types/loginForm";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas/loginSchema";
import { FormInput } from "@/components/FormInput";

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit: SubmitHandler<ILoginForm> = (data) => console.log(data);

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        type="email"
        id="email"
        placeholder="email@example.com"
        register={register("email", { required: "E-mail é obrigatório" })}
        error={errors.email?.message}
        label="E-mail"
      />
      <FormInput
        type="password"
        id="password"
        placeholder="Senha"
        register={register("password", { required: "Senha é obrigatória" })}
        error={errors.password?.message}
        label="Senha"
      />

      <div className="flex items-center space-x-2 justify-between">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Lembrar-me
        </label>
        <a href="/esqueci-senha" className="text-sm">
          Esqueceu a senha?
        </a>
      </div>

      <Button type="submit" className="p-2 rounded-lg">
        Entrar
      </Button>
      <div className="flex items-center justify-between mt-4">
        <div className="h-0.5 w-14 bg-gray-600"></div>
        <span className="text-sm text-gray-400">ou</span>
        <div className="h-0.5 w-14 bg-gray-600"></div>
      </div>
      <div className="flex flex-col items-center mt-4">
      <span className="text-sm text-gray-400">Ainda não tem uma conta?</span>
      <Link href="/register" className="text-sm text-blue-500">Cadastre-se</Link>
    </div>
    </form>
  );
}
