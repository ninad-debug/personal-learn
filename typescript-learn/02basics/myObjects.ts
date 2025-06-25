// const user = {
//     name: "React",
//     email: "er.react@gmail.com",
//     isActive: true,
// }

// function createUser({name: string, isPaid: boolean}){}

// let newUser = {
//     name: user.name,
//     isPaid: user.isActive,
//     email: user.email
// }

// createUser(newUser);

// function createCourse(): {name: string, price: number} {
//     return {name: "React", price: 399};
// }

type User = {
    name: string;
    email: string;
    isActive: boolean;
}

function createUser(user: User): User {
    return user;
}

createUser({
    name: "",
    email: "",
    isActive: false,
})

export {}