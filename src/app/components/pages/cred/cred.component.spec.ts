import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CredComponent } from './cred.component';

describe('CredComponent', () => {
  let component: CredComponent;
  let fixture: ComponentFixture<CredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
