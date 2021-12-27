//using System.Data.Entity.DbContext
using Microsoft.EntityFrameworkCore;
using webapi.models;

public class AppDbContext : DbContext
{
    public DbSet<Author> Authors { get; set; }
    public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
    {}
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Author>(authorBuilder =>
        {
            authorBuilder.Property(author => author.FirstName).IsRequired();
            authorBuilder.Property(author => author.LastName).IsRequired();
            authorBuilder.Property(author => author.Email);
        });
        modelBuilder.Entity<Author>().HasData
        (
            new Author()
            {
                Id = 1,
                FirstName = "Henryk",
                LastName = "Sienkiewicz",
                Email = "henryk.sienkiewicz@przyklad.pl"
            },
            new Author()
            {
                Id = 2,
                FirstName = "Władysław",
                LastName = "Reymont",
                Email = "wladyslaw.reymont@przyklad.pl"
            },
            new Author()
            {
                Id = 3,
                FirstName = "Czesław",
                LastName = "Miłosz",
                Email = "czeslaw.milosz@przyklad.pl"
            },
            new Author()
            {
                Id = 4,
                FirstName = "Wisława",
                LastName = "Szymborska",
                Email = "wislawa.szymborska@przyklad.pl"
            },
            new Author()
            {
                Id = 5,
                FirstName = "Olga",
                LastName = "Tokarczuk",
                Email = "olga.tokarczuk@przyklad.pl"
            }
        );
    }
}