using Microsoft.EntityFrameworkCore.Migrations;

namespace WebAPI5.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Authors",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Authors", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Authors",
                columns: new[] { "Id", "Email", "FirstName", "LastName" },
                values: new object[,]
                {
                    { 1, "henryk.sienkiewicz@przyklad.pl", "Henryk", "Sienkiewicz" },
                    { 2, "wladyslaw.reymont@przyklad.pl", "Władysław", "Reymont" },
                    { 3, "czeslaw.milosz@przyklad.pl", "Czesław", "Miłosz" },
                    { 4, "wislawa.szymborska@przyklad.pl", "Wisława", "Szymborska" },
                    { 5, "olga.tokarczuk@przyklad.pl", "Olga", "Tokarczuk" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Authors");
        }
    }
}
