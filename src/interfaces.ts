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