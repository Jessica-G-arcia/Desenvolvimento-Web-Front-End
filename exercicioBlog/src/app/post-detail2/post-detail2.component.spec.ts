import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDetail2Component } from './post-detail2.component';

describe('PostDetail2Component', () => {
  let component: PostDetail2Component;
  let fixture: ComponentFixture<PostDetail2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostDetail2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostDetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
