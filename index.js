//setup, configure, tell apollo how to handle data & respond to queries
import {ApolloServer} from '@apollo/server'
//allow to start the server
import {startStandaloneServer} from '@apollo/server/standalone'

//db
import db from './_db.js'

//types
import { typeDefs } from './schema.js'

const resolvers = {
    Query: {
        games() {
            return db.games
        },
        authors(){
            return db.authors
        },
        reviews(){
            return db.reviews
        }
    }
}

//server setup
const server = new ApolloServer({
    typeDefs,
    resolvers
})

const { url } = await startStandaloneServer(server, {
    listen: {port: 4000}
})

console.log(`Server ready at port', ${url}`)