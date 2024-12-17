import { useState, useEffect } from "react";
import { Message } from "../_lib/chat";
import { Profile } from "../_lib/ai-assistants";
import { generateMockProfiles } from "../_lib/mockDataGenerators";

export const useChat = (profileId: string | null) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    if (profileId) {
      // In a real app, fetch the profile from an API
      const profiles = generateMockProfiles();
      const foundProfile = profiles.find((p) => p.id === profileId);
      if (foundProfile) {
        setProfile(foundProfile);
        // Add initial greeting
        setMessages([
          {
            id: "1",
            content: `Hi! I'm ${foundProfile.name}'s AI persona. How can I help you today?`,
            sender: "ai",
            timestamp: new Date().toISOString(),
          },
        ]);
      }
    }
  }, [profileId]);

  const sendMessage = (content: string) => {
    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      sender: "user",
      timestamp: new Date().toISOString(),
    };
    setMessages((prev) => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: `Thanks for your message! I'm currently working on several exciting AI projects, including natural language processing and computer vision applications.`,
        sender: "ai",
        timestamp: new Date().toISOString(),
      };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);
  };

  return {
    messages,
    profile,
    sendMessage,
  };
};
