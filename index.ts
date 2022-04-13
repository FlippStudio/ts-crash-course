// basic types
let id: number = 5;
let company: string = "some company";
let isPublished: boolean = true;
let x: any = "hello";

let ids: number[] = [1, 2, 3, 4];
let arr: any[] = [1, true, "heelo"];

//Tuple
let person: [number, string, boolean] = [1, "Brad", true];

//Tuple array
let employee: [number, string][];

employee = [
  [1, "h"],
  [2, "h"],
];

//Union
let pid: string | number;

pid = "22";

//Enum
enum Direction1 {
  Up,
  Down,
  Left,
  Right,
}

console.log(Direction1.Up);

type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "John",
};

//  Type Assertion
let cid: any = 1;
// let customerId = <number> cid
let customerId = cid as number;

function addNum(x: number, y: number): number {
  return x + y;
}

function log(message: string | number): void {
  console.log(message);
}

console.log(log(1));

// Interfaces
interface UserInterface {
  readonly id: number;
  name: string;
  age?: number;
}

const user1: UserInterface = {
  id: 1,
  name: "hello",
};

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const sub: MathFunc = (x: number, y: number): number => x - y;

// Classes

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered.`;
  }
}

const brad = new Person(1, "Brad");

// Subclass
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, "Shawn", "dev");

// generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["name", "another name"]);
