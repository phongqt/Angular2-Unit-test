using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Models
{
    public class Article
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string _Content { get; set; }
        public Nullable<DateTime> Created { get; set; }
        public Nullable<int> UserId { get; set; }
    }
}
