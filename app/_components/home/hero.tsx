import Wrapper from "./wrapper";
import Container from "./container";
import { BorderBeam } from "./../../_ui/border-beam";
import { Button } from "./../../_ui/button";

import { Input } from "./../../_ui/input";
import { LampContainer } from "./../../_ui/lamp";
import Marquee from "./../../_ui/marquee";
import SectionBadge from "./../../_ui/section-badge";
import { reviews } from "@/app/_constants";
import { cn } from "../../_lib/utils";
import { ArrowRight, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Spline from "@splinetool/react-spline";
import { HeroHighlight } from "@/app/_ui/hero-highlight";

import ShimmerButton from "../../_ui/shimmer-button";
import { Cover } from "@/app/_ui/cover";
import { FlipWords } from "@/app/_ui/flip-words";
import Navbar from "@/app/_ui/navbar/navbar";
import AnimationContainer from "./animation-container";
import { COMPANIES } from "./misc";
import { TimelineDemo } from "./problemsolution";
import FeatureShowcase from "./FeatureShowcase/FeatureShowcase";

const HomePage = () => {
  const firstRow = reviews.slice(0, reviews.length / 2);
  const secondRow = reviews.slice(reviews.length / 2);
  const words = [
    "Grow faster with personalized AI recommendations that save you time and amplify your professional impact.",
    "From discovery to collaboration, Let Linkgrid transform the way you network.",
    "Discover, connect, and collaborate with people who share your vision.",
    "Personalized AI recommendations to grow your network.",
  ];
  return (
    <>
      <Navbar />
      <section className="w-full relative flex flex-col items-center justify-center px-4 md:px-0 ">
        {/* Hero Section */}
        <HeroHighlight containerClassName="z-50">
          <Wrapper>
            <Container>
              {/* Hero Content */}
              <div className="flex items-center justify-center w-full h-[36vh] relative z-10">
                <Spline
                  scene="https://prod.spline.design/4IGmabJTPb5ijaLG/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
              <div className="flex flex-col items-center justify-center min-h-[60vh] w-full relative z-20">
                <h1 className=" text-4xl md:text-4xl lg:text-7xl font-semibold max-w-7xl mx-auto text-center relative z-20 pb-4 bg-clip-text text-transparent bg-gradient-to-b dark:from-[#add6ff] dark:via-[#71b7fd] dark:to-[#0080ff] from-[#add6ff] via-[#71b7fd] to-[#0080ff]">
                  Seamless Networking. <br />
                  Smarter Solutions.
                </h1>
                <Cover className="text-3xl md:text-3xl lg:text-3xl font-medium max-w-7xl  mx-auto text-center bg-clip-text ">
                  Your Network Supercharged by AI
                </Cover>
                <FlipWords
                  words={words}
                  className="text-base md:text-lg lg:text-xl  font-normal max-w-7xl mt-14 mx-auto text-center bg-clip-text "
                />

                {/* Call-to-Action Section */}
                <div className="flex items-center justify-center mt-6 md:mt-8 w-full">
                  <Link href="#">
                    <ShimmerButton className="shadow-2xl">
                      <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                        Join The Grid
                      </span>
                    </ShimmerButton>
                  </Link>
                </div>
              </div>

              {/* Spline Animation Section */}
            </Container>
          </Wrapper>
        </HeroHighlight>
        <Wrapper>
          <AnimationContainer delay={0.4}>
            <div className="flex pt-10 w-full">
              <div className="flex flex-col items-center justify-center text-center w-full py-2">
                <h2 className="text-xl heading">Companies that trust us</h2>
                <div className="mt-10 w-full relative overflow-hidden">
                  <Marquee pauseOnHover className="[--duration:30s]">
                    <div className="flex gap-8 md:gap-12">
                      <ul className="flex flex-wrap items-center gap-x-6 gap-y-6 md:gap-x-16 justify-center">
                        {COMPANIES.map((company) => (
                          <li key={company.name}>
                            <Image
                              src={company.logo}
                              alt={company.name}
                              width={80}
                              height={80}
                              quality={100}
                              className="w-28 h-auto"
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Marquee>
                  <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
                  <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
                </div>
              </div>
            </div>
          </AnimationContainer>
        </Wrapper>
        <HeroHighlight containerClassName="z-50">
          <Wrapper>
            <Container>
              <AnimationContainer
                delay={0.2}
                className="relative pt-20 pb-20 md:py-32 px-2 bg-transparent w-full"
              >
                <div className="absolute md:top-[10%] left-1/2 gradient w-3/4 -translate-x-1/2 h-1/4 md:h-1/4 inset-0 blur-[5rem] animate-image-glow"></div>
                <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
                  <BorderBeam size={250} duration={12} delay={9} />
                  <Image
                    src="/dashboard.svg"
                    alt="Dashboard"
                    width={1200}
                    height={1200}
                    quality={100}
                    className="rounded-md lg:rounded-xl bg-foreground/10 ring-1 ring-border"
                  />
                  <div className="absolute -bottom-4 inset-x-0 w-full h-1/2 bg-gradient-to-t from-background z-40"></div>
                  <div className="absolute bottom-0 md:-bottom-8 inset-x-0 w-full h-1/4 bg-gradient-to-t from-background z-50"></div>
                </div>
              </AnimationContainer>
            </Container>
          </Wrapper>

          {/* how it works */}
          <Wrapper className="flex flex-col items-center justify-center py-12 relative">
            <Container>
              <div className="max-w-md mx-auto text-start md:text-center">
                <SectionBadge title="The Idea Behind" />
                <h2 className="text-3xl lg:text-5xl font-semibold mt-6">
                  The Problem with Traditional Networking
                </h2>
                <p className="text-muted-foreground mt-6">Problem & Solution</p>
              </div>
              <TimelineDemo />
            </Container>
          </Wrapper>

          {/* features */}
          <Wrapper className="flex flex-col items-center justify-center py-12 relative">
            <div className="hidden md:block absolute top-0 -right-1/3 w-72 h-72 bg-primary rounded-full blur-[10rem] -z-10"></div>
            <div className="hidden md:block absolute bottom-0 -left-1/3 w-72 h-72 bg-indigo-600 rounded-full blur-[10rem] -z-10"></div>
            <Container>
              <div className="max-w-md mx-auto text-start md:text-center">
                <SectionBadge title="Features" />
                <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                  Discover our powerful features
                </h2>
                <p className="text-muted-foreground mt-6">
                  Linkgrid offers a range of features to help you build a
                  network.
                </p>
              </div>
            </Container>
            <Container>
              <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
                <FeatureShowcase />
              </div>
            </Container>
          </Wrapper>
        </HeroHighlight>
        {/* pricing */}

        {/* testimonials */}
        <Wrapper className="flex flex-col items-center mt-20 justify-center py-12 relative">
          <div className="hidden md:block absolute -top-1/4 -left-1/3 w-72 h-72 bg-indigo-500 rounded-full blur-[10rem] -z-10"></div>
          <Container>
            <div className="max-w-md mx-auto text-start md:text-center">
              <SectionBadge title="Our Community" />
              <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
                What people are saying
              </h2>
              <p className="text-muted-foreground mt-6">
                See how Linkgrid empowers businesses of all sizes. Here&apos;s
                what real people are saying on Twitter
              </p>
            </div>
          </Container>
          <Container>
            <div className="py-10 md:py-20 w-full">
              <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10">
                <Marquee pauseOnHover className="[--duration:20s] select-none">
                  {firstRow.map((review) => (
                    <figure
                      key={review.name}
                      className={cn(
                        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                        "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]"
                      )}
                    >
                      <div className="flex flex-row items-center gap-2">
                        <UserIcon className="w-6 h-6" />
                        <div className="flex flex-col">
                          <figcaption className="text-sm font-medium">
                            {review.name}
                          </figcaption>
                          <p className="text-xs font-medium text-muted-foreground">
                            {review.username}
                          </p>
                        </div>
                      </div>
                      <blockquote className="mt-2 text-sm">
                        {review.body}
                      </blockquote>
                    </figure>
                  ))}
                </Marquee>
                <Marquee
                  reverse
                  pauseOnHover
                  className="[--duration:20s] select-none"
                >
                  {secondRow.map((review) => (
                    <figure
                      key={review.name}
                      className={cn(
                        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
                        "border-zinc-50/[.1] bg-background over:bg-zinc-50/[.15]"
                      )}
                    >
                      <div className="flex flex-row items-center gap-2">
                        <UserIcon className="w-6 h-6" />
                        <div className="flex flex-col">
                          <figcaption className="text-sm font-medium">
                            {review.name}
                          </figcaption>
                          <p className="text-xs font-medium text-muted-foreground">
                            {review.username}
                          </p>
                        </div>
                      </div>
                      <blockquote className="mt-2 text-sm">
                        {review.body}
                      </blockquote>
                    </figure>
                  ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-background"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-background"></div>
              </div>
            </div>
          </Container>
        </Wrapper>

        {/* newsletter */}
        <Wrapper className="flex flex-col items-center justify-center  py-12 relative">
          <Container>
            <LampContainer>
              <div className="flex flex-col items-center justify-center relative w-full text-center">
                <h2 className="text-4xl lg:text-5xl xl:text-6xl lg:!leading-snug font-semibold mt-8">
                  From Idea to Launch <br /> Faster Than Ever
                </h2>
                <p className="text-muted-foreground mt-6 max-w-md mx-auto">
                  Building a great platform to thrive on.
                </p>
                <Button variant="white" className="mt-6" asChild>
                  <Link href="/sign-in">
                    Get started for free
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </LampContainer>
          </Container>
          <Container className="relative z-[999999]">
            <div className="flex items-center justify-center w-full -mt-40">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full px-4 md:px-8 rounded-lg lg:rounded-2xl border border-border/80 py-4 md:py-8">
                <div className="flex flex-col items-start gap-4 w-full">
                  <h4 className="text-xl md:text-2xl font-semibold">
                    Join our newsletter
                  </h4>
                  <p className="text-base text-muted-foreground">
                    Be up to date with everything
                  </p>
                </div>
                <div className="flex flex-col items-start gap-2 md:min-w-80 mt-5 md:mt-0 w-full md:w-max">
                  <form
                    action="#"
                    className="flex flex-col md:flex-row items-center gap-2 w-full md:max-w-xs"
                  >
                    <Input
                      required
                      type="email"
                      placeholder="Enter your email"
                      className="focus-visible:ring-0 focus-visible:ring-transparent focus-visible:border-primary duration-300 w-full"
                    />
                    <Button
                      type="submit"
                      size="sm"
                      variant="secondary"
                      className="w-full md:w-max"
                    >
                      Subscribe
                    </Button>
                  </form>
                  <p className="text-xs text-muted-foreground">
                    By subscribing you agree with our{" "}
                    <Link href="#">Privacy Policy</Link>
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Wrapper>
      </section>
    </>
  );
};

export default HomePage;
