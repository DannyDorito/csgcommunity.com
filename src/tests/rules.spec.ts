import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RulesComponent } from '../app/rules/rules.component';

describe('RulesComponent', () => {
  let component: RulesComponent;
  let fixture: ComponentFixture<RulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [RulesComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(RulesComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct selector', () => {
    expect(fixture.debugElement.nativeElement.tagName.toLowerCase()).toBe('app-rules');
  });

  it('should set lastViewedRules in localStorage on initialization', () => {
    const dateBeforeInit = new Date().getTime();
    component.ngOnInit();
    const lastViewedRules = Number(localStorage.getItem('lastViewedRules'));
    const dateAfterInit = new Date().getTime();

    expect(lastViewedRules).toBeDefined();
    expect(lastViewedRules).toBeGreaterThanOrEqual(dateBeforeInit);
    expect(lastViewedRules).toBeLessThanOrEqual(dateAfterInit);
  });
});
