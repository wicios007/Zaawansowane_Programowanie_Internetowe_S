using Microsoft.EntityFrameworkCore;
using webapi.Models;

namespace webapi.EntityFramework
{
    public class AppDbContext : DbContext
    {
        public DbSet<Author> Authors { get; set; }
        public DbSet<Email> Emails{ get; set; }

        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {

            modelBuilder.Entity<Author>(authorBuilder =>
            {
                authorBuilder.Property(author => author.FirstName).IsRequired();
                authorBuilder.Property(author => author.LastName).IsRequired();
                //authorBuilder.Property(author => author.Email);
            });

            modelBuilder.Entity<Email>()
                .Property(c => c.Address)
                .IsRequired();


            modelBuilder.Entity<Author>().HasData(
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
            );

            modelBuilder.Entity<Email>().HasData(
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
            );
        }
    }
}
