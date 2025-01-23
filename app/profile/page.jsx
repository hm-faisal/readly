import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import React from "react";

const page = async () => {
  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect(`/api/auth/login?post_login_redirect_url=/profile`);
  }
  return (
    <div className="flex justify-center items-center min-h-screen">
      <h2 className="text-3xl md:text-5xl font-bold text-center">
        Welcome to your profile!
      </h2>
    </div>
  );
};

export default page;
