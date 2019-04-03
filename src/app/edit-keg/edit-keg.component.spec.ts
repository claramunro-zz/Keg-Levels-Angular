import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKegComponent } from './edit-keg.component';

describe('EditKegComponent', () => {
  let component: EditKegComponent;
  let fixture: ComponentFixture<EditKegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditKegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditKegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
