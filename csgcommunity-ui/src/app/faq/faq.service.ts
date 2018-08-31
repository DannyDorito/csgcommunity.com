import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class FaqService {
  constructor(private http: HttpClient) { }

  loadJSON() {
    return this.http.get < JSON > (environment.baseUri + 'assets/faq.json');
  }
}
