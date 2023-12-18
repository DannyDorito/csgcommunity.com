import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ServersComponent } from '../app/servers/servers.component';

describe('ServersComponent', () => {
  let component: ServersComponent;
  let fixture: ComponentFixture<ServersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServersComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct selector', () => {
    expect(fixture.debugElement.nativeElement.tagName.toLowerCase()).toBe('app-servers');
  });
});
