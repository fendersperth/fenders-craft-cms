module.exports = {
    siteMetadata: {
        title: 'Fenders',
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-emotion`,
            options: {
                // Accepts all options defined by `babel-plugin-emotion` plugin.
            },
        },
        {
            resolve: 'gatsby-source-meetup',
            options: {
                apiURL: `https://api.meetup.com/Front-End-Web-Developers-Perth/events`,
            },
        },
    ],
}
