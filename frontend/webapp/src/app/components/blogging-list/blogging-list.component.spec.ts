import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloggingListComponent } from './blogging-list.component';

describe('BloggingListComponent', () => {
  let component: BloggingListComponent;
  let fixture: ComponentFixture<BloggingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloggingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloggingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
