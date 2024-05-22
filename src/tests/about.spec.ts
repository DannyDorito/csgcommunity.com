import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutComponent } from '../app/about/about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [AboutComponent]
})
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct selector', () => {
    expect(fixture.debugElement.nativeElement.tagName.toLowerCase()).toBe('app-about');
  });

  it('should load the template', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div')).toBeTruthy(); // replace 'div' with a selector from your template
  });

  it('should apply the CSS', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(window.getComputedStyle(compiled.querySelector('div')).getPropertyValue('your-css-property')).toBe('expected-value'); // replace 'div', 'your-css-property', and 'expected-value' with your actual values
  });
});
