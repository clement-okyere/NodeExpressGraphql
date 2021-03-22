import Sequelize from 'sequelize'
const sequelize = new Sequelize('database', null, null, {
    dialect: 'sqlite',
    storage: './sql_db.sqlite'
})

const post = sequelize.define("post", {
  title: {
    type: Sequelize.STRING,
  },
  text: {
    type: Sequelize.STRING,
  },
});

post.sync({ force: true })
    .then(() => {
        post.create({
            title: 'New Graphql Course',
            text: 'asdfghjklkjhtrtyuiokj'
    })  
    })

export default post;