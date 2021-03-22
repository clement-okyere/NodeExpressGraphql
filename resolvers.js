
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
    getUser: ({ id }) => {
      let user = users.find(u => u.id === id);
      console.log(id, user)
      return user;
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