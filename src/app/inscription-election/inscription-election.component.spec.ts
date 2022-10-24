import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionElectionComponent } from './inscription-election.component';

describe('InscriptionElectionComponent', () => {
  let component: InscriptionElectionComponent;
  let fixture: ComponentFixture<InscriptionElectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionElectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
