export class Author {
  id: number;
  name: string;
  lastName: string;
  email: string;

  public constructor(
    id_: number,
    name_: string,
    lastName_: string,
    email_: string
  ) {
    this.id = id_;
    this.name = name_;
    this.lastName = lastName_;
    this.email = email_;
  }
  public static create(
    arg1: number,
    arg2: string,
    arg3: string,
    arg4: string
  ): Author {
    return new Author(arg1, arg2, arg3, arg4);
  }

  // create(arg1: number, arg2: string, arg3: string, arg4: string): string {
  //   return "chuj";
  // }
}
