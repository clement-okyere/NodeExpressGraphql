
import Item from "./models/item";
import User from "./models/user";

let users = [];
let user = {};
export const resolvers = {
  Query: {
    getItem: async (_, { id }) => {
      const item = await Item.findOne({ _id: id });
      return item;
    },
    getUser:async (_, { id }) => {
        let user = await User.findById(id).populate("items");
      return user;
    },
    getUsers:async () => {
      return await User.find().populate("items")
    },
  },
  Mutation: {
    createUser: async (_, { input }) => {
      const user = new User({
        ...input,
      });
      console.log("user", user);
      await user.save();
      return await User.findOne({ _id: user.id }).populate("items");
    },
    updateUser: async (_, { input }) => {
        const result = await User.findOneAndUpdate({
         _id: input.id
        }, input, { new: true })
        return result;
      },
      deleteUser: async (_, { id }) => {
        return  await User.findOneAndDelete(id);
    },
    createItem: async (_, { input }) => {
      const hackerNews = new Item({
        ...input,
      });
      await hackerNews.save();
      return hackerNews;
    },
  },
};

