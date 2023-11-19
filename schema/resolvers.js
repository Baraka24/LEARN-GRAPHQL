const { argsToArgsConfig } = require("graphql/type/definition");
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
        },
    },
    Mutation: {
        createUser: (parent, args) => {
            const user = args.input;
            //console.log(user);
            const lastId = UserList[UserList.length-1].id;
            user.id = lastId +1;
            UserList.push(user);
            return user;
        },
        updateUser: (parent, args) => {
            /* const id = args.input.id;
            const newUsername = args.input.newUsername; */
            const {id, newUsername} = args.input;
            let userUpdated;
            UserList.forEach((user) => {
                if(user.id === id) {
                    user.username = user.newUsername;
                    userUpdated = user;
                }
            });
            return userUpdated
        }
    }
};
module.exports = {resolvers};