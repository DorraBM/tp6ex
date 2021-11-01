import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedLivreComponent } from './selected-livre.component';

describe('SelectedLivreComponent', () => {
  let component: SelectedLivreComponent;
  let fixture: ComponentFixture<SelectedLivreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedLivreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedLivreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
