import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#FFFFFF",
});

export const header = style({
  backgroundColor: "#FFFFFF",
  width: "100%",
  minWidth: "320px",
  position: "fixed",
});

export const wrapper = style({
  height: "74px",
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
});

export const main = style({
  flex: 1,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});
