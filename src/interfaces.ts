import { Resource, type ItemType } from "./enums";

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
    effectDescription: string;
    //add StatApplyStats function
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

export function displayIngredient(ingredient:Ingredient, item?:Item): string {
    const prefix = ingredient.quantity ? ingredient.quantity + " "  : ""

    if (ingredient.isBasic) {
        switch(ingredient.itemId) {
            case Resource.CHEMICALS:
                return prefix + "chemicals";
            case Resource.CIRCUITS:
                return prefix + "circuits";
            case Resource.FABRIC_STRIP:
                return prefix + "strips of fabric";
            case Resource.SCRAP_METAL:
                return prefix + "pieces of scrap";
            case Resource.SMALL_BONE:
                return prefix + "small bones";
        }
    } else if(!!item) {
        return prefix + item.name
    }
    return ""
}

export interface ExploreLog {
    id: number;
    log: string;
}