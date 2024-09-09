import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranslateCompComponent } from './translate-comp.component';

describe('TranslateCompComponent', () => {
  let component: TranslateCompComponent;
  let fixture: ComponentFixture<TranslateCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateCompComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TranslateCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
