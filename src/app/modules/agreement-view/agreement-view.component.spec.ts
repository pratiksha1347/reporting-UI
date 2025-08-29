import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementViewComponent } from './agreement-view.component';

describe('AgreementViewComponent', () => {
  let component: AgreementViewComponent;
  let fixture: ComponentFixture<AgreementViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgreementViewComponent]
    });
    fixture = TestBed.createComponent(AgreementViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
