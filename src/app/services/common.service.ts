import { Injectable } from '@angular/core';
import { Food } from '../shared/interfaces/food';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  
  
  foodItems: Food[] = [
    {
      id: 1,
      name: "Cheeseburger",
      description: "A delicious burger topped with cheese, lettuce, tomato, and pickles.",
      price: 9.99
    },
    {
      id: 2,
      name: "Margherita Pizza",
      description: "Traditional Italian pizza with tomato sauce, mozzarella cheese, and fresh basil.",
      price: 12.99
    },
    {
      id: 3,
      name: "Chicken Caesar Salad",
      description: "Crisp romaine lettuce, grilled chicken, croutons, parmesan cheese, and Caesar dressing.",
      price: 8.49
    },
    {
      id: 4,
      name: "Spaghetti Bolognese",
      description: "Classic Italian pasta dish with meaty Bolognese sauce and Parmesan cheese.",
      price: 11.99
    },
    {
      id: 5,
      name: "Chocolate Brownie Sundae",
      description: "Warm chocolate brownie topped with vanilla ice cream, chocolate syrup, and whipped cream.",
      price: 6.99
    }
  ];
  constructor() { }

  public getFoodList(): Food[] {
    return this.foodItems;
  }
}
