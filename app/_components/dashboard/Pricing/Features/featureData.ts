interface Feature {
  name: string;
  availability: boolean[];
}

interface FeatureCategory {
  name: string;
  features: Feature[];
}

export const featureCategories: FeatureCategory[] = [
  {
    name: 'Core Features',
    features: [
      {
        name: 'Team collaboration',
        availability: [true, true, true]
      },
      {
        name: 'Project management',
        availability: [true, true, true]
      },
      {
        name: 'File sharing',
        availability: [true, true, true]
      },
      {
        name: 'Task automation',
        availability: [false, true, true]
      }
    ]
  },
  {
    name: 'Security',
    features: [
      {
        name: 'Two-factor authentication',
        availability: [true, true, true]
      },
      {
        name: 'SSO integration',
        availability: [false, true, true]
      },
      {
        name: 'Custom security policies',
        availability: [false, false, true]
      },
      {
        name: 'Audit logs',
        availability: [false, true, true]
      }
    ]
  },
  {
    name: 'Support',
    features: [
      {
        name: 'Email support',
        availability: [true, true, true]
      },
      {
        name: 'Priority support',
        availability: [false, true, true]
      },
      {
        name: 'Phone support',
        availability: [false, false, true]
      },
      {
        name: 'Dedicated success manager',
        availability: [false, false, true]
      }
    ]
  }
];