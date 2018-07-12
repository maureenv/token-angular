import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
})
export class NavigationComponent implements OnInit {
  showNav : boolean = false

  constructor() { }

  ngOnInit() {

  }

  onSelect(): void {
    this.showNav = !this.showNav
  }

  closeNav(): void {
    this.showNav = false
  }
}
