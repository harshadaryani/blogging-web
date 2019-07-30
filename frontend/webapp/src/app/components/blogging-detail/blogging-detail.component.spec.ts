import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloggingDetailComponent } from './blogging-detail.component';

describe('BloggingDetailComponent', () => {
  let component: BloggingDetailComponent;
  let fixture: ComponentFixture<BloggingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloggingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloggingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
