
using System.Collections.Generic;

namespace webapi5.models
{
	public class Author
	{
		public int AuthorId { get; set; }
		public string FirstName { get; set; }
		public string LastName { get; set; }
		public List<Email> Emails { get; set; }
	}

}