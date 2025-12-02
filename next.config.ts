import { createVanillaExtractPlugin } from "@vanilla-extract/next-plugin";
import withPWAInit from "@ducanh2912/next-pwa";

const withVanillaExtract = createVanillaExtractPlugin({
  identifiers: ({ hash }) => `dedego_${hash}`,
});

const withPWA = withPWAInit({
  dest: "public",
  register: true,
  disable: process.env.NODE_ENV === "development",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
};

export default withVanillaExtract(withPWA(nextConfig));