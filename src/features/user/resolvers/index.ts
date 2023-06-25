export const userResolver = {
  Query: {
    hello: (a: String) => `Hello, World! ${a}`,
  },

  Mutation: {
    updateName: (_: any, a: String) => {
      console.log("sssssssssssssssss", a);
      return `It is Update Mutation`;
    },
  },
};
