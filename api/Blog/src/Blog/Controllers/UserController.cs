using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Mvc;
using Blog.Models;
using Microsoft.AspNet.Cors;
using Microsoft.AspNet.Http;
using Blog.Services;
using Microsoft.AspNet.Identity;
using Microsoft.AspNet.Authorization;
// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Blog.Controllers
{
    [EnableCors("AllowAll")]
    [Route("api/[controller]/[action]")]
    public class UserController : Controller
    {
        private readonly SignInManager<ApplicationUser> _signInManager;
        private BloggingContext dbContext = new BloggingContext();
        public UserController(BloggingContext db, SignInManager<ApplicationUser> signInManage)
        {
            this.dbContext = db;
            this._signInManager = signInManage;
        }
        // GET: api/values
        [HttpGet]
        public Result Get(int page, int limit)
        {
            Result _result = new Result();
            List<User> users = new List<User>();
            try
            {
                page--;
                users = dbContext.Users.OrderByDescending(x => x.Id).Skip(page*limit).Take(limit).ToList();
                _result.data = users;
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
            User user = new User();
            try
            {
                user = dbContext.Users.FirstOrDefault(x => x.Id == id);
                _result.data = user;
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
                    _result.success = true;
                    _result.message = "Success";
                }
                else
                {
                    _result.success = false;
                    _result.message = "User does not exitst.";
                }
            }
            catch (Exception ex)
            {
                _result.success = false;
                _result.message = ex.ToString();
            }
            return _result;
        }

        //Login
        [HttpGet]
        public Result  Login(string username, string password)
        {
            Result _result = new Result();
            try
            {
                var tmp = HttpContext.User;
                User user = new User();
                user = dbContext.Users.FirstOrDefault(x => x.UserName == username && x.Password == password);
                if (user != null)
                {
                    _result.success = true;
                    user.Password = null;
                    _result.data = user;
                    _result.message = "Success";
                    //HttpContext.Session.SetObjectAsJson("admin", user);
                    var result = _signInManager.PasswordSignInAsync(username, password, true, lockoutOnFailure: false);
                    
                }
                else
                {
                    _result.success = false;
                    _result.message = "Incorrect username or password";
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
