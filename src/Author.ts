class Author {
  id: Number;
  firstName: String;
  lastName: String;
  email: String;
  get getFirstName(): String {
    return this.firstName;
  }
  set setFirstName(value: String) {
    this.firstName = value;
  }
  get getLastName(): String {
    return this.lastName;
  }
  set setLastName(value: String) {
    this.lastName = value;
  }
  get getEmail(): String {
    return this.email;
  }
  set setEmail(value: String) {
    this.email = value;
  }

  constructor(firstName: String, lastName: String) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
