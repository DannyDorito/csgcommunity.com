import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ARMA3RestartScriptComponent } from '../app/arma3-restart-script/arma3-restart-script.component';

describe('ARMA3RestartScriptComponent', () => {
  let component: ARMA3RestartScriptComponent;
  let fixture: ComponentFixture<ARMA3RestartScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ARMA3RestartScriptComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ARMA3RestartScriptComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should call redirect method on initialization', () => {
    const spy = spyOn(component, 'redirect');
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('should set window.location.href correctly', () => {
    const url = 'https://github.com/DannyDorito/ARMA-3-Startup-and-Restart-Script';
    spyOnProperty(window.location, 'href', 'set');
    component.redirect();
    expect(window.location.href).toBe(url);
  });
});
