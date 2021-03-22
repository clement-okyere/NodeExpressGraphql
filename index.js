import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import schema from './schema'
const mongoose = require('mongoose')


const app = express();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/grpahqldb')
    .then(() => console.log('connected to mongodb successfully'))
    .catch((err) => {
        console.log('error', err)
    })

    
app.get('/', (req, res) => {

    return res.json({
        msg: "welcome tp graphql"
    })
})


app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  })
);

app.listen(3000, () => {
    console.log("Express app is listening on port 3000")
})