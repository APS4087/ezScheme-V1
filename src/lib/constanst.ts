// FILE: lib/constanst.ts
export const pricingCards = [
  {
    title: "Free Plan",
    description: "Limited access to basic features with daily limits.",
    price: "Free",
    duration: "",
    features: [
      "Access to basic information",
      "Simple queries",
      "Limited to 5 queries per day",
    ],
    priceId: "free",
  },
  {
    title: "Premium Plan",
    description: "Access to all features, including video generation.",
    price: "$50",
    duration: "month",
    features: [
      "Access to basic information",
      "Simple queries",
      "Detailed virtual assistant queries",
      "Personalized video content",
      "Priority support",
    ],
    priceId: "premium",
  },
  {
    title: "Pro Plan",
    description: "Access to advanced features.",
    price: "$30",
    duration: "month",
    features: [
      "Access to basic information",
      "Simple queries",
      "Recommendation engine",
    ],
    priceId: "pro",
  }
];