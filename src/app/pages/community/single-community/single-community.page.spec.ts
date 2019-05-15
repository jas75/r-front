import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCommunityPage } from './single-community.page';

describe('SingleCommunityPage', () => {
  let component: SingleCommunityPage;
  let fixture: ComponentFixture<SingleCommunityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCommunityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCommunityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
