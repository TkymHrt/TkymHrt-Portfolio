module.exports = {
	ci: {
		collect: {
			url: ["http://localhost:3000/"],
			startServerCommand: "bun run start",
			startServerReadyPattern: "Ready",
			numberOfRuns: 3,
		},
		upload: {
			target: "lhci",
			serverBaseUrl: "https://lhci-server.tkymhrt.dpdns.org",
			token: process.env.LHCI_TOKEN,
		},
	},
};
