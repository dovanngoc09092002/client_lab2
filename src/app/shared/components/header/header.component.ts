import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { LoginService } from '../../services/login.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NzLayoutModule , HttpClientModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private loginService: LoginService) {}
  ngOnInit(): void {
    // this.LoginFaceBookComponent();
  }

  LoginFaceBookComponent() {
    this.loginService.loginWithFacebook().subscribe(
      (data) => {
        console.log('this is data', data);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
