import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  summary = {
    total: 120,
    pending: 45,
    approved: 75,
  };

  orders = [
    {
      customer: 'John Doe',
      vendor: 'Vendor A',
      product: 'Product X',
      date: '14-04-2025',
      action: 'View',
    },
    {
      customer: 'Jane Smith',
      vendor: 'Vendor B',
      product: 'Product Y',
      date: '13-04-2025',
      action: 'View',
    },
    {
      customer: 'Alice Johnson',
      vendor: 'Vendor C',
      product: 'Product Z',
      date: '12-04-2025',
      action: 'View',
    },
  ];
}
