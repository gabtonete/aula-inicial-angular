import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilhoComponent } from './filho.component';

describe('FilhoComponent', () => {
  let component: FilhoComponent;
  let fixture: ComponentFixture<FilhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilhoComponent]
    });
    fixture = TestBed.createComponent(FilhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
