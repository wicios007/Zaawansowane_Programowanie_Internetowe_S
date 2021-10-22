class MyComment {
  content: String;
  date: Date;
  responds: MyComment[];
  nick: String;

  get getContent(): String {
    return this.content;
  }

  set setContent(value: String) {
    this.content = value;
  }

  get getDate(): Date {
    return this.date;
  }

  set setDate(value: Date) {
    this.date = value;
  }

  get getNick(): String {
    return this.nick;
  }

  set setNick(value: String) {
    this.nick = value;
  }

  constructor(content: String, nick: String) {
    this.content = content;
    this.nick = nick;
  }

  addRespond(respond: MyComment): void {
    this.responds.push(respond);
  }

  getResponds(): MyComment[] {
    return this.responds;
  }
}
