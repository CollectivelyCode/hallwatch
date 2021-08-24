import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  // Configure one or more authentication providers
    providers: [
        Providers.Google({
            clientId: process.env.AUTH_GOOGLE_CLIENT_ID,
            clientSecret: process.env.AUTH_GOOGLE_CLIENT_SECRET

        }),
        Providers.GitHub(
            {
                clientId: process.env.AUTH_GITHUB_CLIENT_ID,
                clientSecret: process.env.AUTH_GITHUB_CLIENT_SECRET
            }

        )


    // ...add more providers here
    ],

    pages: {
        signIn: './../auth/login',
    },
    database: process.env.DB_URL + process.env.DB_NAME
})

