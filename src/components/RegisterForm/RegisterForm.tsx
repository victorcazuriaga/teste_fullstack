import { Button } from "@/components/ui/button";
import { registerSchema } from "@/schemas/registerSchema";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IRegisterForm } from "@/@types/registerForm";
import { FormInput } from "../FormInput";



export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterForm>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit: SubmitHandler<IRegisterForm> = (data) => console.log(data);

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="w-80 p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-4 text-center">Registrar</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            type="text"
            id="name"
            placeholder="Nome"
            register={register("name")}
            error={errors.name?.message}
          />
          <FormInput
            type="email"
            id="email"
            placeholder="E-mail"
            register={register("email")}
            error={errors.email?.message}
          />
          <FormInput
            type="password"
            id="password"
            placeholder="Senha"
            register={register("password")}
            error={errors.password?.message}
          />
          <FormInput
            type="password"
            id="confirmPassword"
            placeholder="Confirme a senha"
            register={register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />
          <Button type="submit" className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600">
            Registrar
          </Button>
        </form>
      </div>
    </div>
  );
}
