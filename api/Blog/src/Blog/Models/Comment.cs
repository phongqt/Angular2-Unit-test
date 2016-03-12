using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Models
{
    public class Comment
    {
        public int Id { get; set; }
        public string _Content { get; set; }
        public Nullable<DateTime> Created { get; set; }
        public Nullable<int> MemberId { get; set; }
        public Nullable<int> ArticleId { get; set; }
    }
}
