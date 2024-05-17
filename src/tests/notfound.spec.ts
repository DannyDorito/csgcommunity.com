import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NotfoundComponent } from '../app/notfound/notfound.component';

describe( 'NotfoundComponent', () =>
{
  let component: NotfoundComponent;
  let fixture: ComponentFixture<NotfoundComponent>;

  beforeEach( async () =>
  {
    await TestBed.configureTestingModule( {
      declarations: [ NotfoundComponent ]
    } )
      .compileComponents();

    fixture = TestBed.createComponent( NotfoundComponent );
    component = fixture.componentInstance;
  } );

  it( 'should create the component', () =>
  {
    expect( component ).toBeTruthy();
  } );

  it( 'should have the correct selector', () =>
  {
    expect( fixture.debugElement.nativeElement.tagName.toLowerCase() ).toBe( 'app-notfound' );
  } );
} );
