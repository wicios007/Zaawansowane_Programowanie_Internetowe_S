import { Blog } from "./Blog";
import { Autor } from "./Autor";
import { Artykul } from "./Artykul";
import { Komentarz } from "./Komentarz";

const blog = new Blog("aaaa", new Autor("sjds", "jfsadhkj"));
blog.dodajArtykul(new Artykul("asfdas", "afffasafsfaaf"));

console.log(blog.exportData());