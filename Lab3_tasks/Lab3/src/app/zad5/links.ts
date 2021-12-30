export class Links {
  links: { name: string; url: string; description: string };

  constructor(arg1: string, arg2: string, arg3: string) {
    this.links = {
      name: arg1,
      url: arg2,
      description: arg3,
    };
  }

  static create(arg1: string, arg2: string, arg3: string) {
    return new Links(arg1, arg2, arg3);
  }
}
