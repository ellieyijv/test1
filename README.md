
#Explanation

For the HTTP request, my previous experience was organizing the APIs in one place, to check the conditions, I haven't done it in here(not sure how to deal with the JSON file), I comment on the explanations of this Axios request, those function code all work:

//These are the explainations of challenges
// axios.get('/user?ID=12345')
//   .then(function (response) {
//      this.loadData()
//   })
//   .catch(function (error) {
//      //show the retry button
//      this.retryButton = ture;
//   })
//   .then(function () {
//      //stop loading, no matter the situations, all stop the loading spinner
//      this.loadingService.requestEnded()
//   });
For better code management, we should put 'loading server' and 'jsons server' to the shared folder, but I haven't done it yet.

Haven't implemented the gradient of the header, and all images.

# Ng5

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
