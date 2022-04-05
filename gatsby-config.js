module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "contentfultogatsby",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "9LddIvx0I6cIZdKCc3WIYGfd4ZdnG7AnREupxf536bs",
        spaceId: "mshe2wat8vkh",
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
