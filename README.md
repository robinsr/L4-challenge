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

I didn't want to over engineer this since it seems like such a simple task. The only fontend dependencies are moment.js and weather-icons. However, I'm currently loving es6 things so there is a build step that uses babel. I included the bundle just in case there were any build problems.

There is also a gulp `serve` task to proxy requests to the darksky API. This is done for two reasons: A) The api supports only HTTPS requests, so requests made from the page itself (served over HTTP) will be blocked by the browser, B) its bad practice to expose your API keys on the client

TODOS:

* Reset fetch from mock-data back to api
* 