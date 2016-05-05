# L4-challenge

Run:

```
npm install
npm run start
```

go to `http://localhost:8000`

Task:

Display the conditions, and min and max temperature for the next five days, as served from Dark Sky's API. API docs and registration available at:

https://developer.forecast.io/

Be free in your choice of technologies to present the data. We're looking for clearly written, concise code. Feel free to explain your thinking in comments, and to stretch your design muscles.  How developers write code says a lot about them, so this is a chance to show your skills and style!

Approach:

I didn't want to over engineer this since it seems like such a simple task. The only frontend dependencies are momentjs, weather-icons, and bootstrap 4. However, I'm currently loving es6 so there is a build step that uses babel. I included the bundle so there's no need to build (I recognize that the bundle would be built during a deployment, but I didn't want there to be any build problems).

There is a `gulp serve` task to proxy requests to the darksky API. This is done for two reasons: A) The api supports only HTTPS requests, so requests made from the page itself (served over HTTP) will be blocked by the browser, B) its bad practice to expose your API keys on the client.

Although its kind of rare that I implement tables, the data lends itself to a table pretty well. Its gets a little wonky on mobile, but I adjusted some padding to try and accommodate all the data nicely. I found a neat weather icon library and made heavy use of that. The requirements didn't call for any interactivity but I really wanted to use more icons so I made a hidden section that reveals on click.

Some of the modules have JSDocs, mainly just the ones that are meant to be consumed. 

Browser Support:

Geolocation (http://caniuse.com/#feat=geolocation) and `fetch` (http://caniuse.com/#feat=fetch) are required. `fetch` is the tricky one since its only supported by Chrome and Firefox, but I wanted to use more forward looking features in the challenge instead of getting the most browser support. For more browser support I would switch to clunky XHR or $.ajax. 

Where to take if from here:

* Unit tests
* Better design (maybe with location text input)