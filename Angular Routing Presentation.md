## What is Angular routing?

- Angular routing allows users of your Angular web application to navigate to particular locations in your application by changing the URL. 

## What are some benefits of using routing?

- No "broken" back/forward buttons. The user can navigate from one view of the app to another view of the app by using the browser's back/forward buttons.
- Users can "bookmark" the route urls. For example, the user might want to run a report that contains a specific date and other configurations. The user could bookmark that url and then when they log in to the application, they can run that url.

## What module(s) do I need to be able to implement routing in Angular?

- Import `RouterModule`, which contains the logic for routing.
- Configure `RouterModule` from within the app-routing.module.ts file.
(see app-routing.module.ts)

## How do I include the router in my web application template?

- Use the `<router-outlet>` element. Typically this element would be implemented in the app.component.html file.
- The components will load into the `<router-outlet>` section when the router navigates.
- (see app.component.html)

## How do I use the router to navigate?
 
- Use the `routerLink` attribute on html tags to link the tag to a route.
- Example:
  ```
  <nav>
    <a class="button" routerLink="/spiders">Spiders</a>
    <a class="button" routerLink="/people">People</a>
  </nav>
  ```
- (see app.component.html)

## How do I highlight the current route?
 
 - Use the `routerLinkActive` attribute to specify the CSS class to apply to the current active route.
 - Example:

```
<nav>
    <a class="button" routerLink="/spiders" routerLinkActive="activebutton">Spiders</a> 
    <a class="button" routerLink="/people" routerLinkActive="activebutton">People</a>
</nav>	
```
- (see app.component.html)

## How can I use the router to redirect users?
 
- Use the `redirectTo` option in the RouterModule configuration.
- (see app-routing.module.ts)

## How do I redirect users to an error page when they select an invalid route?
 
- If a user navigates to a route that does not exist, you can redirect them to a "404 page" by using the `**` wildcard in the `RouterModule` configuration.
- (see app-routing.module.ts)

## How do I programmatically navigate and pass parameters to specific routes?

- Use the `ActivatedRoute` object of the `RouterModule`.
- (see src/app/spider-detail/spider-detail.component.ts)

## Resources

- Angular Routing tutorial: https://angular.io/guide/router-tutorial
- Angular development environment setup: https://angular.io/guide/setup-local