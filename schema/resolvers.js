const {UserList, MovieList} = require("../fake-data");
const _ = require("lodash");
const resolvers = {
    Query: {
        users: () => {
            return UserList;
        },
        user: (parent, args) => {
            const id = args.id;
            const user = _.find(UserList, {id: Number(id)});
            return user;
        },
        movies: () => {
            return MovieList;
        },
        movie: (parent, args) => {
            const description = args.description;
            const movie = _.find(MovieList, {description: description});
            return movie;
        }
    }
};
module.exports = {resolvers};