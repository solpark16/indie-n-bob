/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
<<<<<<< HEAD
        hostname: "stfauxrjudaltlmspsnv.supabase.co",
=======
        protocol: "https",
        hostname: "stfauxrjudaltlmspsnv.supabase.co",
        pathname: "/storage/v1/object/public/**",
>>>>>>> ac5dcaf3dcc805d9c324c003ba07f4dbcfbf09ab
      },
    ],
  },
};

export default nextConfig;
