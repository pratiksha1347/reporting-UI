import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementCreateFormComponent } from './agreement-create-form.component';

describe('AgreementCreateFormComponent', () => {
  let component: AgreementCreateFormComponent;
  let fixture: ComponentFixture<AgreementCreateFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgreementCreateFormComponent]
    });
    fixture = TestBed.createComponent(AgreementCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
