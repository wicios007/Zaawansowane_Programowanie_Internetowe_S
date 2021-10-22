class Article {
  id: Number;
  title: String;
  content: String;
  createdDate: Date;
  comments: MyComment[];

  get getTitle(): String {
    return this.title;
  }

  set setTitle(value: String) {
    this.title = value;
  }

  get getContent(): String {
    return this.content;
  }

  set setContent(value: String) {
    this.content = value;
  }

  constructor(title: String, content: String) {
    this.title = title;
    this.content = content;
  }

  addComment(comment: MyComment): void {
    this.comments.push(comment);
  }

  getComments(): MyComment[] {
    return this.comments;
  }
}
