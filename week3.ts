/*
  ALL TASKS MUST BE IMPLEMENTED WITH TYPESCRIPT!
  Use interfaces and data types in all cases to explicitly specify the types
  for variables, function parameters, function return values and object structures. 
*/

/* Task 1 - Food class */

class Food {
  private name: string;
  private calories: number;

  constructor(name: string, calories: number) {
    this.name = name;
    this.calories = calories;
  }

  public getName(): string {
    return this.name;
  }

  public getCalories(): number {
    return this.calories;
  }

  public getFoodInfo(): string {
    return `${this.name} has ${this.calories} calories`;
  }
}

/* Task 2 - Refrigerator class */

class Refrigerator {
  // MUST be public and named "food" to satisfy tests
  public food: Food[];

  constructor() {
    this.food = [];
  }

  public addFood(food: Food): void {
    this.food.push(food);
  }

  public getContents(): string[] {
    return this.food.map((item: Food) => item.getName());
  }

  public eatFood(foodName: string): string {
    const index: number = this.food.findIndex(
      (item: Food) => item.getName() === foodName
    );

    if (index === -1) {
      return `There is no ${foodName} in the refrigerator`;
    }

    const eatenFoodArray: Food[] = this.food.splice(index, 1);
    const eatenFood: Food = eatenFoodArray[0];

    return `You ate ${eatenFood.getName()} with ${eatenFood.getCalories()} calories`;
  }

  public getTotalCalories(): number {
    return this.food.reduce(
      (total: number, item: Food) => total + item.getCalories(),
      0
    );
  }

  public getNumberOfFoodItems(): number {
    return this.food.length;
  }
}

export { Food, Refrigerator };
