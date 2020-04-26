// object literals

/*const contacts = [
    {names: 'Parent', numbers: 9858575512},
    {names: 'Mother', numbers: 8487854567} 
];

console.log(contacts);*/

/*let user = {
    name: 'Jhoedy',
    age: 20,
    email: 'jhoedy@hotmail.com',
    location: 'Mexico',
    contacts: [
        {names: 'Parent', numbers: 9858575512},
        {names: 'Mother', numbers: 8487854567} 
    ],
    login(){
        console.log('the user logged in');
    },
    logout(){
        console.log('the user logged out');
    },
    logContacts(){
        //console.log(this.contacts);
         console.log('this user has written the following contacts:');
        this.contacts.forEach(contact => {
            console.log(contact.names, contact.numbers);
        });
    }

    logContacts: () => {
        console.log(this);
    }
};*/

/*console.log(user);
console.log(user.name);

//user.age = 35;
console.log(user.age);

console.log(user['location']);
user['name'] = 'Sheyla';
console.log(user['name']);

console.log(typeof user);*/

/*user.login();
user.logout();

const name = 'Jhoedy';
name.toUpperCase();*/

/*user.logContacts();
console.log(this);*/

// Math object

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const example = 15.8;
console.log(Math.round(example));
console.log(Math.floor(example));
console.log(Math.ceil(example));
console.log(Math.trunc(example));

// random numbers

const random = Math.random();

console.log(random);
console.log(Math.round(random*100));

// primitive values

let one = 50;
let two = one;

console.log(`one: ${one}`, `two: ${two}`);

one = 100;
console.log(`one: ${one}`, `two: ${two}`);

// reference values

const userOne = { name: 'Sam', age: 24};
const userTwo = userOne;

console.log(userOne, userTwo);

userOne.age = 30;
console.log(userOne, userTwo);