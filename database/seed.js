const Model = require('./modelSequelize');

const users = [
    {
        "id": 0,
        "username": "John"
    },
    {
        "id": 1,
        "username": "Adam"
    },
    {
        "id": 2,
        "username": "Charlie"
    },
    {
        "id": 3,
        "username": "Lily"
    },
    {
        "id": 4,
        "username": "Kate"
    }
];

const comments = [
    {
        "id": 0,
        "content": "Hi Charlie! Wassup?",
        "userId": 0
    },
    {
        "id": 1,
        "content": "I don't understand JS",
        "userId": 1
    },
    {
        "id": 2,
        "content": "Hungry right now!, feed me!",
        "userId": 0
    },
    {
        "id": 3,
        "content": "WHY ME!!!",
        "userId": 2
    },
    {
        "id": 4,
        "content": "How's life going?",
        "userId": 0
    },
    {
        "id": 5,
        "content": "Bees Bees Bees... Classes, classes, classes",
        "userId": 3
    },
    {
        "id": 6,
        "content": "Wow, that's not nice.",
        "userId": 4
    },
    {
        "id": 7,
        "content": "Nobody is on help desk",
        "userId": 2
    },
    {
        "id": 8,
        "content": "Who are you???",
        "userId": 2
    },
    {
        "id": 9,
        "content": "What do you want from me?",
        "userId": 0
    },
];


Model.Users
    .bulkCreate(users)
    .then( result => {
        if(result[1] === false){
            console.log('Already existed in the database');
        }else{
            console.log('Successfully added to database');
        }
    })
    .catch( err => console.error('Issue seeding Users Table', err));

Model.Comments
    .bulkCreate(comments)
    .then( result => {
        if(result[1] === false){
            console.log('Already existed in the database');
        }else{
            console.log('Successfully added to database');
        }
    })
    .catch( err => console.error('Issue seeding Comments Table', err));