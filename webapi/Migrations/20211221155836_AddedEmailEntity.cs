using Microsoft.EntityFrameworkCore.Migrations;

namespace webapi.Migrations
{
    public partial class AddedEmailEntity : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "Authors");

            migrationBuilder.CreateTable(
                name: "Email",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AuthorId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Email", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Email_Authors_AuthorId",
                        column: x => x.AuthorId,
                        principalTable: "Authors",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Email",
                columns: new[] { "Id", "Address", "AuthorId" },
                values: new object[,]
                {
                    { 1, "henryk.sienkiewicz@przyklad.pl", 1 },
                    { 2, "wladyslaw.reymont@przyklad.pl", 2 },
                    { 3, "czeslaw.milosz@przyklad.pl", 3 },
                    { 4, "wislawa.szymborska@przyklad.pl", 4 },
                    { 5, "olga.tokarczuk@przyklad.pl", 5 }
                });

            migrationBuilder.CreateIndex(
                name: "IX_Email_AuthorId",
                table: "Email",
                column: "AuthorId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Email");

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Authors",
                type: "nvarchar(max)",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 1,
                column: "Email",
                value: "henryk.sienkiewicz@przyklad.pl");

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 2,
                column: "Email",
                value: "wladyslaw.reymont@przyklad.pl");

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 3,
                column: "Email",
                value: "czeslaw.milosz@przyklad.pl");

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 4,
                column: "Email",
                value: "wislawa.szymborska@przyklad.pl");

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 5,
                column: "Email",
                value: "olga.tokarczuk@przyklad.pl");
        }
    }
}
