import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Link",
            value:
              "<https://fonts.cdnfonts.com/css/sf-pro-display>; rel=preload; as=style",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
