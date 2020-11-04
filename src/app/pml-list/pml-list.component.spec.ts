import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PMLListComponent } from './pml-list.component';

describe('PMLListComponent', () => {
  let component: PMLListComponent;
  let fixture: ComponentFixture<PMLListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PMLListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PMLListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
