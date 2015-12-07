using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using HelloJenkins;

namespace HelloJenkinsTests
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            Assert.AreEqual("Hello Jenkins", Program.CreateMessage());
        }
    }
}
