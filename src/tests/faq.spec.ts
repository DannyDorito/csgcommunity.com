import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FaqComponent } from '../app/faq/faq.component';

describe('FaqComponent', () => {
  let component: FaqComponent;
  let fixture: ComponentFixture<FaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct selector', () => {
    expect(fixture.debugElement.nativeElement.tagName.toLowerCase()).toBe('app-faq');
  });
});
