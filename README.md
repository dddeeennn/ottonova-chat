# OttonovaChat

Responsive web client for a Socket.IO chat server.
The project has following features:
 * login screen which accept any login and password
 * you can emit and receive messages and commands
 * widgets: date, map, rate, complete.
 


## Architecture overview

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.9.
The project built  with classic modular structure:

  - app
    - app
    - core
    - features
      - chat
      - login
      - errors
     - material
     - shared

Feature aggregates some kind of business domain e.g. "chat". Each feature may consist of a several pages. For such cases it would be good to aggreagate a feature pages in a sub folder. Chat module has follow structure:

  - components
    - widgets
      - map
      - date
      - rate
      - complete
    - chat-layout 
    - ... other presentational components
   - containers (includes smart components)
      - chat
   - models
   - chat.module.ts

If you want to extend this structure with Redux simply place actions, effects, reducer folders in that directory.

All feature modules is lazy loaded:

```
...
  {
    path: 'login',
    loadChildren: './features/login/login.module#LoginModule',
  },
...

```

Shared module contains reusable components:
- page-layout
- page-container
- header

A root feature component (smart container component) should be built on top this basic components. This components provide a basic application layout.

Core module contains a services and guards with singleton life style.

Core UI framework is Angular Material. It contains modern UI components that work across the web, mobile and desktop. Fast and consistent Angular Material optimized for Angular, so I selected that one

All communication between a component and API implemented through ChatService.
This service exposes possibility getting messages and commands through Observable<T> interfaces. 
So it's quite easy to add Redux for managing application state. 

Project contains app-config file with some settings.
Google map ApiKey placed for simplicity. That key haven't any allowances and map works only a few times per day. 

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
