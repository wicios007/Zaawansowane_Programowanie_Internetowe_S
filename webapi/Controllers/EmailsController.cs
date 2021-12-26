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
    public class EmailsController : ControllerBase
    {
        private readonly AppDbContext dbContext;

        public EmailsController(AppDbContext _dbContext)
        {
            dbContext = _dbContext;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Author))]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> GetEmails()
        {
            try
            {
                var authors = await dbContext.Emails
                    .ToListAsync();
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
        [HttpGet("{id}")]
        public async Task<IActionResult> GetEmailById(int id)
        {
            try
            {
                var email = await dbContext.Emails.FirstOrDefaultAsync(c => c.Id == id);
                if (email is null)
                {
                    return NotFound();
                }
                return Ok(email);
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
        public async Task<IActionResult> Create(Email email)
        {
            try
            {
                if (email is null)
                {
                    return BadRequest();
                }
                var author = await dbContext.Authors.FirstOrDefaultAsync(c => c.Id == email.AuthorId);
                //email.Author = author;
                email.AuthorId = author.Id;
                await dbContext.Emails.AddAsync(email);
                await dbContext.SaveChangesAsync();
                return Created($"Emails/{email.Id}", email);
            }
            catch
            {
                return this.Problem(
                    detail: "Wystapił_błąd_podczas_realizacji_tego_żadania",
                    title: "Błąd"
                );
            }
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            try
            {
                var email = await dbContext.Emails.FirstOrDefaultAsync(c => c.Id == id);
                if(email is null)
                {
                    return NotFound($"Email o id = {id} nie zostal znaleziony");
                }
                dbContext.Emails.Remove(email);
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
    }
}