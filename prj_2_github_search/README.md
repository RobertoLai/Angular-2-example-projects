# Github search tool

A simple Angular2 applications for searching Github repositories.

Tested only in Chrome and Firefox.


## Installing

1. Go to https://github.com/settings/developers and register this application.
   In the registration form use http://localhost:3000 for the "Homepage URL" and "Authorization callback URL".
   This will give you a client_id and client_ secret for the OAuth authentication and should authorize
   5000 requests per hour instead of 60 (https://developer.github.com/v3/#rate-limiting)
2. Add the client_id and client_secret in the file app/services/github.service.ts

In a terminal/console Window from the directory containing the source code:

3. 'npm install' to resolve the dependencies
4. 'npm start' to launch the application

Notice that when you reach the max amount of API requests no results will be found, check the console in Chrome (Ctrl+Shift+I),
you will be getting API responses like this one:

    {
      "message": "API rate limit exceeded for XXX.XXX.XXX.XXX. (But here's the good news: Authenticated requests get a higher rate limit. Check out the documentation for more details.)",
      "documentation_url": "https://developer.github.com/v3/#rate-limiting"
    }

This application is very simple and don't manage this problem in a more user friendly way



## Other infos and Prerequisites

This application was created from the QuickStart application of Angular2 https://angular.io/docs/ts/latest/quickstart.html
