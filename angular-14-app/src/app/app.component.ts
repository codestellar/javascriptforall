import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { JsonFormData } from './json-form/json-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-14-app';

  public formData: JsonFormData | undefined;
  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.http
      .get('/assets/my-form.json')
      .subscribe((formData: JsonFormData) => {
        this.formData = formData;
      });
  }
}
