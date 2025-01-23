"use client";
import Link from "next/link";
import React from "react";

const ClientBtn = ({ label, href }) => {
  return (
    <>
      <Link
        href={href}
        type="button"
        className="px-4 py-2 text-base bg-[rgba(0,0,0,0.3)] rounded-lg"
      >
        {label}
      </Link>
    </>
  );
};

export default ClientBtn;
