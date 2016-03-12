using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Microsoft.Data.Entity;
using Blog.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Blog.Controllers
{
    [Route("api/[controller]")]
    public class ArticleController : Controller
    {
        private BloggingContext dbContext = new BloggingContext();
        public ArticleController(BloggingContext db)
        {
            this.dbContext = db;
        }
        // GET: api/values
        [HttpGet]
        public List<Article> Get(int page, int limit)
        {
            List<Article> articles = new List<Article>();
            articles = dbContext.Articles.OrderBy(x => x.Created.Value).Take(limit).Skip(page).ToList();
            return articles;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Article Get(int id)
        {
            Article article = new Article();
            article = dbContext.Articles.FirstOrDefault(x => x.Id == id);
            return article;
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
