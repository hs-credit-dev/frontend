/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: '/',
				destination: '/login',
				permanent: true,
			},
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'hscredit-statics.s3.amazonaws.com',
				pathname: '/media/credit/**', // Adjust the pathname based on your requirements
			},
		],
	},
};

export default nextConfig;
