import { style, keyframes } from "@vanilla-extract/css";
import { theme } from "@/styles";

const slideUp = keyframes({
  from: {
    opacity: 0,
    transform: "translateY(10px)",
  },
  to: {
    opacity: 1,
    transform: "translateY(0)",
  },
});

export const termsSection = style({
  maxHeight: "150px",
  backgroundColor: "#FFFFFF",
  borderTop: `2px solid ${theme.gray}`,
  overflowY: "auto",
  flexShrink: 0,
  animation: `${slideUp} 0.3s ease-out`,
});

export const termsTitle = style({
  fontSize: "18px",
  fontWeight: "600",
  marginBottom: "16px",
  color: "#333",
});

export const termsList = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  padding: "20px",
});

export const termItem = style({
  padding: "12px",
  borderRadius: "8px",
});

export const termHeader = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  marginBottom: "8px",
});

export const termWord = style({
  fontSize: "16px",
  fontWeight: "600",
  color: theme.primary,
});

export const termOriginal = style({
  fontSize: "14px",
  color: "#6B7280",
  fontWeight: "500",
});

export const termMeaning = style({
  fontSize: "14px",
  color: "#959595",
  lineHeight: "1.6",
  margin: 0,
});