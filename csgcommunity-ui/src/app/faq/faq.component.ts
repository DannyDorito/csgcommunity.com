import { Component, OnInit } from '@angular/core';
import { FaqService } from './faq.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css', '../app.component.css']
})
export class FaqComponent implements OnInit {
  faqs: string[];
  constructor(private faqService: FaqService) {}
  ngOnInit() {

  }
}

export class FAQS {
  question: string[];
  answer: string[];
  constructor(
    _question: string[],
    _answer: string[]
  ) {
    this.question = _question;
    this.answer = _answer;
  }
}
