using System;
using NLog;

namespace Logging.NLog
{
    class Program
    {
        private static readonly Logger Logger = LogManager.GetCurrentClassLogger();

        static void Main(string[] args)
        {
            Logger.Trace("Entering main method");
            Logger.Debug("Debug message");
            Logger.Info("Info message");
            Logger.Warn("Warn message");
            Logger.Error("Error message");
            Logger.Error("Error message with exception {0} {1}", new DivideByZeroException(), "Toto");
            Logger.Fatal("Fatal message");
            Logger.Trace("Exiting main method");

            Console.ReadLine();
        }
    }
}
