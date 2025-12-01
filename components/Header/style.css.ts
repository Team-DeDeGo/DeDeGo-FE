import { style } from "@vanilla-extract/css";
import { screen } from "@/styles";

export const header = style({
  backgroundColor: "#FFFFFF",
  width: "100%",
  minWidth: "320px",
  position: "fixed",
  zIndex: 100,

  "@media": {
    [`screen and (max-width: ${screen.phone})`]: {
      display: "none",
    },
  },
});

export const wrapper = style({
  backgroundColor: "#FFFFFF",
  height: "54px",
  margin: "0 auto",
  padding: "0 32px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
});

export const leftSection = style({
  display: "flex",
  alignItems: "center",
  gap: "20px",
});

export const divider = style({
  color: "#DDDDDD",
  fontSize: "24px",
  fontWeight: "300",
  userSelect: "none",
});

export const title = style({
  fontSize: "16px",
  fontWeight: "700",
  color: "#333333",
  margin: 0,
  letterSpacing: "-0.5px",
});

export const about = style({
  padding: "10px 24px",
  fontSize: "15px",
  fontWeight: "600",
  color: "#333333",
  cursor: "pointer",
  textDecoration: "none",
});