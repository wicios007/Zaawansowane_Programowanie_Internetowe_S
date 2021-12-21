using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.EntityFramework;
using webapi.Models;

namespace webapi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class AuthorsController : ControllerBase
    {
        private readonly AppDbContext dbContext;

        public AuthorsController(AppDbContext _dbContext)
        {
            dbContext = _dbContext;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Author))]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> GetAuthors()
        {
            try
            {
                var authors = await dbContext.Authors.IgnoreQueryFilters().ToListAsync();
                return Ok(authors);
            }
            catch
            {
                return this.Problem(
                    detail: "Wystapił_błąd_podczas_realizacji_tego_żadania",
                    title: "Błąd"
                );
            }
        }
        [HttpGet("{id}", Name = "GetAuthor")]
        public async Task<IActionResult> GetAuthor(int id)
        {
            try
            {
                var author = await dbContext.Authors.FirstOrDefaultAsync(c => c.Id == id);
                if (author is null)
                {
                    return NotFound($"Nie znaleziono autora o id = {id}");
                }
                    return Ok(author);
            }
            catch
            {
                return this.Problem(
                    detail: "Wystapił_błąd_podczas_realizacji_tego_żadania",
                    title: "Błąd"
                );
            }
        }
        [HttpPost]
        public async Task<IActionResult> Create(Author author)
        {
            try
            {
                if(!ModelState.IsValid || ModelState == null || author == null)
                {
                    return BadRequest("Model error"); 
                }
                    
                await dbContext.Authors.AddAsync(author);
                await dbContext.SaveChangesAsync();
                return Created($"Authors/{author.Id}", author);
            }
            catch
            {
                return this.Problem(
                    detail: "Wystapił_błąd_podczas_realizacji_tego_żadania",
                    title: "Błąd"
                );
            }
        }

        [HttpPut]
        [Route("{id}", Name = "EditAutor")]
        public async Task<IActionResult> Update(int id, [FromBody] Author author){
            try
            {
                var autor = await dbContext.Authors.FirstOrDefaultAsync(c => c.Id == id);
                if(autor is null)
                {
                    return NotFound("Autor nie został znaleziony");
                }
                autor.Email = author.Email;
                autor.FirstName = author.FirstName;
                autor.LastName = author.LastName;
                await dbContext.SaveChangesAsync();
                return Ok();
            }
            catch
            {
                    return this.Problem(
                    detail: "Wystapił_błąd_podczas_realizacji_tego_żadania",
                    title: "Błąd"
                );
            }

        }
        [HttpGet]
        [Route("filter")]
        public async Task<IActionResult> GetFiltered(string filterBy, string filter)
        {
            try
            {
                
                switch(filterBy){
                    case "email":
                        var authorsEmail = await dbContext.Authors.Where(c => c.Email.Contains(filter)).ToListAsync();
                        return Ok(authorsEmail);
                    case "firstname":
                        var authorsFirst = await dbContext.Authors.Where(c => c.FirstName.Contains(filter)).ToListAsync();
                        return Ok(authorsFirst);
                    case "lastname":
                        var authorsLast = await dbContext.Authors.Where(c => c.LastName.Contains(filter)).ToListAsync();
                        return Ok(authorsLast);
                    default:
                        var authors = await dbContext.Authors.ToListAsync();
                        return Ok(authors);
                }
            }
            catch
            {
                    return this.Problem(
                    detail: "Wystapił_błąd_podczas_realizacji_tego_żadania",
                    title: "Błąd"
                );
            }
        }

        [HttpDelete]
        [Route("{id}", Name = "DeleteAuthor")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                var author = await dbContext.Authors.FirstOrDefaultAsync(c => c.Id == id);
                if(author is null){
                    return BadRequest($"Nie znaleziono autora o podanym id = {id}");
                }
                dbContext.Authors.Remove(author);
                await dbContext.SaveChangesAsync();
                return NoContent();
                
            }
            catch
            {
                return this.Problem(
                    detail: "Wystapił_błąd_podczas_realizacji_tego_żadania",
                    title: "Błąd"
                );
            }
        }
        [HttpGet]
        [Route("paginate")]
        public async Task<IActionResult> Paginated(int pageSize, int pageNumber)
        {
            try
            {
                var baseQuery = await dbContext.Authors.ToListAsync();
                var authors = baseQuery
                    .Skip(pageSize * (pageNumber - 1))
                    .Take(pageSize)
                    .ToList();

                    return Ok(authors);
            }
            catch
            {
                return this.Problem(
                    detail: "Wystapił_błąd_podczas_realizacji_tego_żadania",
                    title: "Błąd"
                );
            }
        }
    }
}