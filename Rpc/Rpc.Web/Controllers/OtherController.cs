using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Rpc.Web.Controllers
{
    [Route("api/[controller]/[action]")]
    public class OtherController : Controller
    {
        [HttpGet]
        public IEnumerable<MyOtherSampleModel> GetSomeData()
        {
            var rng = new Random();
            return Enumerable.Range(1, 10).Select(index => new MyOtherSampleModel
            {
                SomeString = index.ToString(),
                SomeDateTime = DateTime.Now,
                SomeInt = index,
            });
        }

        [HttpPost]
        public Task DoSomething([FromBody]MyOtherSampleModel request)
        {
            return Task.CompletedTask;
        }

        [HttpPost]
        public void DoSomethingElse()
        {
        }

        public class MyOtherSampleModel
        {
            public string SomeString { get; set; }
            public DateTime SomeDateTime { get; set; }
            public int SomeInt { get; set; }
        }
    }
}
