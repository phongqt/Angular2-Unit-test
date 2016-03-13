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
    public class UserController : Controller
    {
        private BloggingContext dbContext = new BloggingContext();
        public UserController(BloggingContext db)
        {
            this.dbContext = db;
        }
        // GET: api/values
        [HttpGet]
        public Result Get(int page, int limit)
        {
            Result _result = new Result();
            List<User> users = new List<User>();
            try
            {
                users = dbContext.Users.OrderByDescending(x => x.Id).Take(limit).Skip(page).ToList();
                _result.data = users;
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
            User user = new User();
            try
            {
                user = dbContext.Users.FirstOrDefault(x => x.Id == id);
                _result.data = user;
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
        public Result Delete(int id)
        {
            Result _result = new Result();
            try
            {
                User user = new User();
                user = dbContext.Users.FirstOrDefault(x => x.Id == id);
                if (user != null)
                {
                    dbContext.Users.Remove(user);
                    dbContext.SaveChanges();
                    _result.code = 200;
                    _result.message = "Success";
                }
                else
                {
                    _result.code = 500;
                    _result.message = "User does not exitst.";
                }
            }
            catch (Exception ex)
            {
                _result.code = 500;
                _result.message = ex.ToString();
            }
            return _result;
        }

        //Login
        public Result Login(string username, string password)
        {
            Result _result = new Result();
            try
            {
                User user = new User();
                user = dbContext.Users.FirstOrDefault(x => x.UserName == username && x.Password == password);
                if (user != null)
                {
                    _result.code = 200;
                    _result.message = "Success";
                }
                else
                {
                    _result.code = 500;
                    _result.message = "Incorrect username or password";
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
