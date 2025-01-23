import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import React from "react";

// This is a Server Component
const Page = async ({ params }) => {
  const { postId } = await params;

  const { isAuthenticated } = getKindeServerSession();
  if (!(await isAuthenticated())) {
    redirect(`/api/auth/login?post_login_redirect_url=/${postId}`);
  }

  // Fetch data on the server
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const post = await res.json();
  return (
    <div className="flex justify-center items-center flex-col gap-4 container mx-auto">
      <h1 className="text-5xl font-bold">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Page;
