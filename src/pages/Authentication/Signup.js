import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

import { useForm } from "react-hook-form";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  let signInError;
const navigate=useNavigate()
  if (loading || gLoading ) {
    return <Loading></Loading>;
  }


  if (error || gError ) {
    signInError = (
      <p className=" text-red-600">
        {error?.message || gError?.message}
      </p>
    );
  }
  if (user || gUser) {
    console.log(user || gUser);
  }
  const onSubmit =  (data) => {
    console.log(data);
   createUserWithEmailAndPassword(data.email, data.password);
  
  };
  return (
    <div className=" flex justify-center items-center py-8 my-24 gap-12">
      <div class=" w-96  bg-base-100 shadow">
        <div class="card-body">
          <h2 class="card-title text-3xl  font-bold">Signup</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div class="form-control my-8 w-full ">
              <label class="label">
                <span class="label-text text-gray-500 text-lg">
                  Email address *
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
            <div class="form-control w-full ">
              <label class="label">
                <span class="label-text text-gray-500 text-lg">Username *</span>
              </label>
              <input
                type="text"
                placeholder=" Username"
                class="input input-bordered  w-full "
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is requeird",
                  },
                })}
              />
              <label class="label">
                {errors.name?.type === "required" && (
                  <span class="label-text-alt text-lg text-red-700">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div class=" w-full">
              <label class="label">
                <span class="label-text text-gray-500 text-lg">Password *</span>
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
                <span class="label-text  text-gray-500 text-lg">
                  Want to become an instructor?
                </span>
              </label>
            </div>
            <input
              placeholder="Login"
              className="btn btn-accent w-full text-lg rounded-sm text-white font-bold"
              type="submit"
              value="Signup"
            />
            {signInError}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
