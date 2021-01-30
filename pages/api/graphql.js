const { GraphQLServer } = require("graphql-yoga");
require("dotenv").config();
const headers = {
    headers: { 
        "Authorization": `Bearer ${process.env.API_KEY}`,
    }
}

console.log(headers)

const typeDefs =`
    type Query {
        search(location: String): Business
        getReviews(id: String): Details
    }
    
    type Business {
        id: String
        name: String
        rating: Int
        review_count: Int
        display_phone: String
        image_url: String
    }

    type Details {
        id: String
        name: String
        rating: Int
        review_count: Int
        display_phone: String
        image_url: String
        price: String
    }
`;

const resolvers = {
    Query: {
        search: async (_, { location }) => {
            const resp = await fetch(
                `https://api.yelp.com/v3/businesses/search?location=${location}&limit=10`,
                headers
            )
            return resp.json();
        },
        getReviews: async (_, { id }) => {
            const resp = await fetch(`https://api.yelp.com/v3/businesses/${id}`, headers);
            return resp.json();
        }
    }
}

const server = new GraphQLServer({ typeDefs, resolvers });
server.start({port: 4000}, ({port}) => console.log(`Server is running on localhost:${port}`))