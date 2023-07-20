import Button from "@/components/Buttons/Button";
import FormHeader from "@/components/FormHeader/FormHeader";
import InputField from "@/components/InputField/InputField";
import Image from "next/image";
import mountain from "@/assets/mountain.jpg";

const Login = () => {
  return (
    <div className="grid place-content-center min-h-screen ">
      <section className="max-w-4xl mx-auto flex bg-white min-h-[564px] rounded-xl overflow-hidden">
        <div className="flex-1 hidden lg:flex">
          <Image
            width={450}
            height={100}
            className="h-[580px]"
            src={mountain}
            alt="A mountain image "
          />
        </div>
        <div className="flex-1 p-10">
          <FormHeader
            title="Login"
            subtitle="Donec tortor quam at duis tortor."
          />
          <div className="flex flex-col mt-10">
            <InputField
              placeholder="Enter your email"
              type="email"
              label="E-Mail"
            />
            <InputField
              placeholder="Enter your password"
              type="password"
              label="Password"
            />
            <span className="cursor-pointer text-neutral-600 font-semibold text-sm text-right mb-5">
              Forgot password?
            </span>
            <Button variant="fill">Login</Button>
            <div className="flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-400 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-400 mb-3 mt-10">
              <p className="mx-3 mb-0 text-center  text-neutral-400 text-xs font-light">
                or
              </p>
            </div>
            <Button color="" variant="outline">
              Sign Up
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Login;
