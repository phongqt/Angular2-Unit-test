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
        public DbSet<User> Users { get; set; }
        public DbSet<Member> Members { get; set; }
        public DbSet<Comment> Comments { get; set; }
    }
}
