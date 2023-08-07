"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import Image from "next/image";

export default function GitHubButton() {
  const supabase = createClientComponentClient();

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000/auth/callback",
      },
    });
  };

  return (
    <div className="flex-1 flex justify-center items-center">
      <button
        onClick={handleSignIn}
        className="hover:bg-gray-800 p-8 rounded-xl"
      >
        <Image
          src="/github-mark-white.png"
          alt="GitHub"
          width={100}
          height={100}
        />
      </button>
    </div>
  );
}
