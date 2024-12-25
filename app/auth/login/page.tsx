"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogleFilled,
  IconBrandOnlyfans,
} from "@tabler/icons-react";
import { Label } from "@/app/_ui/loginLabel";
import { Input } from "@/app/_ui/loginInput";
import FlickeringGrid from "@/components/ui/flickering-grid";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Image from "next/image";

function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      {/* Background animation */}
      <FlickeringGrid
        className="absolute inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
        squareSize={5}
        gridGap={6}
        color="#38bdf8"
        maxOpacity={0.9}
        flickerChance={0.1}
        height={1600}
        width={1600}
      />

      {/* Login form container */}
      <div className="relative z-10 flex h-full justify-center items-center">
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl pr-8 pl-8 pb-2 pt-2 border border-gray-800 bg-white dark:bg-stone-950">
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 ">
              <Image
                src="/logoblack.png"
                alt="Dashboard"
                width={320}
                height={320}
                quality={100}
              />
            </div>
          </div>
          <h1 className="font-bold text-3xl text-center text-neutral-800 dark:text-neutral-200">
            Login to your account
          </h1>

          <p className="text-neutral-600 text-sm text-center max-w-sm mt-2 dark:text-neutral-300">
            Welcome back! Sign in to continue.
          </p>

          <form className="my-8" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-4">
              <button
                className=" relative group/btn flex space-x-2  items-center justify-center px-4 w-full text-black rounded-md h-10 font-medium shadow-input bg-gray-50 dark:bg-[#0080bf] dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                type="submit"
              >
                <IconBrandGoogleFilled className="h-6 w-6 text-neutral-800 dark:text-neutral-100" />
                <span className="text-neutral-700  dark:text-neutral-100 text-lg">
                  Google
                </span>
                <BottomGradient />
              </button>
            </div>
            <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" placeholder="john@example.com" type="email" />
            </LabelInputContainer>
            <LabelInputContainer>
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="••••••••" type="password" />
            </LabelInputContainer>
            <div className="text-end mb-4">
              <a
                href="#"
                className="font-normal text-xs  text-gray-500 hover:text-gray-300"
              >
                Forgot password?
              </a>
            </div>

            <button
              className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Login &rarr;
              <BottomGradient />
            </button>
            <div className="text-center mt-4 ">
              <p className="font-normal text-xs text-gray-300">
                Don't have a Linkgrid account?{" "}
                <a
                  href="#"
                  className="font-normal text-xs  text-sky-500 hover:text-sky-300"
                >
                  Create account
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-fuchsia-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};

export default SignupFormDemo;
