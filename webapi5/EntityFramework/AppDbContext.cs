using Microsoft.EntityFrameworkCore;
using webapi5.models;

namespace webapi5.EntityFramework
{
	public class AppDbContext : DbContext
	{
		public DbSet<Author> Authors { get; set; }
		public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
		{
		}
		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<Author>(authorBuilder =>
			{
				authorBuilder.Property(author => author.FirstName).IsRequired();
				authorBuilder.Property(author => author.LastName).IsRequired();
				// authorBuilder.Property(author => author.Emails);
			});
			modelBuilder.Entity<Email>(emailBuilder =>{
				emailBuilder.Property(email => email.EmailString).IsRequired();
				emailBuilder.Property(email => email.AuthorId).IsRequired();
				emailBuilder.Property(email => email.Author).IsRequired();
				emailBuilder.HasOne(a => a.Author)
							.WithMany(e => e.Emails)
							.OnDelete(DeleteBehavior.Cascade)
							.IsRequired();
			});

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
					LastName = "Reymont"
				},
				new Author()
				{
					Id = 3,
					FirstName = "Czesław",
					LastName = "Miłosz"
				},
				new Author()
				{
					Id = 4,
					FirstName = "Wisława",
					LastName = "Szymborska"
				}

			);
			modelBuilder.Entity<Email>().HasData(
				new Email(){ Id = 1, EmailString = "h.sienkiewicz@example.com", AuthorId = 1 },
				new Email(){ Id = 2, EmailString = "w.reymont@example.com", AuthorId = 2 },
				new Email(){ Id = 3, EmailString = "c.milosz@example.com", AuthorId = 3 },
				new Email(){ Id = 4, EmailString = "w.szymborska@example.com", AuthorId = 4 },
				new Email(){ Id = 5, EmailString = "w.szymborska@dziala.com", AuthorId = 4 }
			);
		}
	}
}