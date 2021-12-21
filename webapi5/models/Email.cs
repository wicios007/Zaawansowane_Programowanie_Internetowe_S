
using System.Text.Json.Serialization;

namespace webapi5.models
{
	public class Email
	{
		public int EmailId { get; set; }
		public string EmailString { get; set; }
		public int AuthorId { get; set; }
		[JsonIgnore]
		public Author Author { get; set; }
	}
}