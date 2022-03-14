const express = require ('express')
const expressGraphQL = require ('express-graphql').graphqlHTTP
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString,
    GraphQLList,
    GraphQLInt,
    GraphQLNonNull
} = require ('graphql')
const app = express()

const contractors = [
    {id: 1, name: 'Ajeet Singh', jobTitle: 'Java Developer', email: 'testt@gmail.com', image: 'https://loremflickr.com/320/240' },
    {id: 2, name: 'Rips Arora', jobTitle: 'Java Developer', email: 'testt@gmail.com', image: 'https://loremflickr.com/320/240' },
    {id: 3, name: 'Alex Mitch', jobTitle: 'Java Developer', email: 'testt@gmail.com', image: 'https://loremflickr.com/320/240' },
    {id: 4, name: 'Rony Grewal', jobTitle: 'Java Developer', email: 'testt@gmail.com', image: 'https://loremflickr.com/320/240' },
    {id: 5, name: 'Augustine', jobTitle: 'Java Developer', email: 'testt@gmail.com', image: 'https://loremflickr.com/320/240' },
    {id: 6, name: 'Dummy Singh', jobTitle: 'Java Developer', email: 'testt@gmail.com', image: 'https://loremflickr.com/320/240' },
    {id: 7, name: 'Xsdsd Sdidi', jobTitle: 'Java Developer', email: 'testt@gmail.com', image: 'https://loremflickr.com/320/240' },
    {id: 8, name: 'Don is don', jobTitle: 'Java Developer', email: 'testt@gmail.com', image: 'https://loremflickr.com/320/240' },
    {id: 9, name: 'Another name', jobTitle: 'Java Developer', email: 'testt@gmail.com', image: 'https://loremflickr.com/320/240' },
    {id: 10, name: 'Name 10', jobTitle: 'Java Developer', email: 'testt@gmail.com', image: 'https://loremflickr.com/320/240' },
]

const ContractorType = new GraphQLObjectType({
    name: 'Contractor',
    description: 'Contractor Object',
    fields: () => ({
        id: {type: new GraphQLNonNull(GraphQLInt)},
        name: {type: new GraphQLNonNull(GraphQLString)},
        jobTitle: {type: new GraphQLNonNull(GraphQLString)},
        email: {type: new GraphQLNonNull(GraphQLString)},
        image: {type: new GraphQLNonNull(GraphQLString)}
    })
})

const RootQueryType = new GraphQLObjectType({
    name: 'Query',
    description: 'Root Query',
    fields: () => ({
        contractors: {
            type: new GraphQLList(ContractorType),
            description: 'List of contractors',
            resolve: () => contractors
        }
    })
})

const RootMutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Root Mutation',
    fields: () => ({
        addContractor: {
            type: ContractorType,
            description: 'Add Contractors',
            args: {
                name: {type: new GraphQLNonNull(GraphQLString)},
                jobTitle: {type: new GraphQLNonNull(GraphQLString)},
                email: {type: new GraphQLNonNull(GraphQLString)},
                image: {type: new GraphQLNonNull(GraphQLString)}
            },
            resolve: (parent, args) => {
               const contractor = { id: contractors.length + 1, name: args.name, email: args.email, jobTitle: args.jobTitle, image: args.image }
               contractors.push(contractor);
               return contractor;
            }
        }
    })
})

const schema = new GraphQLSchema({
    query: RootQueryType,
    mutation: RootMutationType
})

app.use('/graphql', expressGraphQL({ 
    schema: schema,
    graphiql: true
}))

app.listen(5000., () => console.log("Server Running"))