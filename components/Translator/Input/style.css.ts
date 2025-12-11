import { style } from "@vanilla-extract/css";
import { theme, screen } from "@/styles";

export const inputSection = style({
  display: "flex",
  flexDirection: "column",
  borderRight: `2px solid ${theme.gray}`,
  minHeight: 0,
  overflow: "hidden",

  "@media": {
    [`screen and (max-width: ${screen.phone})`]: {
      borderRight: "none",
    },
  },
});

export const languageHeader = style({
  padding: "16px 0px",
  borderBottom: `2px solid ${theme.gray}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
});

export const languageLabel = style({
  padding: "8px 30px 8px 30px",
  fontSize: "16px",
  fontWeight: "500",
  color: "#333",
  lineHeight: 1.5,
});

export const switchButton = style({
  padding: "8px",
  marginRight: "20px",
  backgroundColor: "transparent",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "transform 0.2s",
  ":active": {
    transform: "scale(0.95)",
  },
  ":disabled": {
    opacity: 0.3,
    cursor: "not-allowed",
  },
});

export const textArea = style({
  flex: 1,
  border: "none",
  outline: "none",
  fontSize: "16px",
  lineHeight: "1.6",
  resize: "none",
  fontFamily: "inherit",
  padding: "30px",
  minHeight: 0,
  overflowY: "auto",
  "::placeholder": {
    color: "#AAAAAA",
  },
});
