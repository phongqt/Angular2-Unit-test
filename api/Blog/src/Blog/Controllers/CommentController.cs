using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Blog.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Blog.Controllers
{
    [Route("api/[controller]")]
    public class CommentController : Controller
    {
        private BloggingContext dbContext = new BloggingContext();
        public CommentController(BloggingContext db)
        {
            this.dbContext = db;
        }
        // GET api/values/5
        [HttpGet("{id}")]
        public Result GetCommentByArticle(int id)
        {
            Result _result = new Result();
            List<Comment> comments = new List<Comment>();
            try
            {
                comments = dbContext.Comments.Where(x=>x.ArticleId == id).ToList();
                _result.data = comments;
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
        public Result Post(int id,[FromBody]string content)
        {
            Result _result = new Result();
            Comment comment = new Comment();
            try
            {
                comment.ArticleId = id;
                comment.Created = DateTime.Today;
                comment._Content = content;
                dbContext.Comments.Add(comment);
                dbContext.SaveChanges();
                _result.data = comment;
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

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public Result Delete(int id)
        {
            Result _result = new Result();
            try
            {
                Comment comment = new Comment();
                comment = dbContext.Comments.FirstOrDefault(x => x.Id == id);
                if (comment != null)
                {
                    dbContext.Comments.Remove(comment);
                    dbContext.SaveChanges();
                    _result.success = true;
                    _result.message = "Success";
                }
                else
                {
                    _result.success = false;
                    _result.message = "Comment does not exitst.";
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
