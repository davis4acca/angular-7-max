import { Component, OnInit } from "@angular/core";
import { Recipe } from "../recipe.module";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "test Desc",
      "https://c.pxhere.com/photos/8b/0f/food_meat_recipe_power_pork_dishes-604134.jpg!d"
    )
  ];
  constructor() {}

  ngOnInit() {}
}
