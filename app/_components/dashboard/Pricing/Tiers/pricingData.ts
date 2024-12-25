import { PricingPlan } from "./types";

export const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    price: 0,
    features: [
      "Search and view 10 profiles per day",
      "Create up to 3 groups",
      "Limited access to persona chats",
      "5 connection requests/month",
      "Standard data scraping queue",
    ],
  },
  {
    name: "Plus",
    price: 20,
    features: [
      "Search and view unlimited profiles per day.",
      "Create up to 10 groups.",
      "20 conversations/month with AI personas.",
      "Send up to 25 connection requests.",
      "Priority data scraping",
    ],
  },
  {
    name: "Pro",
    price: 40,
    features: [
      "Search and view unlimited profiles per day.",
      "Unlimited groups",
      "Unlimited conversations with AI personas",
      "Unlimited connection requests",
      "Top-priority data scraping",
    ],
  },
];
