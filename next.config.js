/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    REACT_APP_CLUSTER: process.env.REACT_APP_CLUSTER,
  },
  webpack5:true,
  webpack:(config)=>{
    config.resolve.fallback={fs:false,crypto:false,stream:false};
    return config;
  },
  images: {
    domains: [
      'kajabi-storefronts-production.kajabi-cdn.com',
      'upload.wikimedia.org',
      'i.ytimg.com',
      'source.unsplash.com',
      'angartwork.akamaized.net',
      "i.scdn.co",
      "i0.wp.com",
      "resources.tidal.com",
      "encrypted-tbn1.gstatic.com",
      "www.google.com",
      "www.dolby.com",
      "a10.gaanacdn.com",
      "media.npr.org",
      "media1.popsugar-assets.com",
    ],
  },
}

module.exports = nextConfig
