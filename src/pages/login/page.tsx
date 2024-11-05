import {LoginForm} from "@/components/LoginForm";

export default function Login() {
 
  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="w-80 p-6 bg-gray-800 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-white mb-4 text-center">Login</h1>
        <LoginForm />
      </div>
    </div>
  )
}

