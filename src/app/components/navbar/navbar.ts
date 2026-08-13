import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faBox, faBriefcase, faCircleInfo, faEnvelope, faHouse, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, FontAwesomeModule, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  faHouse = faHouse;
  faCircleInfo = faCircleInfo;
  faEnvelope = faEnvelope;
  faBriefcase = faBriefcase;
  faUsers = faUsers;
  faBox = faBox;
}
