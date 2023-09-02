import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpCallsComponent } from './http-calls.component';

describe('HttpCallsComponent', () => {
  let component: HttpCallsComponent;
  let fixture: ComponentFixture<HttpCallsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HttpCallsComponent]
    });
    fixture = TestBed.createComponent(HttpCallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
