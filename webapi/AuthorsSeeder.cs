using System.Collections.Generic;
using System.Linq;
using webapi.EntityFramework;
using webapi.Models;

namespace webapi
{
    public class AuthorsSeeder
    {
        private readonly AppDbContext _dbContext;
        public AuthorsSeeder(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void Seed(){
            if(!_dbContext.Authors.Any()){
                var authorsList = GetAuthors();
                _dbContext.Authors.AddRange(authorsList);
                _dbContext.SaveChanges();
            }
        }

        private IEnumerable<Author> GetAuthors()
        {

            var authorsList = new List<Author>(){
                new Author()
                {
                    Id = 1,
                    FirstName = "Henryk",
                    LastName = "Sienkiewicz"
                },
                new Author()
                {
                    Id = 2,
                    FirstName = "Władysław",
                    LastName = "Reymont",
                },
                new Author()
                {
                    Id = 3,
                    FirstName = "Czesław",
                    LastName = "Miłosz",
                },
                new Author()
                {
                    Id = 4,
                    FirstName = "Wisława",
                    LastName = "Szymborska",
                },
                new Author()
                {
                    Id = 5,
                    FirstName = "Olga",
                    LastName = "Tokarczuk",
                }
            };
            return authorsList;
        }

        private IEnumerable<Email> GetEmails(){
            var emailsList = new List<Email>(){
                new Email(){
                    Id = 1,
                    Address = "henryk.sienkiewicz@przyklad.pl",
                    AuthorId = 1
                },
                new Email(){
                    Id = 2,
                    Address = "wladyslaw.reymont@przyklad.pl",
                    AuthorId = 2
                },
                new Email(){
                    Id = 3,
                    Address = "czeslaw.milosz@przyklad.pl",
                    AuthorId = 3
                },
                new Email(){
                    Id = 4,
                    Address = "wislawa.szymborska@przyklad.pl",
                    AuthorId = 4
                },
                new Email(){
                    Id = 5,
                    Address = "olga.tokarczuk@przyklad.pl",
                    AuthorId = 5
                }
            };
            return emailsList;
        }

    }
}