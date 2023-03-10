/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
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
});
