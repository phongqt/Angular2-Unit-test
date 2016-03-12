using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.Entity;
namespace Blog.Models
{
    public class BloggingContext: DbContext
    {
        public DbSet<Article> Articles { get; set; }
    }
}
