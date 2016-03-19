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
    public class MemberController : Controller
    {
        private BloggingContext dbContext = new BloggingContext();
        public MemberController(BloggingContext db)
        {
            this.dbContext = db;
        }
        // GET: api/values
        [HttpGet]
        public Result Get(int page, int limit)
        {
            Result _result = new Result();
            List<Member> members = new List<Member>();
            try
            {
                members = dbContext.Members.OrderByDescending(x => x.Id).Take(limit).Skip(page).ToList();
                _result.data = members;
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
            Member member = new Member();
            try
            {
                member = dbContext.Members.FirstOrDefault(x => x.Id == id);
                _result.data = member;
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
                Member member = new Member();
                member = dbContext.Members.FirstOrDefault(x => x.Id == id);
                if (member != null)
                {
                    dbContext.Members.Remove(member);
                    dbContext.SaveChanges();
                    _result.success = true;
                    _result.message = "Success";
                }
                else
                {
                    _result.success = false;
                    _result.message = "Member does not exitst.";
                }
            }
            catch (Exception ex)
            {
                _result.success = false;
                _result.message = ex.ToString();
            }
            return _result;
        }
        public Result Login(string username, string password)
        {
            Result _result = new Result();
            try
            {
                Member member = new Member();
                member = dbContext.Members.FirstOrDefault(x => x.UserName == username && x.Password == password);
                if (member != null)
                {
                    _result.success = true;
                    _result.message = "Success";
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
