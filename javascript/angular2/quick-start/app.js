import {Component, View, bootstrap} from 'angular2/angular2';

// Annotation section
@Component({
  selector: 'my-app'
})
@View({
  inline: '<h1>Hello {{ name }}</h1>'
})
// Component controller
class MyAppComponent {
  constructor() {
    this.name = 'World'
  }
}
bootstrap(MyAppComponent)