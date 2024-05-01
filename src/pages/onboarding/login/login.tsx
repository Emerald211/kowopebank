import Button from "../../../components/button/button";
import Input from "../../../components/input/input";


const Login = () => {
  return (
    <div className="font-serrat px-5 md:px-24 flex flex-col justify-center py-12">
      <h1 className=" font-bold text-purple-900">Welcome Back!</h1>
      <h2 className=" text-xs">Kindly login into your account with the appropriate details</h2>
      
      <form className="flex flex-col mt-6"> 
        <Input className="w-full h-[50px] border rounded-lg outline-none px-4" inputType="text" label='Email' placeholder="johndoe@gmail.com"  />
        <Input className="w-full h-[50px] border rounded-lg outline-none px-4 " inputType="password" label='Password' placeholder="johndoe@gmail.com" />
        
        <Button className="bg-main text-white  mt-4 w-full h-[70px] border rounded-lg outline-none px-4" type="submit">Submit</Button>
      </form>
    </div>
  )
}

export default Login;