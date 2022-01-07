using Microsoft.AspNetCore.Mvc;

namespace Kolokwium.Api.Controllers {
    
    [ApiController]
    [Route("api/[controller]")]
    public abstract class MainController : ControllerBase {
        protected ApplicationDbContext DbContext;

        public MainController(ApplicationDbContext dbContext)
        {
            DbContext = dbContext;
        }
    }
}