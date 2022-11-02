import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageElecteurComponent } from './page-electeur.component';

describe('PageElecteurComponent', () => {
  let component: PageElecteurComponent;
  let fixture: ComponentFixture<PageElecteurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageElecteurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageElecteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
