import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloggingEditComponent } from './blogging-edit.component';

describe('BloggingEditComponent', () => {
  let component: BloggingEditComponent;
  let fixture: ComponentFixture<BloggingEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloggingEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloggingEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
