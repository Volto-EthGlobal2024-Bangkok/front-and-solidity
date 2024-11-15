import type { NextPage } from "next";
import { SigninWithEmailForm } from "~~/components/auth/SignInWithEmailForm";

const Auth: NextPage = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col">
        <SigninWithEmailForm />
      </div>
    </div>
  );
};

export default Auth;
