
let users = [];
let user = {};
export const resolvers = {
  Query: {
    item: () => {
      return {
        id: "123123",
        text: "Hacker News Item",
        timeISO: "2 pm tuesday",
        time: 132213,
        title: "Graphql learning",
        deleted: false,
      };
    },
    getUser: (_, { id }, context, info) => {
      let user = users.find((u) => u.id === id);
      console.log(id, user);
      return user;
    },
    users: () => {
      return users;
    },
  },
  Mutation: {
      createUser: (_, { input }, context, info) => {
     console.log('info', info)
      user = input;
      users.push(user);
      return user;
    },
  },
};

