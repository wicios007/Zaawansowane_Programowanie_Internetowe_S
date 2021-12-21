using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi5.EntityFramework;
using webapi5.models;

namespace webapi5.Controllers
{

	[ApiController]
	[Route("[controller]")]
	public class EmailsController : ControllerBase
	{
		private AppDbContext context;

		public EmailsController(AppDbContext context)
		{
			this.context = context;
		}
		[HttpGet]
		[ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Email))]
		[ProducesResponseType(StatusCodes.Status500InternalServerError)]
		public async Task<IActionResult> GetEmails()
		{
			try
			{
				var list = await context.Email.ToListAsync();
				return Ok(list);
			}
			catch
			{
				return this.Problem(
					detail: "Wystąpił błąd podczas realizacji tego żądania",
					title: "Błąd"
				);
			}
		}
		[HttpGet("{id}", Name = "GetEmail")]
		public async Task<IActionResult> GetEmail(int id)
		{
			try
			{
				var email = await context.Email.SingleOrDefaultAsync(a => a.EmailId == id);
				if (email == null)
					return NotFound($"Nie znaleziono email o id = {id}");
				else
					return Ok(email);
			}
			catch
			{
				return this.Problem(
					detail: "Wystąpił błąd podczas realizacji tego żądania",
					title: "Błąd"
				);
			}
		}

		[HttpPost]
		public async Task<IActionResult> InsertEmail([FromBody] Email email)
		{
			if (!ModelState.IsValid)
				return BadRequest();
			try
			{
				
				var author = await context.Authors.SingleOrDefaultAsync(x => x.AuthorId == email.AuthorId);
				email.Author = author;
				context.Email.Add(email);
				await context.SaveChangesAsync();
				// return CreatedAtAction("GetEmail", new { id = email.EmailId }, email);
				return Ok(email);
			}
			catch
			{
				return this.Problem(
					detail: "Wystąpił błąd podczas realizacji tego żądania",
					title: "Błąd"
				);
			}
		}
		[HttpPut]
		public async Task<IActionResult> EditEmail(int id, Email email)
		{
			try
			{
				var emailtoUpdate = await context.Email.SingleOrDefaultAsync(x => x.EmailId == id);
				var author = await context.Authors.SingleOrDefaultAsync(x => x.AuthorId == email.AuthorId);
				if (emailtoUpdate != null)
				{
					emailtoUpdate.AuthorId = email.AuthorId;
					emailtoUpdate.EmailString = email.EmailString;
					emailtoUpdate.Author = author;
					await context.SaveChangesAsync();
					return Ok(emailtoUpdate);
				}
				else return NotFound($"Nie znaleziono autora o id = {id}");
			}
			catch
			{
				return this.Problem(
					detail: "Wystąpił błąd podczas realizacji tego żądania",
					title: "Błąd"
				);
			}
		}

		[HttpDelete]
		public async Task<IActionResult> DeleteEmail(int id)
		{
			try
			{
				var emailToRemove = await context.Email.SingleOrDefaultAsync(x => x.EmailId == id);
				if (emailToRemove != null)
				{
					context.Email.Remove(emailToRemove);
					await context.SaveChangesAsync();
					return NoContent();
				}
				else return NotFound($"Nie znaleziono emaila o id = {id}");
			}
			catch
			{
				return this.Problem(
					detail: "Wystąpił błąd podczas realizacji tego żądania",
					title: "Błąd"
				);
			}
		}
	}

}