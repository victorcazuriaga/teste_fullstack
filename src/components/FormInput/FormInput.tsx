import { FormInputProps } from "@/@types/formInputProps";
import { Input } from "@/components/ui/input";



export function FormInput({ type, id, placeholder, error, label,register  }: FormInputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={id}>{label}</label>}  
      <Input
        type={type}
        id={id}
        placeholder={placeholder}
        className="p-2 rounded-lg"
        {...register}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
}
