/** @type {import('next').NextConfig} */

const { withContentlayer } = require("next-contentlayer");

const config = {
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
			{
				source: "/kofi",
				destination: "https://ko-fi.com/jimiswaytooepic",
				permanent: false,
			},
		];
	},
};

module.exports = withContentlayer(config);
