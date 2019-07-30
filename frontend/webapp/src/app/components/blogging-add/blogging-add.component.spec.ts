import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloggingAddComponent } from './blogging-add.component';

describe('BloggingAddComponent', () => {
  let component: BloggingAddComponent;
  let fixture: ComponentFixture<BloggingAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloggingAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloggingAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
