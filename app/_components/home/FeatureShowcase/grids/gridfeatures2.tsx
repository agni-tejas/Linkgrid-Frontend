"use client";

import { BellIcon, Share2Icon } from "lucide-react";

import { AnimatedBeamMultipleOutputDemo } from "../beam";

import { BentoCard, BentoGrid } from "../../../../../components/ui/bento-grid";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const files = [
  {
    name: "bitcoin.pdf",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];

export const feature = [
  {
    id: "collaborate",
    Icon: BellIcon,
    name: "Secure",
    description: "Get notified when something happens.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <DotLottieReact
        src="/secure.lottie"
        loop
        autoplay
        className="absolute right-2 top-2 h-[200px] w-full border-none transition-all duration-300 ease-out  group-hover:scale-105"
      />
    ),
  },
  {
    id: "collaborate",
    Icon: Share2Icon,
    name: "Effortless Connections:",
    description:
      "LinkGrid uses AI to understand your preferences and connects you with people who share similar interests, goals, or opportunities.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-3",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[150px] border-none transition-all duration-300 ease-out  group-hover:scale-105" />
    ),
  },
];

export function BentoDemo2() {
  return (
    <BentoGrid>
      {feature.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
}
