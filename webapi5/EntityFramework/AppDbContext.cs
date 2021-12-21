using Microsoft.EntityFrameworkCore;
using webapi5.models;

namespace webapi5.EntityFramework
{
	public class AppDbContext : DbContext
	{
		public DbSet<Author> Authors { get; set; }
		public DbSet<Email> Email { get; set; }
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
			modelBuilder.Entity<Email>(emailBuilder =>
			{
				emailBuilder.Property(email => email.EmailString).IsRequired();
				emailBuilder.Property(email => email.AuthorId).IsRequired();
				emailBuilder.HasOne(a => a.Author)
							.WithMany(e => e.Emails)
							.OnDelete(DeleteBehavior.Cascade)
							.IsRequired();
			});

			modelBuilder.Entity<Author>().HasData(
				new Author()
				{
					AuthorId = 1,
					FirstName = "Henryk",
					LastName = "Sienkiewicz"
				},

				new Author()
				{
					AuthorId = 2,
					FirstName = "Władysław",
					LastName = "Reymont"
				},
				new Author()
				{
					AuthorId = 3,
					FirstName = "Czesław",
					LastName = "Miłosz"
				},
				new Author()
				{
					AuthorId = 4,
					FirstName = "Wisława",
					LastName = "Szymborska"
				}

			);
			modelBuilder.Entity<Email>().HasData(
				new Email() { EmailId = 1, EmailString = "h.sienkiewicz@example.com", AuthorId = 1 },
				new Email() { EmailId = 2, EmailString = "w.reymont@example.com", AuthorId = 2 },
				new Email() { EmailId = 3, EmailString = "c.milosz@example.com", AuthorId = 3 },
				new Email() { EmailId = 4, EmailString = "w.szymborska@example.com", AuthorId = 4 },
				new Email() { EmailId = 5, EmailString = "w.szymborska@dziala.com", AuthorId = 4 }
			);
		}
	}
}