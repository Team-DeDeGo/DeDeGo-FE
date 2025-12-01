import { style, keyframes } from "@vanilla-extract/css";

const FadeInOut = keyframes({
  "0%, 80%, 100%": {
    opacity: 0,
  },
  "40%": {
    opacity: 1,
  },
});

export const loadingText = style({
  fontSize: "16px",
  color: "#666",
  transition: "opacity 0.4s ease-in-out",
  lineHeight: "1.6",
  opacity: 0,
  selectors: {
    '&[data-fade-in="true"]': {
      opacity: 1,
    },
  },
});

export const loader = style({
  display: "inline-flex",
  gap: "8px",
  alignItems: "center",
  justifyContent: "center",

  "::before": {
    content: "",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#999",
    animation: `${FadeInOut} 1.4s infinite ease-in-out both`,
    animationDelay: "-0.32s",
  },

  "::after": {
    content: "",
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: "#999",
    animation: `${FadeInOut} 1.4s infinite ease-in-out both`,
  },
});

export const loaderDot = style({
  width: "10px",
  height: "10px",
  borderRadius: "50%",
  backgroundColor: "#999",
  animation: `${FadeInOut} 1.4s infinite ease-in-out both`,
  animationDelay: "-0.16s",
});