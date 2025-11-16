import { style } from "@vanilla-extract/css";
import { screen, theme } from "@/styles";

export const container = style({
  width: "100%",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#0B160D",
});

export const header = style({
  width: "100%",
  height: "70px",
  padding: "0 40px",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
});

export const contentSection = style({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  color: "#FFFFFF",
  textAlign: "center",
  padding: "60px 40px 80px",
  gap: "150px",
});

export const titleWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "40px",
});

export const mainTitle = style({
  fontSize: "32px",
  fontWeight: "700",
  lineHeight: "1.5",
  margin: 0,

  "@media": {
    [`screen and (max-width: ${screen.phone})`]: {
      fontSize: "24px",
    },
  },
});

export const icon = style({
  "@media": {
    [`screen and (max-width: ${screen.phone})`]: {
      display: "none",
    },
  },
});

export const aboutWrapper = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "32px",
});

export const sectionTitle = style({
  fontSize: "28px",
  fontWeight: "600",
  margin: 0,

  "@media": {
    [`screen and (max-width: ${screen.phone})`]: {
      fontSize: "24px",
    },
  },
});

export const processFlow = style({
  display: "flex",
  alignItems: "center",
  gap: "16px",
  flexWrap: "wrap",
  justifyContent: "center",
});

export const processBox = style({
  padding: "14px 24px",
  fontSize: "16px",
  fontWeight: "600",
  whiteSpace: "nowrap",
});

export const arrow = style({
  fontSize: "20px",
  color: "rgba(255, 255, 255, 0.4)",
  fontWeight: "600",
});

export const description = style({
  fontSize: "15px",
  color: `${theme.description}`,
  lineHeight: "1.7",
  margin: 0,
});

export const ctaSection = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
});

export const ctaTitle = style({
  fontSize: "28px",
  fontWeight: "600",
  margin: 0,

  "@media": {
    [`screen and (max-width: ${screen.phone})`]: {
      fontSize: "24px",
    },
  },
});

export const ctaDescription = style({
  fontSize: "15px",
  color: `${theme.description}`,
  margin: 0,
  lineHeight: "1.6",
});

export const ctaButton = style({
  marginTop: "8px",
  padding: "16px 56px",
  backgroundColor: "#6B9F5D",
  color: "#FFFFFF",
  border: "none",
  borderRadius: "30px",
  fontSize: "17px",
  fontWeight: "600",
  cursor: "pointer",
  transition: "all 0.3s ease",
  boxShadow: "0 4px 12px rgba(107, 159, 93, 0.3)",
  ":hover": {
    backgroundColor: "#5A8A4D",
    transform: "translateY(-2px)",
    boxShadow: "0 6px 16px rgba(107, 159, 93, 0.4)",
  },
});

export const footer = style({
  width: "100%",
  backgroundColor: "rgba(255, 255, 255, 0.03)",
  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
  padding: "50px 0",
  marginTop: "auto",
});

export const footerContent = style({
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "0 40px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "60px",
  flexWrap: "wrap",
});

export const footerLeft = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});

export const footerCopyright = style({
  fontSize: "13px",
  color: "rgba(255, 255, 255, 0.4)",
  margin: 0,
});

export const footerRight = style({
  display: "flex",
  gap: "60px",
  flexWrap: "wrap",
});

export const footerColumn = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  minWidth: "120px",
});

export const footerColumnTitle = style({
  fontSize: "15px",
  fontWeight: "600",
  marginBottom: "8px",
  color: "#FFFFFF",
});

export const footerLink = style({
  fontSize: "14px",
  color: "rgba(255, 255, 255, 0.6)",
  transition: "color 0.2s",
  ":hover": {
    color: "#FFFFFF",
    textDecoration: "underline",
  },
});
