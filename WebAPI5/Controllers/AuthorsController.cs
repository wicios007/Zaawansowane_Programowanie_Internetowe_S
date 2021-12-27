using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using webapi.models;

namespace webapi5.Controllers
{
    [ApiController]
    [Route("[controller]")]
    class AuthorsController : ControllerBase
    {
        private readonly AppDbContext context;

        public AuthorsController(AppDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        [ProducesResponseType(StatusCodes.Status200OK, Type = typeof(Author))]
        [ProducesResponseType(StatusCodes.Status500InternalServerError)]
        public async Task<IActionResult> GetAuthors()
        {
            try
            {
                var list = await context.Authors.ToListAsync();
                return Ok(list);
            }
            catch
            {
                return this.Problem(
                    detail: "Wystapił_błąd_podczas_realizacji_tego_żadania",
                    title: "Błąd"
                );
            }
        }

        [HttpGet("{id}",Name="GetAuthor")]
        public async Task<IActionResult> GetAuthor(int id)
        {
            try
            {
                var author = await context.Authors.SingleOrDefaultAsync(a => a.Id == id);
                if (author == null)
                    return NotFound($"Nie_znalazłem_autora_o_id_=_{id}");
                else
                    return Ok(author);
            }
            catch
            {
                return this.Problem
                (
                    detail: "Wystąpił_błąd_podczas_realizacji_tego_żądania",
                    title: "Błąd"
                );
            }
        }

        [HttpPost]
        public async Task<IActionResult> InsertAuthor([FromBody] Author author)
        {
            if (!ModelState.IsValid)
                return BadRequest();
            try
            {
                context.Authors.Add(author);
                await context.SaveChangesAsync();
                return CreatedAtAction("GetAuthor", new {id = author.Id}, author);
            }
            catch(Exception)
            {
                return this.Problem
                (
                    detail: "Wystąpił_błąd_podczas_realizacji_tego_żądania",
                    title: "Błąd"
                );
            }
        }
    }
}