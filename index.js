//setup, configure, tell apollo how to handle data & respond to queries
import {ApolloServer} from '@apollo/server'
//allow to start the server
import {startStandaloneServer} from '@apollo/server/standalone'

//types
import { typeDefs } from './schema'



//server setup
const server = new ApolloServer({
    //typeDefs
    typeDefs,
    //resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: {port: 4000}
})

console.log('Server ready at port', 4000)