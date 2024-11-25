class UserAccount {
  #balance;
  constructor(name) {
    this.name = name;
    this.#balance = 0;
  }
  addBalance(amount) {
    if (amount > 0) {
      this.#balance += amount;
    }
  }
  deductBalance(amount) {
    if (amount > 0 && this.#balance - amount >= 0) {
      this.#balance -= amount;
    }
  }
  printBalance() {
    console.log(`Текущий баланс: ${this.#balance}`);
    return this.#balance;
  }
}

const user = new UserAccount("Gavin");

user.addBalance(55);

user.printBalance()