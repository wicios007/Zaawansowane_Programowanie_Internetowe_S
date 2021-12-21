﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using webapi.EntityFramework;

namespace webapi.Migrations
{
    [DbContext(typeof(AppDbContext))]
    partial class AppDbContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("ProductVersion", "5.0.12")
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("webapi.Models.Author", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Authors");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Email = "henryk.sienkiewicz@przyklad.pl",
                            FirstName = "Henryk",
                            LastName = "Sienkiewicz"
                        },
                        new
                        {
                            Id = 2,
                            Email = "wladyslaw.reymont@przyklad.pl",
                            FirstName = "Władysław",
                            LastName = "Reymont"
                        },
                        new
                        {
                            Id = 3,
                            Email = "czeslaw.milosz@przyklad.pl",
                            FirstName = "Czesław",
                            LastName = "Miłosz"
                        },
                        new
                        {
                            Id = 4,
                            Email = "wislawa.szymborska@przyklad.pl",
                            FirstName = "Wisława",
                            LastName = "Szymborska"
                        },
                        new
                        {
                            Id = 5,
                            Email = "olga.tokarczuk@przyklad.pl",
                            FirstName = "Olga",
                            LastName = "Tokarczuk"
                        });
                });
#pragma warning restore 612, 618
        }
    }
}
