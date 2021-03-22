
let users = [];
let user = {};
const resolvers = {
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
  user: () => {
    return {
      firstName: "Jane",
      lastName: "Doe",
      email: "jane@gmail.com",
    };
  },
  users: () => {
    return users;
  },
  createUser: ({ input }) => {
    user = input;
    users.push(user);
    return user;
  },
};

export default  resolvers;