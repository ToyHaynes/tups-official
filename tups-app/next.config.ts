import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Apple requires the Universal Links file to be served as JSON;
        // it has no extension so Next can't infer the content type.
        source: "/.well-known/apple-app-site-association",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
    ];
  },
  async rewrites() {
    return [
      // Preset share links use /p (https://www.tupstheapp.com/p#d=...);
      // the fallback page for users without the app lives in public/p.html.
      { source: "/p", destination: "/p.html" },
    ];
  },
};

export default nextConfig;
