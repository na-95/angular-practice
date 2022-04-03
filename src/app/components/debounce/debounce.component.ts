import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observer } from 'rxjs';

@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.css']
})
export class DebounceComponent {

  constructor(private http: HttpClient) {}

  q: any;
  timeout: any;
  response: any;

  debounce() {
    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.fetchResults();
    }, 1000);
  }

  fetchResults() {
    let observer = {
      next: (res: any) => {
        this.response = res.data.items
      },
      error: (err: Error) => console.error('Observer got an error: ' + err),
      complete: () => console.log('Observer got a complete notification'),
    }
    this.http.get(`https://demo.dataverse.org/api/search?q=${this.q}`).subscribe(observer);
  }
  

}
