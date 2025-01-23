"use client";
import React from "react";

const ClientBtn = ({ label, id }) => {
  return (
    <>
      <button
        type="button"
        onClick={() => console.log("Object id: ", id)}
        className="px-4 py-2 text-base bg-[rgba(0,0,0,0.3)] rounded-lg"
      >
        {label}
      </button>
    </>
  );
};

export default ClientBtn;
