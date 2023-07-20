import Image from "next/image";

const Login = () => {
  return (
    <div className="grid place-content-center min-h-screen ">
      <section className="max-w-4xl mx-auto flex bg-white min-h-[564px] rounded-xl overflow-hidden">
        <div className="flex-1 hidden md:flex">
          <Image
            width={450}
            height={100}
            className="h-[564px]"
            src={"/assets/mountain.jpg"}
            alt="A mountain image "
          />
        </div>
        <div className="flex-1 p-10">
          <h3>Login</h3>
          <p>Donec tortor quam at duis tortor.</p>
          <div className="flex flex-col mt-10">
            <input type="email" />
            <input type="password" />
            <button>Button</button>
            <button>Button</button>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Login;
