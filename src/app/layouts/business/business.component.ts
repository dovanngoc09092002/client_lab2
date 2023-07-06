import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from 'src/app/shared/components/header/header.component';
// import { MenuSidebarComponent } from '../../shared/components/menu-sidebar/menu-sidebar.component';

@Component({
  selector: 'ai-aide-app-business-layouts',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.scss'],
  imports: [RouterModule , HeaderComponent],
  standalone: true,
})
export class BusinessComponent {}
