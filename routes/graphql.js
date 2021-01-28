const express = require('express');
const router = express.Router();
const { graphqlHTTP } = require('express-graphql');

const { auth } = require('../middleware/auth/auth');
const { schema } = require('./graphql/schema');

router.post('/graphql', auth, graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

module.exports = router;