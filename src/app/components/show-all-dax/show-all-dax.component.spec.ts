import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllDaxComponent } from './show-all-dax.component';

describe('ShowAllDaxComponent', () => {
  let component: ShowAllDaxComponent;
  let fixture: ComponentFixture<ShowAllDaxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowAllDaxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllDaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
