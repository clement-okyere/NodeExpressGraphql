
import Item from "./models/item";
import User from "./models/user";

let users = [];
let user = {};
export const resolvers = {
  Query: {
        getItem: async (_, { id }) => {
          const item = await Item.findOne({_id: id})
          return item;
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
      createUser: async (_, { input }) => {
       const user = new User({
          ...input
       })
          console.log('user', user)
          await user.save()
          return await User.findOne({_id: user.id}).populate('items')
      },
      createItem: async (_, { input }) => {
          const hackerNews = new Item({
             ...input
         })
          await hackerNews.save();
         return hackerNews;
      }
  }
};

