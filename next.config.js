const withNextIntl = require("next-intl/plugin")("./i18n.ts")

module.exports = withNextIntl({
	async redirects() {
		return [
			{
				source: "/",
				destination: "/en/portfolio",
				permanent: true,
			},
			{
				source: "/:lang(en|ru|ua)",
				destination: "/:lang/portfolio",
				permanent: true,
			},
		]
	},
})
