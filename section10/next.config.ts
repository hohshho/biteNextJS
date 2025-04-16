import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    typedRoutes: false,  // ← 이걸 통해 타입 충돌 완화 가능
    // fetch instrumentation은 아직 공식 도큐먼트엔 없음
  },
  logging: {
    fetches: {
      fullUrl: true,
    }
  },
  images: {
    domains: ["shopping-phinf.pstatic.net"]
  }
};

export default nextConfig;
