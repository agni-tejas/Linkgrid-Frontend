import React from "react";
import { Timeline } from "@/app/_ui/timeline";
import AnimationContainer from "./animation-container";
import MagicCard from "@/app/_ui/magic-card";
import {
  Clock3,
  Search,
  Handshake,
  MailX,
  Frown,
  Users,
  MessageCircle,
  ClipboardList,
  Target,
  TrendingUp,
  Settings,
  Layers,
  ShieldCheck,
} from "lucide-react";
import Perk from "@/app/_ui/solutions";

const problems = [
  {
    icon: <Clock3 size={40} className="text-blue-600" />,
    title: "Networking is Time-Consuming",
    description:
      "Endless hours wasted searching for the right people, only to end up with limited or irrelevant connections.",
  },
  {
    icon: <Search size={40} className="text-green-600" />,
    title: "Finding the Right People Feels Impossible",
    description:
      "Identifying like-minded individuals or potential collaborators is overwhelming without the right tools or insights.",
  },
  {
    icon: <Handshake size={40} className="text-purple-600" />,
    title: "Missed Opportunities Hurt Your Growth",
    description:
      "The best opportunities slip through the cracks because it’s impossible to identify and act on them all.",
  },
  {
    icon: <MailX size={40} className="text-red-600" />,
    title: "Manual Effort is Draining",
    description:
      "Cold outreach, repeated follow-ups, and unorganized conversations make networking feel like a chore.",
  },
  {
    icon: <Users size={40} className="text-teal-600" />,
    title: "Generic Connections Don’t Deliver Results",
    description:
      "Making random connections rarely leads to meaningful relationships or career progress.",
  },
  {
    icon: <Frown size={40} className="text-orange-600" />,
    title: "You’re Falling Behind in a Fast-Moving World",
    description:
      "Outdated methods of networking hold you back from unlocking your true potential.",
  },
];

const solutions = [
  {
    title: "Save Time with AI-Driven Matchmaking",
    description:
      "Let AI analyze your preferences and goals to suggest the right people—no manual searching required.",
    icon: Users,
  },
  {
    title: "Never Miss an Opportunity",
    description:
      "AI scans your network to identify valuable connections and opportunities you might otherwise overlook.",
    icon: TrendingUp,
  },
  {
    title: "Automated Introductions Made Effortless",
    description:
      "AI handles group chats, sends personalized messages, and organizes conversations for you.",
    icon: MessageCircle,
  },
  {
    title: "Find Exactly Who You Need with AI Search",
    description:
      "Quickly search your network for specific roles or interests, like software developers or mentors.",
    icon: Search,
  },
  {
    title: "Tailored Suggestions for Real Impact",
    description:
      "Get actionable recommendations for projects and conversations aligned with your goals.",
    icon: Target,
  },
  {
    title: "Personalized Networking, Your Way",
    description:
      "Fine-tune your AI agent to prioritize your specific interests and personality traits.",
    icon: Settings,
  },
  {
    title: "Dynamic Insights to Guide Your Growth",
    description:
      "Receive AI-generated insights on who to connect with and why, keeping your network fresh.",
    icon: TrendingUp,
  },
  {
    title: "Streamlined Collaboration for Seamless Results",
    description:
      "Pre-drafted messages and topics foster meaningful discussions and drive collaboration.",
    icon: ClipboardList,
  },
  {
    title: "Smart Network Coordination",
    description:
      "Navigate personal and professional goals across industries and interests seamlessly.",
    icon: Layers,
  },
  {
    title: "Security You Can Trust",
    description:
      "Your data is encrypted and complies with global standards, ensuring complete safety and privacy.",
    icon: ShieldCheck,
  },
];

export function TimelineDemo() {
  const data = [
    {
      title: "The Problems",
      content: (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full py-8 gap-4 md:gap-8">
            {problems.map((process, id) => (
              <AnimationContainer delay={0.2 * id} key={id}>
                <MagicCard className="group md:py-8">
                  <div className="flex flex-col items-start justify-center w-full">
                    <div>{process.icon}</div>

                    <div className="flex flex-col relative items-start">
                      <span className="absolute -top-6 right-0 border-2 border-border text-foreground font-medium text-2xl rounded-full w-12 h-12 flex items-center justify-center pt-0.5">
                        {id + 1}
                      </span>
                      <h3 className="text-xl mt-6 font-medium text-foreground">
                        {process.title}
                      </h3>
                      <p className="mt-2 text-base text-muted-foreground">
                        {process.description}
                      </p>
                    </div>
                  </div>
                </MagicCard>
              </AnimationContainer>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Linkgrid: As a solution",
      content: (
        <div>
          <AnimationContainer>
            <div className="mt-2 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full relative">
                {solutions.map((perk, index) => (
                  <Perk
                    key={index}
                    index={index}
                    title={perk.title}
                    description={perk.description}
                    icons={perk.icon}
                  />
                ))}
              </div>
            </div>
          </AnimationContainer>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
