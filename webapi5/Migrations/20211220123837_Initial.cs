using Microsoft.EntityFrameworkCore.Migrations;

namespace webapi5.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Authors",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    FirstName = table.Column<string>(type: "TEXT", nullable: false),
                    LastName = table.Column<string>(type: "TEXT", nullable: false),
                    Email = table.Column<string>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Authors", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Authors",
                columns: new[] { "Id", "Email", "FirstName", "LastName" },
                values: new object[] { 1, "h.sienkiewicz@example.com", "Henryk", "Sienkiewicz" });

            migrationBuilder.InsertData(
                table: "Authors",
                columns: new[] { "Id", "Email", "FirstName", "LastName" },
                values: new object[] { 2, "w.reymont@example.com", "Władysław", "Reymont" });

            migrationBuilder.InsertData(
                table: "Authors",
                columns: new[] { "Id", "Email", "FirstName", "LastName" },
                values: new object[] { 3, "cz.milosz@example.com", "Czesław", "Miłosz" });

            migrationBuilder.InsertData(
                table: "Authors",
                columns: new[] { "Id", "Email", "FirstName", "LastName" },
                values: new object[] { 4, "w.szymborska@example.com", "Wisława", "Szymborska" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Authors");
        }
    }
}
