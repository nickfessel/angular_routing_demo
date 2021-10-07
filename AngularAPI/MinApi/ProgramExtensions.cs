using MinApi.person;
using MinApi.spider;

namespace MinApi
{
  public static class ProgramExtensions
  {
    public static WebApplicationBuilder GetBuilder(string[] args, string corsName)
    {
      var builder = WebApplication.CreateBuilder(args);
      builder.Services.AddSingleton<PersonService>(new PersonService());
      builder.Services.AddSingleton<SpiderService>(new SpiderService());
      builder.Services.AddCors(o => o.AddPolicy(corsName, builder =>
      {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
      }));
      return builder;
    }
  }
}
