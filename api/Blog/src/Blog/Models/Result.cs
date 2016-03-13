using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Blog.Models
{
    public class Result
    {
        public int code { get; set; }
        public string message { get; set; }
        public dynamic data { get; set; }
    }
}
