using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Restful.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SampleController : ControllerBase
    {
        // GET: api/Sample
        [HttpGet]
        public IEnumerable<MySampleModel> Get()
        {
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

        // GET: api/Sample/5
        [HttpGet("{id}")]
        public MySampleModel Get(int id)
        {
            return new MySampleModel
            {
                SomeString = id.ToString(),
                SomeDateTime = DateTime.Now,
                SomeDateTimeOffset = DateTimeOffset.Now,
                SomeEnum = MyEnum.Second,
                SomeFlagsEnum = MyFlagsEnum.Fourth,
                SomeInt = id,
            };
        }

        // POST: api/Sample
        [HttpPost]
        public void Post([FromBody] MySampleModel value)
        {
        }

        // PUT: api/Sample/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] MySampleModel value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
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
