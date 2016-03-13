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
        public Result Get(int page, int limit)
        {
            Result _result = new Result();
            List<Article> articles = new List<Article>();
            try
            {
                articles = dbContext.Articles.OrderByDescending(x => x.Created.Value).Take(limit).Skip(page).ToList();
                _result.data = articles;
                _result.code = 200;
                _result.message = "Success";
            }
            catch (Exception ex)
            {
                _result.code = 500;
                _result.message = ex.ToString();
            }            
            return _result;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Result Get(int id)
        {
            Result _result = new Result();
            Article article = new Article();
            try
            {
                article = dbContext.Articles.FirstOrDefault(x => x.Id == id);
                _result.data = article;
                _result.code = 200;
                _result.message = "Success";
            }
            catch (Exception ex)
            {
                _result.code = 500;
                _result.message = ex.ToString();
            }
            return _result;
        }

        // POST api/values
        [HttpPost]
        public Result Post([FromBody]string title, [FromBody]string description, [FromBody]string content, [FromBody]string image)
        {
            Result _result = new Result();
            try
            {                
                Article article = new Article();
                article.Created = new DateTime();
                article.Title = title;
                article.Description = description;
                article._Content = content;
                article.Image = image;
                dbContext.Articles.Add(article);
                dbContext.SaveChanges();
                _result.code = 200;
                _result.message = "Success";
            } 
            catch (Exception ex)
            {
                _result.code = 500;
                _result.message = ex.ToString();
            }
            return _result;
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public Result Put(int id, string title, [FromBody]string description, [FromBody]string content, [FromBody]string image)
        {
            Result _result = new Result();
            try
            {
                Article article = dbContext.Articles.FirstOrDefault(x => x.Id == id);
                if (article != null)
                {
                    article.Created = new DateTime();
                    article.Title = title;
                    article.Description = description;
                    article._Content = content;
                    article.Image = image;
                    dbContext.Articles.Add(article);
                    dbContext.SaveChanges();
                    _result.code = 200;
                    _result.message = "Success";
                }
                else
                {
                    _result.code = 500;
                    _result.message = "Article does not exitst.";
                }
            }
            catch (Exception ex)
            {
                _result.code = 500;
                _result.message = ex.ToString();
            }
            return _result;
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public Result Delete(int id)
        {
            Result _result = new Result();
            try
            {
                Article article = new Article();
                article = dbContext.Articles.FirstOrDefault(x => x.Id == id);
                if (article != null)
                {
                    dbContext.Articles.Remove(article);
                    dbContext.SaveChanges();
                    _result.code = 200;
                    _result.message = "Success";
                }
                else
                {
                    _result.code = 500;
                    _result.message = "Article does not exitst.";
                }
            }
            catch (Exception ex)
            {
                _result.code = 500;
                _result.message = ex.ToString();
            }
            return _result;
        }
    }
}
