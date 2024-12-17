import { Profile } from "../_lib/ai-assistants";

const generateUsername = (name: string): string => {
  return (
    name.toLowerCase().replace(/\s+/g, "") +
    Math.floor(Math.random() * 1000).toString()
  );
};

const names = [
  "Emma Watson",
  "James Smith",
  "Sophia Chen",
  "Michael Brown",
  "Isabella Garcia",
  "William Davis",
  "Olivia Wilson",
  "Alexander Lee",
  "Ava Martinez",
  "Daniel Taylor",
  "Mia Anderson",
  "David Johnson",
  "Emily White",
  "Joseph Miller",
  "Charlotte Moore",
  "Christopher Clark",
  "Amelia Rodriguez",
  "Andrew Wright",
  "Elizabeth Hall",
  "Matthew King",
];

const bios = [
  "AI researcher focusing on natural language processing",
  "Tech entrepreneur building the future of autonomous systems",
  "Data scientist passionate about machine learning applications",
  "Software architect specializing in AI-driven solutions",
  "Product manager with expertise in AI integration",
  "AI ethics advocate and technology consultant",
  "Machine learning engineer working on computer vision",
  "AI startup founder revolutionizing healthcare tech",
  "Research scientist exploring artificial general intelligence",
  "Deep learning specialist in robotics applications",
];

export const generateMockProfiles = (): Profile[] => {
  const profiles: Profile[] = [];

  // Generate 10 followers
  for (let i = 0; i < 10; i++) {
    const name = names[i];
    profiles.push({
      id: `follower-${i + 1}`,
      name,
      username: generateUsername(name),
      bio: bios[i % bios.length],
      avatar: `https://i.pravatar.cc/300?img=${i + 1}`,
      type: "follower",
    });
  }

  // Generate 10 2nd-degree connections
  for (let i = 10; i < 20; i++) {
    const name = names[i];
    profiles.push({
      id: `2nd-degree-${i + 1}`,
      name,
      username: generateUsername(name),
      bio: bios[i % bios.length],
      avatar: `https://i.pravatar.cc/300?img=${i + 11}`,
      type: "2nd-degree",
    });
  }

  return profiles;
};
