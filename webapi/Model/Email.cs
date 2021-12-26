using System.Text.Json.Serialization;

namespace webapi.Models
{
    public class Email
    {
        public int Id{get;set;}
        public string Address{get;set;}
        public int AuthorId{get;set;}
        [JsonIgnore]
        public virtual Author Author{get;set;}
    }
}