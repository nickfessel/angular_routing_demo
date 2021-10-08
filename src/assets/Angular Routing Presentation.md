
# _Angular 12 Routing_
![Angular Routing](router.jpg)
(image from https://www.infinitytools.com/blog/2016/05/25/how-to-cut-miter-joints-at-the-router-table/)

## Demo

- The app demonstrates the implementation of some basic Angular routing concepts. 
- The app is written using Angular 12. 
- The app contains test scripts that can be run from the command line using `ng test`.
- The data shown in the demo tables is loaded by using Angular's RxJs module to call a minimal API. The minimal API is written in .Net 6 using Visual Studio 2022 Version 17.0.0 Preview 4.1.
- Tabulator version 4.9.3 is used to generate the tables.

## What is Angular routing?

- Angular routing allows users of your Angular web application to navigate to particular locations in your application by changing the URL. 

## What are some benefits of using routing?

- No "broken" back/forward buttons. The user can navigate from one view of the app to another view of the app by using the browser's back/forward buttons.
- Users can "bookmark" the route urls. For example, the user might want to run a report that contains a specific date and other configurations. The user could bookmark and then run that url without having to configure any settings besides logging in to the application.

## But isn't this just doing a full "page reload"?

- No. When using the `<router-outlet>` and Angular's routing capabilities, Angular will replace the content of the `<router-outlet>` without resulting in a page reload.
- (open Chrome DevTools and watch the Network tab - the only traffic occurring is the calls to the minimal API and the calls to get the spider images. Click the refresh button on the browser tab to do a complete reload for comparison)

## What module(s) do I need to be able to implement routing in Angular?

- Import `RouterModule`, which contains the logic for routing.
- Configure `RouterModule` from within the app-routing.module.ts file.
- (see src/app/app-routing.module.ts)

## How do I include the router in my web application template?

- Use the `<router-outlet>` element. This element can be implemented in the app.component.html file.
- The components will load into the `<router-outlet>` section when the router navigates.
- (see src/app/app.component.html)

## How do I use the router to navigate from html?
 
- Use the `routerLink` attribute on html tags to link the tag to a route.
- Example:
  ```
  <nav>
    <a class="button" routerLink="/spiders">Spiders</a>
    <a class="button" routerLink="/people">People</a>
  </nav>
  ```
- (see src/app/app.component.html)

## How do I highlight the current route?
 
 - Use the `routerLinkActive` attribute to specify the CSS class to apply to the current active route.
 - Example:

```
<nav>
    <a class="button" routerLink="/spiders" routerLinkActive="activebutton">Spiders</a> 
    <a class="button" routerLink="/people" routerLinkActive="activebutton">People</a>
</nav>	
```
- (see src/app/app.component.html and src/app/app.component.css)

## How can I use the router to redirect users?
 
- Use the `redirectTo` option in the RouterModule configuration.
- (see src/app/app-routing.module.ts)

## How do I redirect users to an error page when they select an invalid route?
 
- If a user navigates to a route that does not exist, you can redirect them to a "404 page" by using the `**` wildcard in the `RouterModule` configuration.
- (see src/app/app-routing.module.ts)

## How do I programmatically navigate and pass parameters to specific routes?

- Use the `ActivatedRoute` object of the router module.
- (see src/app/spider-detail/spider-detail.component.ts)

# Questions?

## Some other Angular 12 stuff we can discuss if there is extra time
- Commenting the code (see src/app/shared/tabulator.service.ts)
- Dependency-injection (see constructor in src/app/spider-detail/spider-detail.component.ts)
- `ng test` command
- Type safety (TypeScript) (rename variables and functions and see what happens)
- CSS scoping

## Resources

- Angular routing tutorial: https://angular.io/guide/router-tutorial
- Angular development environment setup: https://angular.io/guide/setup-local
- Link to this demo project: https://github.com/nickfessel/angular_routing_demo/tree/develop

![node modules](node_modules.jpg)

#### All written content and spider images come from Wikipedia.org.