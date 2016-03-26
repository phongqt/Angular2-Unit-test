using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using Microsoft.AspNet.Http;
using Microsoft.AspNet.Hosting;
using System.IO;
using Microsoft.Net.Http.Headers;
using Microsoft.AspNet.Cors;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Blog.Controllers
{

    [EnableCors("AllowAll")]
    [Route("api/[controller]")]
    public class FileController : Controller
    {
        private IHostingEnvironment _environment;

        public FileController(IHostingEnvironment environment)
        {
            this._environment = environment;
        }

        // GET: api/values
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public async void Post(IFormFile files)
        {
            var uploads = Path.Combine(_environment.WebRootPath, "uploads");
            //foreach (var file in files)
            //{
            //    if (file.Length > 0)
            //    {
            //        var fileName = ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"');
            //        await file.SaveAsAsync(Path.Combine(uploads, fileName));
            //    }
            //}
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
