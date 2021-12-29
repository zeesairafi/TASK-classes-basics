/** Question 1: (1000 Points ⭐️)
 * 1. write a class of `Person`, give it the following properties
 * - firstName: String
 * - lastName: String
 * - gender: String
 * - birthYear: Number
 * - interests: [String]
 *
 * 2. Add the constructor that initializes all properties except the interests array should be empty by default
 *
 * 3. Add the following methods
 *
 *
 * + printName(), that print the persons full name  (first name and last name)
 * + calculateAge(currentYear), that takes a number of current year (i.e. 2021), and returns the age of the person
 * + addInterest(newInterest), that takes  a string of a new interest, and adds it to the interest array, and returns back the array
 * after you are done with the class, create at least 3 objects of type Actor of your favorite actors
 */
class Person {
  // continue the code here
  constructor(firstName, lastName, gender, birthYear, interests){
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.birthYear = birthYear;
    this.interests = [];
  }
  
  printpersoninfos = (username) =>{
    console.log(`first name and last name: ${this.firstName} ${this.lastName}`);
  }
  calculateAge = (currentYear) => {
    return currentYear - this.birthYear
  };
  addInterest = (newInterest) => {
    this.interests = [newInterest]
  }
}
  const person1 = new Person("Zainab", "AlSairafi", "femele", 18/12/1996, []);
  //person1.printpersoninfos();
  console.log(person1.calculateAge(2021));
  person1.addInterest(["Martial Arts"]);
  console.log(person1);


const Person2 = new Person("GrandMother");
const Person3 = new Person("GrandFother");
const Person4 = new Person("Razoog");

console.log(person2);
console.log(person3);
console.log(person4);



/** (Question 2): (15000 Points)
 * 1. Write a class `Movie`, give it the following properties
 * - title
 * duration (in minutes)
 * - genre
 * - [rating]le
 * - 
 *
 * 2. Add the constructor that initializes all properties except the rating array should be empty by default
 *
 * 3. and the following the methods
 * + rate(rating),
 *      That adds a new rating to the rating array.
 *      Rating should be restricted to be greater than 0 and less than 10.
 *      This function will be used to make a single rating for the movie.
 * + averageRating(),
 *      That calculates the average of the rating array.
 *      if rating array includes the following data for example: [9, 9, 10, 10], then the averageRating should return 9.5 as an average
 *      the average equation: average = sumOfValues / countOfValues
 *      (*BONUS*): use the method reduce to calculate the average
 */

class Movie {
  // continue the code here
  constructor(title, duration, genre){
    this.title=title;
    this.duration=duration;
    this.genre=genre;
    this.rating=[];
  }
  rate(rating){
   if(rating >= 0 && rating<=10){
  this.rating.push(rating)
  }}
  avrageRating(){
    const sum = this.rating.reduce((prev, curr) => prev + curr);
    return sum / this.rating.length;
  }

}
const harryPotter = new Movie(
  "Harry Potter and the Chamber of Secrets ",
  450,
  "Action"
)
harryPotter.rate(5);
harryPotter.rate(6);
harryPotter.rate(7);
console.log(harryPotter.avrageRating());

/** (Question 3): (1000 Points)
 * 1. Create a class `Actor` that inherits `Person`, and adds the following properties
 * - movies: array of `Movie`
 *
 * 2. Add the following methods
 * + addMovie(movie), that adds a movie to the actors movies
 * +
 */

// write the class here
class Actor extends Person{
movies = [];
addMovie(movie){
  this.movies.push(movie);
}
 
}

const Daniel = new Actor["Daniel"]
