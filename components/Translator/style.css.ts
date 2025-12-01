import { style } from "@vanilla-extract/css";
import { theme } from "@/styles";

export const container = style({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#FFFFFF",
  padding: "74px 20px 20px 20px",
});

export const translatorBox = style({
  width: "100%",
  maxWidth: "1200px",
  height: "600px",
  maxHeight: "calc(100vh - 184px)",
  backgroundColor: theme.background,
  border: `3px solid ${theme.primary}`,
  borderRadius: "16px",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
});

export const mainContent = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  flex: 1,
  minHeight: 0,
  overflow: "hidden",
  "@media": {
    [`screen and (max-width: 768px)`]: {
      gridTemplateColumns: "1fr",
    },
  },
});