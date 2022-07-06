import { AiOutlineGoogle } from "react-icons/ai";
import { BsGithub } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import CourceFooter from "../../components/CourceFooter";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Banner from "./Banner";
import Signup from "./Signup";
import { useForm } from "react-hook-form";
import Loading from "../../components/Loading";
function Login() {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  let signInError;

  if (loading || gLoading) {
    return <Loading></Loading>;
  }
  if (error || gError) {
    signInError = (
      <p className=" text-red-600">{error?.message || gError?.message} </p>
    );
  }
  if (user || gUser) {
    console.log(user || gUser);
  }
  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <>
      <Banner></Banner>
      <div className=" flex  justify-center items-center my-24 gap-12">
        <div class=" w-96   bg-base-100 shadow">
          <div class="card-body">
            <h2 class="card-title text-3xl  font-bold">Login</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div class="form-control w-full ">
                <label class="label">
                  <span class="label-text text-gray-500 text-lg">
                    Username or email *
                  </span>
                </label>
                <input
                  type="email"
                  placeholder="Email or Username"
                  class="input input-bordered  w-full "
                  {...register("email", {
                    required: {
                      value: true,
                      message: "email is requeird",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "provide a valid email",
                    },
                  })}
                />
                <label class="label">
                  {errors.email?.type === "required" && (
                    <span class="label-text-alt text-lg text-red-700">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span class="label-text-alt text-lg text-red-700">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div class=" w-full">
                <label class="label">
                  <span class="label-text text-gray-500 text-lg">
                    Password *
                  </span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  class="input input-bordered w-full "
                  {...register("password", {
                    required: {
                      value: true,
                      message: "password is requeird",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 cherecter or longer",
                    },
                  })}
                />
                <label class="label">
                  {errors.password?.type === "required" && (
                    <span class="label-text-alt text-lg text-red-700">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span class="label-text-alt text-lg text-red-700">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              <div class="form-control my-4">
                <label class="cursor-pointer label">
                <input
                    type="checkbox"
                    checked="checked"
                    class="checkbox checkbox-accent"
                  />
                  <span class="label-text  text-gray-500 text-lg">Remember me</span>
                 
                </label>
              </div>
              <input
                placeholder="Login"
                className="btn btn-accent text-lg w-full rounded-sm text-white font-bold"
                type="submit" value="Login"
              />
              {signInError}
              
            </form>
            <p className=" my-5 text-gray-600 text-lg">Lost your password?</p>

            <div className=" flex justify-center items-center">
              <div className="flex gap-6 my-6 ">
                <button onClick={() => signInWithGoogle()}>
                  {" "}
                  <p className="text-teal-400 text-3xl w-12 p-2 rounded-full border-teal-400 border rounded-3xl hover:bg-teal-400 hover:text-white ">
                    <AiOutlineGoogle></AiOutlineGoogle>
                  </p>
                </button>
                <p className="text-teal-400 text-3xl w-12 p-2 rounded-full border-teal-400 border rounded-3xl hover:bg-teal-400 hover:text-white ">
                  <BsGithub></BsGithub>
                </p>
                <p className="text-teal-400 text-3xl w-12 p-2 rounded-full border-teal-400 border rounded-3xl hover:bg-teal-400 hover:text-white ">
                  <BsFacebook></BsFacebook>
                </p>
              </div>
            </div>
          </div>
        </div>

        <Signup></Signup>
      </div>
      <CourceFooter></CourceFooter>
    </>
  );
}

export default Login;
