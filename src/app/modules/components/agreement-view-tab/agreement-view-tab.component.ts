import {Component} from '@angular/core';

@Component({
  selector: 'app-agreement-view-tab',
  templateUrl: './agreement-view-tab.component.html',
  styleUrls: ['./agreement-view-tab.component.css']
})
export class AgreementViewTabComponent {
  agreementLabel: string = 'Create Agreement';
  reportLabel: string = 'Create Report';
  createAgreement: boolean = false;
  createReport: boolean = false;

  configColumn = [
    {
      label: 'Customer',
      type: 'string',
      columnKey: 'customer',
      columnId: 1,
      isVisible: true,
      mobileView: { isVisible: true, class: 'bold' },
      isDraggable: true,
      isSearchable: true,
      sortable: { isSortable: true },
      filter: { isRequired: true, isNullCheckRequired: false, isMultiselect: true, color: 'blue' }
    },
    {
      label: 'Expiry Date',
      type: 'date',
      dateFormat: 'dd-MMM-yyyy',
      columnKey: 'expiryDate',
      columnId: 2,
      isVisible: true,
      mobileView: { isVisible: false, class: '' },
      isDraggable: true,
      isSearchable: false,
      sortable: { isSortable: true },
      filter: { isRequired: false, isNullCheckRequired: true, isMultiselect: false, color: 'green' }
    },
    {
      label: 'Total SMS',
      type: 'number',
      columnKey: 'totalSMS',
      columnId: 3,
      isVisible: true,
      mobileView: { isVisible: true, class: '' },
      isDraggable: true,
      isSearchable: false,
      sortable: { isSortable: true },
      filter: { isRequired: false, isNullCheckRequired: true, isMultiselect: false, color: 'gray' }
    },
    {
      label: 'Used SMS',
      type: 'number',
      columnKey: 'usedSMS',
      columnId: 4,
      isVisible: true,
      mobileView: { isVisible: true, class: '' },
      isDraggable: true,
      isSearchable: false,
      sortable: { isSortable: true },
      filter: { isRequired: false, isNullCheckRequired: true, isMultiselect: false, color: 'red' }
    },
    {
      label: 'Auto Renewal',
      type: 'boolean',
      columnKey: 'autoRenewal',
      columnId: 5,
      isVisible: true,
      mobileView: { isVisible: true, class: '' },
      isDraggable: true,
      isSearchable: false,
      sortable: { isSortable: false },
      filter: { isRequired: false, isNullCheckRequired: true, isMultiselect: false, color: 'purple' }
    }
  ];

  tableData = [
    {
      id: 1,
      customer: 'ABC Pvt Ltd',
      expiryDate: '2025-12-31',
      totalSMS: 10000,
      usedSMS: 4500,
      autoRenewal: true,
      isEnable: true,
    },
    {
      id: 2,
      customer: 'XYZ Enterprises',
      expiryDate: '2025-10-15',
      totalSMS: 5000,
      usedSMS: 3000,
      autoRenewal: false,
      isEnable: true,
    },
    {
      id: 3,
      customer: 'Tech Solutions',
      expiryDate: '2026-01-05',
      totalSMS: 20000,
      usedSMS: 12000,
      autoRenewal: true,
      isEnable: true,
    },
    {
      id: 4,
      customer: 'Global Services',
      expiryDate: '2025-09-20',
      totalSMS: 15000,
      usedSMS: 15000,
      autoRenewal: false,
      isEnable: true,
    },
    {
      id: 5,
      customer: 'Smart Communications',
      expiryDate: '2026-03-12',
      totalSMS: 8000,
      usedSMS: 2000,
      autoRenewal: true,
      isEnable: true,
    }
  ];

  constructor() {
  }

  getCustomerData(){

  }

  onCloseModal() {
    this.createAgreement = false;
    this.createReport = false;
  }

  onAgreementClick() {
    this.createAgreement = true;
  }

  onReportClick() {
    this.createReport = true;
  }
}
