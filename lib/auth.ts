import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const NEXT_AUTH_CONFIG = {
    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? ""
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ""
        },
        ),
        // CredentialsProvider({
        //   name: 'Credentials',
        //   credentials: {
        //     username: { label: 'email', type: 'text', placeholder: '' },
        //     password: { label: 'password', type: 'password', placeholder: '' },
        //   },
        //     async authorize(credentials: any) {
            
        //     return {
        //           id: "user1",
        //           name: "asd",
        //           userId: "asd",
        //           email: "ramdomEmail"
        //       };
        //   },
        // }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        jwt: async ({ user, token }: any) => {
        if (user) {
            token.uid = user.id;
        }
        return token;
        },
        session: ({ session, token, user }: any) => {
          if (session.user) {
              session.user.id = token.uid
          }
          return session
      },
      signIn: async ({user, account, profile}:any)=> {
        // Check if the user is signing up for the first time
        const existingUser = await prisma.user.findUnique({
            where: { email: user.email },
        });
        if (!existingUser) {
            console.log("Creating new user: "+user.name)
            await prisma.user.create({
                data: {
                    email: user.email,
                    password: "", // Add the password property
                    name: user.name, // Add the name property
                },
            });
        } else{
            console.log("User already exists: "+user.name)
        }
        return user
    },

    },
    pages: {
        signIn: '/signin',
    },
  }