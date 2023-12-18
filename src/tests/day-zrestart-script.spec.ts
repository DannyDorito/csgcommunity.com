import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DayZRestartScriptComponent } from '../app/day-zrestart-script/day-zrestart-script.component';

describe('DayZRestartScriptComponent', () => {
  let component: DayZRestartScriptComponent;
  let fixture: ComponentFixture<DayZRestartScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayZRestartScriptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayZRestartScriptComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct selector', () => {
    expect(fixture.debugElement.nativeElement.tagName.toLowerCase()).toBe('app-day-zrestart-script');
  });

  it('should redirect on init', () => {
    const url = 'https://github.com/DannyDorito/DayZ-Startup-and-Restart-Script';
    spyOnProperty(window.location, 'href', 'set');
    component.redirect();
    expect(window.location.href).toBe(url);
  });
});
