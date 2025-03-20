import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoModalComponent } from './contato-modal.component';

describe('ContatoModalComponent', () => {
  let component: ContatoModalComponent;
  let fixture: ComponentFixture<ContatoModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatoModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContatoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
