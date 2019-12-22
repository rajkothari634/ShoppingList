import { Ingredient } from '../shared/ingredient.model';

export class Recipe{
    public name: string;
    public id: number;
    public discription: string;
    public imagePath: string;
    public ingredients : Ingredient[];
    
    constructor(name: string,desc: string,imagePath: string,ingredients:Ingredient[],id: number)
    {
        this.name = name;
        this.discription = desc;
        this.imagePath= imagePath;
        this.ingredients = ingredients;
        this.id = id;
    }    
}