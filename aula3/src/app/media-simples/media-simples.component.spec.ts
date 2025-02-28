import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaSimplesComponent } from './media-simples.component';

describe('MediaSimplesComponent', () => {
  let component: MediaSimplesComponent;
  let fixture: ComponentFixture<MediaSimplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediaSimplesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaSimplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
