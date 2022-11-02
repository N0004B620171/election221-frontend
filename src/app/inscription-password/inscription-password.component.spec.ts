import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionPasswordComponent } from './inscription-password.component';

describe('InscriptionPasswordComponent', () => {
  let component: InscriptionPasswordComponent;
  let fixture: ComponentFixture<InscriptionPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
