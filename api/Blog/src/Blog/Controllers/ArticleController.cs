using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Microsoft.Data.Entity;
using Blog.Models;
using Microsoft.AspNet.Cors;
using Microsoft.AspNet.Http;
using Blog.Services;
using System.Linq;
// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Blog.Controllers
{
    [EnableCors("AllowAll")]
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
                page--;
                ResultExt resultExt = new ResultExt();
                resultExt.totalPages = dbContext.Articles.Count() / limit + 1;
                var articleList = (from _article in dbContext.Articles.OrderByDescending(x=>x.Created).Skip(page * limit).Take(limit)
                                   join _user in dbContext.Users on _article.UserId.Value equals _user.Id
                                   select new ArticleExt{ Id = _article.Id, Title = _article.Title, Description= _article.Description, Image = _article.Image, Created = _article.Created, _Content = _article._Content, Author = _user.FirstName + ' ' + _user.LastName});
                resultExt.data = articleList;
                _result.data = resultExt;
                _result.success = true;
                _result.message = "Success";
            }
            catch (Exception ex)
            {
                _result.success = false;
                _result.message = ex.ToString();
            }            
            return _result;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Result Get(int id)
        {
            Result _result = new Result();            
            try
            {
                var tmp = HttpContext.Session.GetObjectFromJson<User>("admin");
                //article = dbContext.Articles.FirstOrDefault(x => x.Id == id);
                var article = (from _article in dbContext.Articles
                 join _user in dbContext.Users on _article.UserId.Value equals _user.Id
                 where _article.Id == id
                 select new ArticleExt { Id = _article.Id, Title = _article.Title, Description = _article.Description, Image = _article.Image, Created = _article.Created, _Content = _article._Content, Author = _user.FirstName + ' ' + _user.LastName }).FirstOrDefault();
                _result.data = article;
                _result.success = true;
                _result.message = "Success";
            }
            catch (Exception ex)
            {
                _result.success = false;
                _result.message = ex.ToString();
            }
            return _result;
        }

        // POST api/values
        [HttpPost]
        public Result Post(string title, string description, string content, string image)
        {
            Result _result = new Result();
            try
            {
                //var session = HttpContext.Session.GetObjectFromJson<User>("admin");
                //if (session != null)
                //{
                    Article article = new Article();
                    article.Created = DateTime.Today;
                    article.Title = title;
                    article.Description = description;
                    article._Content = content;
                    article.Image = image;
                    article.UserId = 1;
                    dbContext.Articles.Add(article);
                    dbContext.SaveChanges();
                    _result.success = true;
                    _result.message = "Success";
                //}
                //else
                //{
                //    _result.success = false;
                //    _result.message = "forbidden";
                //}
            } 
            catch (Exception ex)
            {
                _result.success = false;
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
                    _result.success = true;
                    _result.message = "Success";
                }
                else
                {
                    _result.success = false;
                    _result.message = "Article does not exitst.";
                }
            }
            catch (Exception ex)
            {
                _result.success = false;
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
                    _result.success = true;
                    _result.message = "Success";
                }
                else
                {
                    _result.success = false;
                    _result.message = "Article does not exitst.";
                }
            }
            catch (Exception ex)
            {
                _result.success = false;
                _result.message = ex.ToString();
            }
            return _result;
        }
    }
}
