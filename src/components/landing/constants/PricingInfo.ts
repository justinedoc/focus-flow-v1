export type PricingPlan = {
  plan: string;
  price: number;
  features: string[];
  link: string;
  tag: string;
  duration: string;
  inBlack: boolean;
};

export const pricingInfo: PricingPlan[] = [
  {
    plan: "free",
    price: 0,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
    link: "#",
    tag: "",
    duration: "monthly",
    inBlack: false,
  },
  {
    plan: "Pro",
    price: 9,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
    link: "#",
    tag: "Most popular",
    duration: "monthly",
    inBlack: true,
  },

  {
    plan: "Business",
    price: 19,
    features: [
      "Unlimited project members",
      "Unlimited tasks and projects",
      "100GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
    link: "#",
    tag: "",
    duration: "monthly",
    inBlack: false,
  },
];
