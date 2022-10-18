```js
{
    entities: {
        users: {
            1: {
                id: 1,
                name: "someone",
                email: "someone@gmail.com",
            },
            2: {
                id: 2,
                name: "other-guy",
                email: "otherguy@gmail.com",
            },
            3: {
                id: 3,
                name: "someguy",
                email: "someguy@gmail.com",
            }
        },
        comments: {
            1: {
                id: 1,
                user_id: 1,
                product_id: 1,
                comment: "real good tv, very clear."
            },
            2: {
                id: 2,
                user_id: 2,
                product_id: 2,
                comment: "this is the SAME AS IPHONE 14 !!"
            },
            3: {
                id: 3,
                user_id: 3,
                product_id: 3,
                comment: "BUT IT NEEDS BATTERY"
            }
        },
        products: {
            1: {
                id: 1,
                name: "Smart tv",
                price: "130",
                description: "some tv that is smart."
            },
            2: {
                id: 2,
                name: "iPhone 15",
                price: "800",
                description: "futuristic iphone."
            },
            3: {
                id: 3,
                name: "Bluetooth speaker",
                price: "80",
                description: "speaker doesn't need cables"
            }
        },
        carts: {
            1: {
                id: 1,
                user_id: 2,
                product_id: 1,
                quantities: 1,
            },
            2: {
                id: 2,
                user_id: 1,
                product_id: 2,
                quantities: 1,
            },
            3: {
                id: 3,
                user_id: 5,
                product_id: 3,
                quantities: 1,
            }
        },
        reviews: {
            1: {
                id: 1,
                user_id: 1,
                product_id: 1,
                comment_id: 1
            },
            2: {
                id: 2,
                user_id: 2,
                product_id: 3,
                comment_id: 2
            },
            3: {
                id: 3,
                user_id: 3,
                product_id: 4,
                comment_id: 3
            },
        },

    },
    ui: {
        modalOpen: true
    },
    session: { 
        currentUser: 2
    },
    errors: {
        userError: ["Incorrect username/password combination"],
    }
}
```