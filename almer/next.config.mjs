/** @type {import('next').NextConfig} */
const nextConfig = {};

const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  assetPrefix: isProd ? '/Almer-furniture/' : '',
  basePath: isProd ? '/Almer-furniture' : '',
  output: 'export', // very important for static export
};

export default nextConfig;
