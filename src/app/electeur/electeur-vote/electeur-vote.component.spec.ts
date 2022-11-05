import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecteurVoteComponent } from './electeur-vote.component';

describe('ElecteurVoteComponent', () => {
  let component: ElecteurVoteComponent;
  let fixture: ComponentFixture<ElecteurVoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElecteurVoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElecteurVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
