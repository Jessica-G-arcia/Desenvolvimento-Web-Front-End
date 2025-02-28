import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetail1Component } from './post-detail1.component';

describe('PostDetail1Component', () => {
  let component: PostDetail1Component;
  let fixture: ComponentFixture<PostDetail1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostDetail1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDetail1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
