/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	experimental: {
		appDir: true,
	},
	async redirects() {
		return [
			{
				source: "/discord",
				destination: "https://discord.gg/EZWxGRv4Eh",
				permanent: false,
			},
		];
	},
};
