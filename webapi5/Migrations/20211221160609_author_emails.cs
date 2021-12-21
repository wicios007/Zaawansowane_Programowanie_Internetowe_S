using Microsoft.EntityFrameworkCore.Migrations;

namespace webapi5.Migrations
{
    public partial class author_emails : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Email",
                table: "Authors");

            migrationBuilder.RenameColumn(
                name: "Id",
                table: "Authors",
                newName: "AuthorId");

            migrationBuilder.CreateTable(
                name: "Email",
                columns: table => new
                {
                    EmailId = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    EmailString = table.Column<string>(type: "TEXT", nullable: false),
                    AuthorId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Email", x => x.EmailId);
                    table.ForeignKey(
                        name: "FK_Email_Authors_AuthorId",
                        column: x => x.AuthorId,
                        principalTable: "Authors",
                        principalColumn: "AuthorId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.InsertData(
                table: "Email",
                columns: new[] { "EmailId", "AuthorId", "EmailString" },
                values: new object[] { 1, 1, "h.sienkiewicz@example.com" });

            migrationBuilder.InsertData(
                table: "Email",
                columns: new[] { "EmailId", "AuthorId", "EmailString" },
                values: new object[] { 2, 2, "w.reymont@example.com" });

            migrationBuilder.InsertData(
                table: "Email",
                columns: new[] { "EmailId", "AuthorId", "EmailString" },
                values: new object[] { 3, 3, "c.milosz@example.com" });

            migrationBuilder.InsertData(
                table: "Email",
                columns: new[] { "EmailId", "AuthorId", "EmailString" },
                values: new object[] { 4, 4, "w.szymborska@example.com" });

            migrationBuilder.InsertData(
                table: "Email",
                columns: new[] { "EmailId", "AuthorId", "EmailString" },
                values: new object[] { 5, 4, "w.szymborska@dziala.com" });

            migrationBuilder.CreateIndex(
                name: "IX_Email_AuthorId",
                table: "Email",
                column: "AuthorId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Email");

            migrationBuilder.RenameColumn(
                name: "AuthorId",
                table: "Authors",
                newName: "Id");

            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Authors",
                type: "TEXT",
                nullable: true);

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 1,
                column: "Email",
                value: "h.sienkiewicz@example.com");

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 2,
                column: "Email",
                value: "w.reymont@example.com");

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 3,
                column: "Email",
                value: "cz.milosz@example.com");

            migrationBuilder.UpdateData(
                table: "Authors",
                keyColumn: "Id",
                keyValue: 4,
                column: "Email",
                value: "w.szymborska@example.com");
        }
    }
}
