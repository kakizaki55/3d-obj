import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

console.log('process.env.GITHUB_CLIENT_ID', process.env.GITHUB_CLIENT_ID)

export default NextAuth({
  providers: [
      GithubProvider({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
      }),
      //add more providers as requied
  ]
})