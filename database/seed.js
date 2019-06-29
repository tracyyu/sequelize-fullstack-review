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
        "commenter_username": "John"
    },
    {
        "id": 1,
        "content": "I don't understand JS",
        "commenter_username": "Adam"
    },
    {
        "id": 2,
        "content": "Hungry right now!, feed me!",
        "commenter_username": "John"
    },
    {
        "id": 3,
        "content": "WHY ME!!!",
        "commenter_username": "Charlie"
    },
    {
        "id": 4,
        "content": "How's life going?",
        "commenter_username": "John"
    },
    {
        "id": 5,
        "content": "Bees Bees Bees... Classes, classes, classes",
        "commenter_username": "Lily"
    },
    {
        "id": 6,
        "content": "Wow, that's not nice.",
        "commenter_username": "Kate"
    },
    {
        "id": 7,
        "content": "Nobody is on help desk",
        "commenter_username": "Charlie"
    },
    {
        "id": 8,
        "content": "Who are you???",
        "commenter_username": "Charlie"
    },
    {
        "id": 9,
        "content": "What do you want from me?",
        "commenter_username": "John"
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
    });

Model.Comments
    .bulkCreate(comments)
    .then( result => {
        if(result[1] === false){
            console.log('Already existed in the database');
        }else{
            console.log('Successfully added to database');
        }
    });