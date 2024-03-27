import type { ItemType } from "./enums";

export interface Area {
    id: number;
    unlocked: boolean;
    name: string;
    description: string;
    danger: string;
}

export interface Item {
    id: number;
    type: ItemType;
    name: string;
    flavor: string;
}

export interface Recipe {
    recipeId: number;
    unlocked?: boolean;
    name: string;
    itemId: number;
    description: string;
    quantityMade?: number;
    ingredients: Ingredient[];
}

export interface Ingredient {
    itemId: number;
    isBasic: boolean;
    quantity?: number;
}