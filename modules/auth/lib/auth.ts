import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

const users = [
  {
    id: "1",
    username: "admin",
    password: "admin123",
    name: "Admin User",
  },
  {
    id: "2",
    username: "john",
    password: "password123",
    name: "John Doe",
  },
];

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 30,
  },
  providers: [
    Credentials({
      credentials: {
        username: {},
        password: {},
      },

      authorize: async (credentials) => {
        const user = users.find(
          (user) =>
            user.username === credentials.username &&
            user.password === credentials.password
        );

        if (!user) {
          throw new Error("Invalid credentials.");
        }

        return {
          id: user.id,
          name: user.name,
          username: user.username,
        };
      },
    }),
  ],
});