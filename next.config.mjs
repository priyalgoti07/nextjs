
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["picsum.photos"]
    },
    redirects: async () => {
        return [
            {
                source: '/seller',
                destination: '/produtcs',
                permanent: false
            }
        ]
    }
};

export default nextConfig;
