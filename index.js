import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import schema from './schema'
import root from './resolvers'

const app = express();

app.get('/', (req, res) => {

    return res.json({
        msg: "welcome tp graphql"
    })
})


app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(3000, () => {
    console.log("Express app is listening on port 3000")
})