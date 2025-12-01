import { style } from "@vanilla-extract/css";
import { theme } from "@/styles";

export const footer = style({
  display: "flex",
  alignItems: "center",
  borderTop: `2px solid ${theme.gray}`,
  flexShrink: 0,
  height: "64px",
});

export const translateButton = style({
  width: "50%",
  height: "100%",
  padding: "20px",
  backgroundColor: theme.primary,
  border: "none",
  fontSize: "18px",
  fontWeight: "600",
  color: "#333",
  cursor: "pointer",
  transition: "background-color 0.3s",
  ":hover": {
    backgroundColor: "#7BC936",
  },
  ":active": {
    backgroundColor: "#6AB825",
  },
  ":disabled": {
    backgroundColor: "#E0E0E0",
    cursor: "not-allowed",
    color: "#999",
  },
});

export const iconButtons = style({
  display: "flex",
  gap: "15px",
  padding: "0 30px",
  width: "50%",
  justifyContent: "flex-end",
  alignItems: "center",
  height: "100%",
});

export const iconButton = style({
  padding: "8px",
  border: "none",
  backgroundColor: "transparent",
  cursor: "pointer",
  transition: "opacity 0.2s",

  ":disabled": {
    opacity: 0.3,
    cursor: "not-allowed",
  },
});