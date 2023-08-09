function favoriteAnimal(animal) {
    return animal + " is my favorite animal!"
  }
 
  console.log(favoriteAnimal('Goat'))


  const myArray = ["I", "love", "chocolate", "frogs"];
  const madeAString = myArray.join(" ");
  console.log(madeAString);
  // returns 'I love chocolate frogs'
  
  const madeAnotherString = myArray.join();
  console.log(madeAnotherString);
  // returns 'I,love,chocolate,frogs'