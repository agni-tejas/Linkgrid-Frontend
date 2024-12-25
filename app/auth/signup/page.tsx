"use client";

import React from "react";
import { cn } from "@/lib/utils";

import { Label } from "@/app/_ui/loginLabel";
import { Input } from "@/app/_ui/loginInput";
import FlickeringGrid from "@/components/ui/flickering-grid";
import Image from "next/image";
import { IconBrandGoogleFilled } from "@tabler/icons-react";

function SignupFormDemo() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="relative h-[120vh] overflow-hidden bg-black">
      {/* Background animation */}
      <FlickeringGrid
        className="absolute inset-0 z-0 [mask-image:radial-gradient(450px_circle_at_center,white,transparent)]"
        squareSize={6}
        gridGap={6}
        color="#a3e635"
        maxOpacity={0.8}
        flickerChance={0.1}
        height={1600}
        width={1600}
      />

      {/* Login form container */}
      <div className="relative z-10 flex h-full justify-center items-center">
        <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl pr-8 pl-8  pt-2 border border-gray-800 bg-white dark:bg-stone-950">
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
          <h2 className="font-bold text-2xl text-center text-neutral-800 dark:text-neutral-200">
            Create your Linkgrid account
          </h2>

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
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
              <LabelInputContainer>
                <Label htmlFor="firstname">First name</Label>
                <Input id="firstname" placeholder="John" type="text" />
              </LabelInputContainer>
              <LabelInputContainer>
                <Label htmlFor="lastname">Last name</Label>
                <Input id="lastname" placeholder="Durden" type="text" />
              </LabelInputContainer>
            </div>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" placeholder="john@example.com" type="email" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="••••••••" type="password" />
            </LabelInputContainer>
            <LabelInputContainer className="mb-8">
              <Label htmlFor="twitterpassword">Confirm password</Label>
              <Input
                id="twitterpassword"
                placeholder="••••••••"
                type="twitterpassword"
              />
            </LabelInputContainer>
            <button
              className="bg-gradient-to-br mb-4 relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Sign up &rarr;
              <BottomGradient />
            </button>
            <p className="font-thin text-xs text-center text-gray-500 hover:text-gray-400">
              By signing up, you agree to Linkgrid's Terms of Service and
              Privacy Policy
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-lime-500 to-transparent" />
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
