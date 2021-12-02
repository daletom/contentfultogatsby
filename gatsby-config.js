module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "contentfultogatsby",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "HF0e0AJcjmn6fUVPUweNFPGCIRZbrg2krhcZxX6ENBE",
        spaceId: "",
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
