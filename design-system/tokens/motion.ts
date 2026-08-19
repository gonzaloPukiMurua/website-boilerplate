export const motionTokens = {
  duration: {
    fast: 0.15,
    base: 0.2,
    slow: 0.3,
  },

  easing: {
    standard: [0.4, 0, 0.2, 1],
    out: [0, 0, 0.2, 1],
    in: [0.4, 0, 1, 1],
  },

  spring: {
    snappy: { type: "spring", stiffness: 500, damping: 30, mass: 0.5 },
    gentle: { type: "spring", stiffness: 300, damping: 30 },
  },
} as const;

export type MotionDuration = keyof typeof motionTokens.duration;
export type MotionEasing = keyof typeof motionTokens.easing;
export type MotionSpring = keyof typeof motionTokens.spring;
