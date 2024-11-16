"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

type FormInputs = {
  email: string;
};

export const SigninWithEmailForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    console.log(data);
    router.push("/assets");
  };

  return (
    <div className="card w-96">
      <div className="card-body gap-4">
        <div className="flex flex-col items-center gap-4 mb-6">
          <img
            alt="Volto"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=green&shade=600"
            className="w-auto h-16 w-16"
          />
          <h1 className="text-4xl font-bold">Volto</h1>
          <p className="text-base-content/80">Enter your email to continue</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="form-control gap-4">
          <div>
            <label htmlFor="email-address" className="sr-only">
              Email address
            </label>
            <input
              id="email-address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Email address"
              autoComplete="email"
              className="input input-bordered w-full"
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email && (
              <p className="text-error text-sm mt-2" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};
