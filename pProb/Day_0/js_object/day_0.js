// Problem 1:
// Create an object representing a car with properties like make, model, and year.Write a function that takes the car object as an argument and displays the car's details.

// -------------------------Soln.------------------------------------
// //creating a object which name is car
// const car = {
//     company: 'TATA',
//     model: 'SAFARI',
//     year: '2020'
// }

// //display function
// function fnc(arg){
//     console.log(arg);//we print the car object
//     console.log(`The car is of ${car.company} company and its model name is ${car.model} of year ${car.year}`);
// }

// // calling display func.
// fnc(car);


// *****************************************************************************

// Problem 2:
// Create an object representing a student with properties like name, age, and grade.Write a function that takes the student object as an argument and checks if the student is eligible for graduation based on their grade.
// -------------------------Soln.------------------------------------
// // creating object and checking its grade
// const student = {
//     name: 'Piyush',
//     age: '22',
//     grade:15
// }
// if (student.grade > 35) {
//     console.log(`Pass: Jaao naacho`);
// }
// else {
//     console.log(`Fail: dub mro`);
// }




// *******************************************************************************

//     Problem 3:
// Create an object representing a shopping cart with properties like items and total.Write functions to add items to the cart, remove items from the cart, and calculate the total price of the items in the cart.
// // -------------------------Soln.------------------------------------
// // creating object
// let shoppingCart = {
//     items: [],
//     total: 0,

//     add(item) {
//         this.items.push(item);
//     },
//     remove(item) {
//         const index = this.items.indexOf(item);
//         if (index != -1) {
//             this.items.splice(index, 1);
//         }
//     },
//     calculateTotal() {
//         this.total = this.items.reduce((sum, item) => sum + item.price, 0);
//     }
// }

// // items to be inserted
// const item1 = { name: "Product 1", price: 10 };
// const item2 = { name: "Product 2", price: 20 };
// const item3 = { name: "Product 3", price: 30 };
// const item4 = { name: "Product 4", price: 40 };

// // calling add method
// shoppingCart.add(item1);
// shoppingCart.add(item2);
// shoppingCart.add(item3);
// shoppingCart.add(item4);
// console.log(shoppingCart.items);
// shoppingCart.calculateTotal()
// console.log(shoppingCart.total);

// // calling remove method
// shoppingCart.remove(item4);
// console.log(shoppingCart.items);

// // calling calculateTotal method
// shoppingCart.calculateTotal()
// console.log(shoppingCart.total);

// *******************************************************************************

//     Problem 4:
// Create an object representing a bank account with properties like account number and balance.Write functions to deposit money into the account, withdraw money from the account, and display the account balance.
// -------------------------Soln.------------------------------------
// // creating object
// const account = {
//     ac: 123456,
//     balance: 100
// }

// //func. to deposit
// function deposit(amnt) {
//     account.balance += amnt;
//     console.log(`You deposit ${amnt}, now your balance is ${account.balance}`)
// }

// //func. to withdrawl
// function withdrawl(amnt) {
//     account.balance -= amnt;
//     console.log(`You withdrawl ${amnt}, now your balance is ${account.balance}`)

// }

// //calling withdrwal and deposit func.
// deposit(1000);
// withdrawl(500);




// *******************************************************************************

//     Problem 5:
// Create an object representing a recipe with properties like name, ingredients, and instructions.Write a function that takes the recipe object as an argument and displays the recipe details, including the list of ingredients and step - by - step instructions.
// -------------------------Soln.------------------------------------
// // object creation
// let objj = {
//     recipe: [],

//     add(item) {
//         this.recipe.push(item);
//     }

// }

// // items to be inserted in recipe
// const item1 = {name: "samosa", incridents: "aalu-masala, maida ka aata, refine oil", instruction: "Prepare masala, mix the maida, refine m chaan do, serve it with sabji"  };
// const item2 = { name: "Pettiz", incridents: "aalu-masala, besan ka lep, refine oil", instruction: "Prepare masala, mix it with besan, refine m chaan do, serve it with chatni" };
// const item3 = { name: "Litti", incridents: "sattu-masala, maida ka aata, refine oil", instruction: "Prepare masala, mix the maida, refine m chaan do, serve it with sabji" };
// // adding item into recipe
// objj.add(item1);
// objj.add(item2);
// objj.add(item3);

// // function to display items in recipee
// function display(arg) {
//     for (let i = 0; i < 3; i++){
//         console.log(`Food name:- ${objj.recipe[i].name}
//         Incridents:- ${objj.recipe[i].incridents}
//         Instructions:-
//                 ${objj.recipe[i].instruction} `);
//         console.log();
//     }
// }

// // calling display function
// display(objj);


// *******************************************************************************

//     Problem 6:
// Create an object representing a movie with properties like title, genre, and rating.Write a function that takes an array of movie objects and filters the movies based on a given genre.
// -------------------------Soln.------------------------------------
// // creating object
// const objj = {
//     movie: [],
//     add(item) {
//         this.movie.push(item);
//     }
// }

// // movies collection
// const m1 = { name: "DDLJ", Genere: "Romantic", rating: "4 Star" };
// const m2 = { name: "Dhoom-2", Genere: "Action", rating: "4 Star" };
// const m3 = { name: "Gangajal", Genere: "Reality", rating: "5 Star" };
// const m4 = { name: "3-Idiot", Genere: "All genere", rating: "5 Star" };
// const m5 = { name: "Desh Drohi", Genere: "Super flop", rating: "-5 Star" };

// // adding movies collection in movie section of objj object
// objj.add(m1);
// objj.add(m2);
// objj.add(m3);
// objj.add(m4);
// objj.add(m5);

// let flag = 0;

// // filter function which filter the movie on your mood==genere
// function filt(mood) {
//     for (let i = 0; i < 5; i++){
//         if (objj.movie[i].Genere == mood) {
//             console.log(`The movies present for ${mood} genere are
//             ${objj.movie[i].name} and its rating is ${objj.movie[i].rating}`);
//             flag=1
//         }
//     }
//     if (flag == 0) {
//         console.log(`No such movie present now, We are sorry`)
//     }
// }

// // calling filter function
// filt("Action");


// *******************************************************************************
//     Problem 7:
// Create an object representing a playlist with properties like name and songs.Write functions to add songs to the playlist, remove songs from the playlist, and display the list of songs in the playlist.
// -------------------------Soln.------------------------------------
// // creating object and contA and contR are used to track number songs present in playlist
// let contR = 0;
// let contA = 0;
// const objj = {
//     songs: [],
//     add(item) {
//         this.songs.push(item);
//         contA++;
//     },
//     remove(item) {
//         const index = this.songs.indexOf(item);
//         if (index != -1) {
//             this.songs.splice(index, 1);
//             contR++;
//         }
//     }
// }

// // songs to be added in playlist
// const s1 = { song: 'Samjhawa', singer: 'Arijit Singh' };
// const s2 = { song: 'Tere bin nai lagda', singer: 'Rahat Fate Ali Khan' };
// const s3 = { song: 'Tumko Paaya Hoon to', singer: 'KK' };
// const s4 = { song: 'Aaaj ki Party', singer: 'Mika Singh' };
// const s5 = { song: 'Mere Sapno ki Rani', singer: 'Ever Green Ashok Daaa' };

// // display playlist
// function disp() {
//     for (let i = 0; i < (contA-contR); i++){
//         console.log(` Song name:- ${objj.songs[i].song}  and the Singer name is:- ${objj.songs[i].singer}
//     `);
//     }
// }

// // adding song in song list
// objj.add(s1);
// objj.add(s2);
// objj.add(s3);
// objj.add(s4);
// objj.add(s5);

// // calling display fuc.
// disp();

// // removing song frpm playlist
// objj.remove(s4);

// // calling display fuc.
// disp();




// *******************************************************************************
//     Problem 8:
// Create an object representing a user with properties like name, email, and age.Write a function that takes a user object as an argument and checks if the user is an adult based on their age.
// -------------------------Soln.------------------------------------
// // ocreating object
// const user= {
//     name: [],
//     add(item) {
//         this.name.push(item);
//     }
// }

// // student details
// const stud1 = { name: 'Piyush', email: 'pk@g.c', age: 28 }

// // adding student details in object
// user.add(stud1);

// // function to check user is valid or not
// function check() {
//     if (user.name[0].age > 17) {
//         console.log(`User is adult`);
//     }
//     else {
//         console.log(`User is teenager`);
//     }
// }

// // calling check func.
// check(user);





// *******************************************************************************
//     Problem 9:
// Create an object representing a restaurant with properties like name, menu, and ratings.Write a function that takes a restaurant object as an argument and displays the restaurant details, including the menu items and average rating.
// -------------------------Soln.------------------------------------
// // creating object and contA and contR are used to track number of restro
// let contR = 0;
// let contA = 0;
// const objj = {
//     restro: [],
//     add(item) {
//         this.restro.push(item);
//         contA++;
//     },
//     remove(item) {
//         const index = this.restro.indexOf(item);
//         if (index != -1) {
//             this.restro.splice(index, 1);
//             contR++;
//         }
//     }
// }

// // restro to be added in playlist
// const r1 = { restro: 'Pal Restro', Menu: 'Samosa, Dosa, Idli', Rating:'3 star' };
// const r2 = { restro: 'Swad', Menu: 'Chowmin, Momo, Manchurian', Rating:'2 star' };

// // display playlist
// function disp() {
//     for (let i = 0; i < (contA-contR); i++){
//         console.log(` Restro name:- ${objj.restro[i].restro}  and the Menu items are:- ${objj.restro[i].Menu} and Rating of restro is:- ${objj.restro[i].Rating}
//     `);
//     }
// }

// // adding restro in restro list
// objj.add(r1);
// objj.add(r2);


// // calling display fuc.
// disp();

// // removing restro name
// objj.remove(r2);

// // calling display fuc.
// disp();


// *******************************************************************************
//     Problem 10:
// Create an object representing a calendar with properties like events and dates.Write functions to add events to the calendar, remove events from the calendar, and display the list of events on a specific date.
// -------------------------Soln.------------------------------------
// // creating calander object and countA and countR to keep track of number of events 
// let countA = 0;
// let countR = 0;
// const calander = {
//     events: [],
//     add(item) {
//         this.events.push(item);
//         countA++;
//     },
//     remove(item) {
//         const index = this.events.indexOf(item);
//         if (index != -1) {
//             this.events.splice(index, 1);
//             countR++;
//         }
//     }
// }

// // display events
// function disp() {
//     for (let i = 0; i < (countA - countR); i++) {
//         console.log(`Event:- ${calander.events[i].event} Date:-${calander.events[i].date}`)
//     }
// }

// // events to be added in calander
// const e1 = { event: 'Choti Birthday', date: '01 May' };
// const e2 = { event: 'Tutu Birthday', date: '25 March' };
// const e3 = { event: 'Ronit Birthday', date: '21 Feb' };
// const e4 = { event: 'Chandan Birthday', date: '14 Feb' };

// // adding events
// calander.add(e1);
// calander.add(e2);
// calander.add(e3);
// calander.add(e4);

// // calling display func.
// disp();

// // removing event
// calander.remove(e3);
// calander.remove(e4);

// // calling display func.
// disp();


// *******************************************************************************
