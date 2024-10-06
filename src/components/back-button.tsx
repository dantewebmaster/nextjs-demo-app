"use client";

import { useRouter } from "next/navigation";
import React from "react";

export const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="fixed top-20 left-4 p-2 bg-blue-400 text-white rounded-full size-8 flex items-center justify-center hover:scale-125 transition-transform"
    >
      &larr;
    </button>
  );
};
