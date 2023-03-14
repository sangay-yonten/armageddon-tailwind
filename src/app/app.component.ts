import {Component, OnInit} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'arm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  showMenu = false;
  isDarkEnable = false;
  presentTheme$ = new BehaviorSubject<string>('theme-light');
  ngOnInit() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.presentTheme$.next(savedTheme);
    }
  }
  changeTheme() {
    this.presentTheme$.value === 'theme-light'
      ? this.presentTheme$.next('theme-dark')
      : this.presentTheme$.next('theme-light');
    localStorage.setItem('theme', this.presentTheme$.value);
    this.isDarkEnable = !this.isDarkEnable;
  }

  toggleNavbar(){
    this.showMenu = !this.showMenu;
  }
}
