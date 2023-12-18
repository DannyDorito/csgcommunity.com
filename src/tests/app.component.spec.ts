import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { AppComponent } from '../app/app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let snackBar: MatSnackBar;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      providers: [ MatSnackBar, MatIconRegistry, DomSanitizer ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    snackBar = TestBed.inject(MatSnackBar);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with correct default values', () => {
    expect(component.isExpanded).toBe(false);
    expect(component.animating).toBe(false);
  });

  it('should start animation', () => {
    component.start();
    expect(component.animating).toBe(true);
  });

  it('should stop animation', () => {
    component.done();
    expect(component.animating).toBe(false);
  });

  it('should open snack bar', () => {
    const spy = spyOn(snackBar, 'open');
    component.openSnackBar('Test message', 'Test action');
    expect(spy).toHaveBeenCalledWith('Test message', 'Test action');
  });

  it('should call tick when animating', () => {
    const spy = spyOn(window, 'requestAnimationFrame');
    component.start();
    component.tick();
    expect(spy).toHaveBeenCalled();
  });

  it('should not call tick when not animating', () => {
    const spy = spyOn(window, 'requestAnimationFrame');
    component.done();
    component.tick();
    expect(spy).not.toHaveBeenCalled();
  });

  it('should show offline warning when navigator is offline', () => {
    const spy = spyOn(component, 'openSnackBar');
    Object.defineProperty(navigator, 'onLine', {value: false});
    component.ngOnInit();
    expect(spy).toHaveBeenCalledWith('You are offline, website usage is limited! 🌐', 'Okay');
  });
});
