
namespace webapi5.models
{
	public class Email
	{
		public int Id { get; set; }
		public string EmailString { get; set; }
		public int AuthorId { get; set; }
		public Author Author { get; set; }
	}

}