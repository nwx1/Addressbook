import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DxDataGridModule } from 'devextreme-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DxDataGridModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'addressbook';

  data = [
    {
      id: '1',
      name: 'nwx1',
      address: 'Shah Alam',
      contact: '123-456-789',
    },
    {
      id: '2',
      name: 'nwx2',
      address: 'Petaling Jaya',
      contact: '123-456-789',
    },
    {
      id: '3',
      name: 'nwx3',
      address: 'Klang',
      contact: '123-456-789',
    },
    {
      id: '4',
      name: 'nwx4',
      address: 'Klang',
      contact: '123-456-789',
    },
    {
      id: '5',
      name: 'nwx5',
      address: 'Damansara Utama',
      contact: '123-456-789',
    }
  ];
}
