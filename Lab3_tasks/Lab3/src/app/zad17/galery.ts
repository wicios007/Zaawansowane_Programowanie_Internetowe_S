export class Galery {
  url: string;
  alt: string;

  constructor(url_: string, alt_: string) {
    this.url = url_;
    this.alt = alt_;
  }
  public static create(arg1: string, arg2: string): Galery {
    return new Galery(arg1, arg2);
  }
}
