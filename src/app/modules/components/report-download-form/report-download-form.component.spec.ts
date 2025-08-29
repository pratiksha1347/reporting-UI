import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDownloadFormComponent } from './report-download-form.component';

describe('ReportDownloadFormComponent', () => {
  let component: ReportDownloadFormComponent;
  let fixture: ComponentFixture<ReportDownloadFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReportDownloadFormComponent]
    });
    fixture = TestBed.createComponent(ReportDownloadFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
