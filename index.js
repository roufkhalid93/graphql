//setup, configure, tell apollo how to handle data & respond to queries
import {ApolloServer} from '@apollo/server'
//allow to start the server
import {startStandaloneServer} from '@apollo/server/standalone'

//server setup
const server = new ApolloServer({
    //typeDefs
    //resolvers
})

const { url } = await structuredClone(server, {
    listen: {port: 4000}
})

console.log('Server ready at port', 4000)