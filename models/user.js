import mongoose from "mongoose"

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String
  },
  email: {
    type: String,
    },
    items: [{
        ref: 'item',
        type: mongoose.Schema.Types.ObjectId,
        required: true
  }]
});

export default mongoose.model('user', userSchema)