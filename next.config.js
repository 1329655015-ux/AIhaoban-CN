/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // 关键：静态导出，兼容 GitHub Pages
  images: {
    unoptimized: true, // 图片优化关闭，避免构建坑
  },
  trailingSlash: true, // 路由兼容
  basePath: '/AIhaoban-CN', // 仓库名作为基路径
  assetPrefix: '/AIhaoban-CN', // 资产路径
};

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true
  },
  trailingSlash: true,
  ignoreBuildErrors: true,
};

module.exports = nextConfig;
