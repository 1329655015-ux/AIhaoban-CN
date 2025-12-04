/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    esmExternals: false, // 修复 jest-worker
  },
  eslint: {
    ignoreDuringBuilds: true, // 忽略 ESLint
  },
  typescript: {
    ignoreBuildErrors: true, // 忽略 TS
  },
  output: 'export', // 静态导出
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
