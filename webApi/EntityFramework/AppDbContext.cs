public class AppDbContext : DbContext
{
    public DbSet<Author> Authors { get;set;}

    public AppDbContext(DbContextOptions<AppDbContext> options):base(options)
    {
    }

     protected override void OnModelCreating(ModelBuilder modelBuilder)
     {
         modelBuilder.Entity<Author>(authorBuilder =>{
             authorBuilder.Property(authorBuilder => authorBuilder.FirstName).IsRequired();
             authorBuilder.Property(authorBuilder => authorBuilder.LastName).IsRequired();
             authorBuilder.Property(authorBuilder => authorBuilder.Email);
             
         });

         modelBuilder.Entity<Author>().HasData(
             
         )
     }

}