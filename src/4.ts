// Клас Key
class Key {
  private signature: number;

  constructor() {
    this.signature = Math.random();
  }

  getSignature(): number {
    return this.signature;
  }
}

// Клас Person
class Person {
  private key: Key;

  constructor(key: Key) {
    this.key = key;
  }

  getKey(): Key {
    return this.key;
  }
}

// Абстрактний клас House
abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];

  constructor(key: Key) {
    this.key = key;
  }

  abstract openDoor(key: Key): void;

  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log(`Person entered the house.`);
    } else {
      console.log(`Door is closed. Person cannot enter the house.`);
    }
  }
}

// Клас MyHouse
class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }

  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log(`Door opened.`);
    } else {
      console.log(`Invalid key. Door remains closed.`);
    }
  }
}

// Створення об'єктів та відтворення сценарію
const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());
house.comeIn(person);

// Невеличке пояснення: цей код створює класи Key, Person, House (абстрактний) і MyHouse.
// Клас Key генерує випадковий підпис при створенні.
// Клас Person приймає об'єкт ключа при створенні.
// Клас House має метод comeIn, який дозволяє людині зайти до будинку, якщо двері відкриті.
// Клас MyHouse успадковує від House та реалізує метод openDoor, який відкриває двері,
// якщо переданий ключ відповідає ключу будинку.
