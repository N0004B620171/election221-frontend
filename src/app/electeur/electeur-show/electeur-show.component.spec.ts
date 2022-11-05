import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecteurShowComponent } from './electeur-show.component';

describe('ElecteurShowComponent', () => {
  let component: ElecteurShowComponent;
  let fixture: ComponentFixture<ElecteurShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElecteurShowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElecteurShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
