import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementViewTabComponent } from './agreement-view-tab.component';

describe('AgreementViewTabComponent', () => {
  let component: AgreementViewTabComponent;
  let fixture: ComponentFixture<AgreementViewTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgreementViewTabComponent]
    });
    fixture = TestBed.createComponent(AgreementViewTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
