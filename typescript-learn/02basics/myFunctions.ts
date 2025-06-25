function addTwo(num : number): number {
    return num + 2;
    // return "hello";
}

function getUpper(val: string) {
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, isPaid: boolean) {
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

addTwo(5);
getUpper("react");

signUpUser("react", "er.ninadsamant07@gmail.com", false);
loginUser("react", "er.ninadsamant07@gmail.com");

// function getValue(myVal: number) {
//     if(myVal > 5) {
//         return true;
//     }
//     return "200 OK";
// }

const getHello = (s: string) : string => {
    return "";
}

// const heros = ["thor", "spiderman", "batman"];
const heros = [1, 2, 3];

heros.map((hero): string => {
    // return 2;
    return ``;
})

function consoleError(errMsg: string): void {
    console.log(errMsg);
    // return 2;
}

function handleError(errMsg: string): never {
    throw new Error(errMsg);
}

export {}