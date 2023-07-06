    // start with strings, numbers and booleans
    let str="hello world";
    let num=12;
    let booleans=true;
    console.log(str,"\n", num,"\n", booleans);

    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
    const team=players;

    // You might think we can just do something like this:
    
    team[3]="Lux";
    
    // however what happens when we update that array?
    
    // now here is the problem!
    console.log(team, players);
    
    // oh no - we have edited the original array too!
    
    // Why? It's because that is an array reference, not an array copy. They both point to the same array!
    
    // So, how do we fix this? We take a copy instead!
    
    // one way
    
    // Using slice function
    const team2=players.slice();
    
    
    team2[3]="Rohan";
    console.log(team2, players);
    
    
    // or create a new array and concat the old one in
    // Using concattination function
    const team3=[].concat(players);
    team3[3]="Mohan";
    console.log(team3, players);
    
    // or use the new ES6 Spread
    const team4=[...players];
    team4[3]="Rakesh";
    console.log(team4, players);


    const team5=Array.from(players);
    team5[3]="Mahesh";
    console.log(team5, players);

    // now when we update it, the original one isn't changed

    // The same thing goes for objects, let's say we have a person object

    // with Objects
    const person = {
      name: 'Gagan',
      age: 78
    };

    // and think we make a copy:
    const people=person;
    people.name="John";
    people.age=56;
    console.log(people, person);

    
    // how do we take a copy instead?
    const people2=Object.assign({},person);
    people2.name="Robert";
    people2.age=67;
    console.log(people2, person);
    
    
    
    // We will hopefully soon see the object ...spread
    const people3={...person}; 
    people3.name="Alice";
    people3.age=23;
    console.log(people3, person);
  
    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
     