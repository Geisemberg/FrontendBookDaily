import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaDeleteComponent } from './tarea-delete.component';

describe('TareaDeleteComponent', () => {
  let component: TareaDeleteComponent;
  let fixture: ComponentFixture<TareaDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareaDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareaDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
