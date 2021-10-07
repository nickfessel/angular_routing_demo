using MinApi;
using MinApi.person;
using MinApi.spider;
using Microsoft.AspNetCore.Http;

const string CorsAllowAllTheThings = "_allowAllTheThings";

var app = ProgramExtensions.GetBuilder(args, CorsAllowAllTheThings).Build();
app.MapGet("/people", (HttpContext context, PersonService personService) => personService.Get());
app.MapGet("/spiders",(HttpContext context, SpiderService spiderService) => spiderService.Get());
app.MapGet("/spiders/{id}", (HttpContext context, SpiderService spiderService) => spiderService.GetDetails(Convert.ToInt32(context.Request.RouteValues["id"])));
app.UseCors(CorsAllowAllTheThings);
app.Run();
