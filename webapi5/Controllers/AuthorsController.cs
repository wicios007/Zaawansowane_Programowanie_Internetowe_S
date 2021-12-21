using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi5.EntityFramework;
using webapi5.models;

namespace webapi5.Controllers{

	[ApiController]
	[Route("[controller]")]
	public class AuthorsController : ControllerBase
	{
		private AppDbContext context;
		
		public AuthorsController(AppDbContext context){
			this.context = context;
		}

		[HttpGet]
		[ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Author))]
		[ProducesResponseType(StatusCodes.Status500InternalServerError)]
		public async Task<IActionResult> GetAuthors()
		{
			try{
				var list = await context.Authors.ToListAsync();
				return Ok(list);
			}
			catch{
				return this.Problem(
					detail: "Wystąpił błąd podczas realizacji tego żądania",
					title: "Błąd"
				);
			}
		}

		[HttpGet("paginated_result")]
		public async Task<IActionResult> GetPaginatedData(int pageSize, int pageNumber){
			try{
				
				var authors = await context.Authors.OrderBy(a => a.Id).Skip(pageSize * (pageNumber - 1)).Take(pageSize).ToListAsync();
				return Ok(authors);
			}
			catch{
				return this.Problem(
					detail: "Wystąpił błąd podczas realizacji tego żądania",
					title: "Błąd"
				);
			}
		}

		[HttpGet("{id}", Name = "GetAuthor")]
		public async Task<IActionResult> GetAuthor(int id){
			try{
				var author = await context.Authors.SingleOrDefaultAsync(a=>a.Id == id);
				if(author == null)
					return NotFound($"Nie znaleziono autor o id = {id}");
				else
					return Ok(author);
			}
			catch
			{
				return this.Problem(
					detail: "Wystąpił błąd podczas realizacji tego żądania",
					title: "Błąd"
				);
			}
		}
		// [HttpGet("{filter}={searchString}", Name = "GetFilteredAuthor")]
		[HttpGet("filtered_authors", Name="GetFilteredAuthors")]
		public async Task<IActionResult> GetFilteredAuthor(string filter, string searchString){
			try{
				// DbSet<Author> authors;
				switch(filter){
					case "firstname":
						var authorsFirstName = await context.Authors.Where(a => a.FirstName.Contains(searchString)).ToListAsync();
						return Ok(authorsFirstName);
					case "lastname":
						var authorsLastName = await context.Authors.Where(a=>a.LastName.Contains(searchString)).ToListAsync();
						return Ok(authorsLastName);
					case "email":
						var authorsEmail = await context.Authors.Include(email => email.Emails.Where(e => e.EmailString.Contains(searchString))).ToListAsync();
						return Ok(authorsEmail);
					default:
						var authors = await context.Authors.ToListAsync();
						return Ok(authors);				
				}
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
		public async Task<IActionResult> InsertAuthor([FromBody] Author author){
			if(!ModelState.IsValid)
				return BadRequest();
			try{
				context.Authors.Add(author);
				await context.SaveChangesAsync();
				return CreatedAtAction("GetAuthor", new {id = author.Id}, author);
			}
			catch{
				return this.Problem(
					detail: "Wystąpił błąd podczas realizacji tego żądania",
					title: "Błąd"
				);
			}
		}
		[HttpPut]
		public async Task<IActionResult> EditAuthor(int id, Author author){
			try{
				var authorToUpdate = await context.Authors.SingleOrDefaultAsync(x => x.Id == id);
				if(authorToUpdate != null){
					authorToUpdate.FirstName = author.FirstName;
					authorToUpdate.LastName = author.LastName;
					authorToUpdate.Emails = author.Emails;

					await context.SaveChangesAsync();
					return Ok(authorToUpdate);
				}
				else return NotFound($"Nie znaleziono autora o id = {id}");
			}
			catch{
				return this.Problem(
					detail: "Wystąpił błąd podczas realizacji tego żądania",
					title: "Błąd"
				);	
			}
		}

		[HttpDelete]
		public async Task<IActionResult> DeleteAuthor(int id){
			try{
				var authorToRemove = await context.Authors.SingleOrDefaultAsync(x => x.Id == id);
				if(authorToRemove != null){
					context.Authors.Remove(authorToRemove);
					await context.SaveChangesAsync();
					return NoContent();
				}
				else return NotFound($"Nie znaleziono autora o id = {id}");
			}
			catch{
				return this.Problem(
					detail: "Wystąpił błąd podczas realizacji tego żądania",
					title: "Błąd"
				);
			}
		}
	}

}