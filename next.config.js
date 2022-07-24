/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
    enabled: process.env.ANALYZE === "true",
})

module.exports = withBundleAnalyzer({
    eslint: {
        dirs: ["."],
    },
    poweredByHeader: false,
    trailingSlash: true,
    basePath: "",
    // The starter code load resources from `public` folder with `router.basePath` in React components.
    // So, the source code is "basePath-ready".
    // You can remove `basePath` if you don't need it.
    reactStrictMode: true,
    // I have to redirect all the paths here in dev so I don't get stupid cors errors
    rewrites: async () => {
        return process.env.NODE_ENV === "development"
            ? [
                  {
                      source: "/:path*",
                      destination: "http://localhost:8000/:path*",
                  },
              ]
            : []
    },
})
