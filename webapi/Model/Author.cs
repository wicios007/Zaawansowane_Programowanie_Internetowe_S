using System.Collections.Generic;

namespace webapi.Models
{
    public class Author
    {
        public int Id{get;set;}
        public string FirstName{get;set;}
        public string LastName{get;set;}
        public List<Email> Emails{get;set;}
    }
}