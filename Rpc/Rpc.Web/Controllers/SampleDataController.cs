using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace Rpc.Web.Controllers
{
    [Route("api/[controller]/[action]")]
    public class SampleDataController : Controller
    {
        [HttpGet]
        public IEnumerable<MySampleModel> GetSomeData()
        {
            var rng = new Random();
            return Enumerable.Range(1, 10).Select(index => new MySampleModel
            {
                SomeString = index.ToString(),
                SomeDateTime = DateTime.Now,
                SomeDateTimeOffset = DateTimeOffset.Now,
                SomeEnum = MyEnum.Second,
                SomeFlagsEnum = MyFlagsEnum.Fourth,
                SomeInt = index,
            });
        }

        [HttpPost]
        public Task DoSomething([FromBody]MySampleModel request)
        {
            return Task.CompletedTask;
        }

        [HttpPost]
        public void DoSomethingElse()
        {
        }

        public enum MyEnum
        {
            First = 1,
            Second = 2,
            Third = 3,
        }

        [Flags]
        public enum MyFlagsEnum
        {
            First = 1,
            Second = 2,
            Third = 4,
            Fourth = 8,
            Fifth = 16,
        }

        public class MySampleModel
        {
            public string SomeString { get; set; }
            public DateTime SomeDateTime { get; set; }
            public DateTimeOffset SomeDateTimeOffset { get; set; }
            public int SomeInt { get; set; }
            public MyEnum SomeEnum { get; set; }
            public MyFlagsEnum SomeFlagsEnum { get; set; }
        }
    }
}
