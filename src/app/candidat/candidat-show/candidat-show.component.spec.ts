import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatShowComponent } from './candidat-show.component';

describe('CandidatShowComponent', () => {
  let component: CandidatShowComponent;
  let fixture: ComponentFixture<CandidatShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CandidatShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CandidatShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
