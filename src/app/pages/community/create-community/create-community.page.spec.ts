import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCommunityPage } from './create-community.page';

describe('CreateCommunityPage', () => {
  let component: CreateCommunityPage;
  let fixture: ComponentFixture<CreateCommunityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCommunityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCommunityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
