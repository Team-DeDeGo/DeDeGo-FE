import { style } from "@vanilla-extract/css";
import { theme } from "@/styles";

export const outputSection = style({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#FFFFFF",
  minHeight: 0,
  overflow: "hidden",
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

export const outputText = style({
  flex: 1,
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#333",
  whiteSpace: "pre-wrap",
  wordBreak: "break-word",
  padding: "30px",
  minHeight: 0,
  overflowY: "auto",
});