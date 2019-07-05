using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Net.Http.Headers;

namespace Rpc.Web.Controllers
{
    [Route("api/[controller]/[action]")]
    public class SampleDataController : Controller
    {
        private static byte[] _uploadedFile = null;
        private static string _fileName = null;
        private static string _contentType = null;
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

        [HttpPost]
        public void Upload(IFormFile file)
        {
            using (var ms = new MemoryStream())
            {
                file.CopyToAsync(ms);
                _uploadedFile = ms.ToArray();
                _fileName = file.FileName;
                _contentType = file.ContentType;
            }
        }

        [HttpGet]
        public IActionResult Save()
        {
            if (_uploadedFile == null)
                return new BadRequestResult();
            Response.Headers[HeaderNames.ContentDisposition] = $"inline; filename={_fileName}";
            return File(_uploadedFile, _contentType);
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
