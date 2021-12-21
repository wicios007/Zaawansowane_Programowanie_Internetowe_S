﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using webapi5.EntityFramework;

namespace webapi5.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.12");

            modelBuilder.Entity("webapi5.models.Author", b =>
                {
                    b.Property<int>("AuthorId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("AuthorId");

                    b.ToTable("Authors");

                    b.HasData(
                        new
                        {
                            AuthorId = 1,
                            FirstName = "Henryk",
                            LastName = "Sienkiewicz"
                        },
                        new
                        {
                            AuthorId = 2,
                            FirstName = "Władysław",
                            LastName = "Reymont"
                        },
                        new
                        {
                            AuthorId = 3,
                            FirstName = "Czesław",
                            LastName = "Miłosz"
                        },
                        new
                        {
                            AuthorId = 4,
                            FirstName = "Wisława",
                            LastName = "Szymborska"
                        });
                });

            modelBuilder.Entity("webapi5.models.Email", b =>
                {
                    b.Property<int>("EmailId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("AuthorId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("EmailString")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("EmailId");

                    b.HasIndex("AuthorId");

                    b.ToTable("Email");

                    b.HasData(
                        new
                        {
                            EmailId = 1,
                            AuthorId = 1,
                            EmailString = "h.sienkiewicz@example.com"
                        },
                        new
                        {
                            EmailId = 2,
                            AuthorId = 2,
                            EmailString = "w.reymont@example.com"
                        },
                        new
                        {
                            EmailId = 3,
                            AuthorId = 3,
                            EmailString = "c.milosz@example.com"
                        },
                        new
                        {
                            EmailId = 4,
                            AuthorId = 4,
                            EmailString = "w.szymborska@example.com"
                        },
                        new
                        {
                            EmailId = 5,
                            AuthorId = 4,
                            EmailString = "w.szymborska@dziala.com"
                        });
                });

            modelBuilder.Entity("webapi5.models.Email", b =>
                {
                    b.HasOne("webapi5.models.Author", "Author")
                        .WithMany("Emails")
                        .HasForeignKey("AuthorId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Author");
                });

            modelBuilder.Entity("webapi5.models.Author", b =>
                {
                    b.Navigation("Emails");
                });
#pragma warning restore 612, 618
        }
    }
}
