/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: 'export',
    basePath: isProd ? '/MD_Portfolio' : '',
    assetPrefix: isProd ? '/MD_Portfolio' : '',
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
