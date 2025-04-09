const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  assetPrefix: isProd ? '/Almer-furniture/' : '',
  basePath: isProd ? '/Almer-furniture' : '',
};

export default nextConfig;