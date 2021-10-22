class Blog {
  id: Number;
  name: String;
  author: Author;
  articles: Article[];
  get getName(): String {
    return this.name;
  }
  set setName(value: String) {
    this.name = value;
  }
  get getAuthor(): Author {
    return this.author;
  }
  set setAuthor(value: Author) {
    this.author = value;
  }

  constructor(name: String, author: Author) {
    this.name = name;
    this.author = author;
  }

  addArticle(article: Article) {
    this.articles.push(article);
  }

  // getTitleOfArticle():String[]{
  //   let titles:String[];
  //   this.articles.forEach(function(item)){
  //     titles.push(item)
  //   }
  //   return titles
  // }
}
