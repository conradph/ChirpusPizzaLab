import { Component } from '@angular/core';
import { menuitem } from './menuitem';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'menu';
  menu:menuitem[] = [new menuitem("Wings", "Appetizer", 8.99), new menuitem("Pepperoni Pizza", "Pizza", 7.99), 
  new menuitem("Cheese Pizza", "Pizza", 6.99), new menuitem("Meatlovers Pizza", "Pizza", 9.99),
  new menuitem("Hawaiian Pizza", "Pizza", 9.99), new menuitem("Breadsticks", "Appetizer", 4.99),
  new menuitem("Chocolate Chip Cookies", "Dessert", 5.99), new menuitem("Cinnamon Sticks", "Dessert", 4.99)];
}
