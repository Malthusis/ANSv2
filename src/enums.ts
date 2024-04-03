export enum FlagEnum {
    FIRE_STARTED = 1, //Fire Started
    INITIAL_EXPLORATION, //Explored your surroundings
    MATERIALS_ACQUIRED, //Got first materials.
    CRAFTED_ITEMS, //Crafted first items.
}

export enum Panel {
    BONFIRE = "bonfire",
    EXPLORE = "explore",
    CRAFT = "craft",
    PROJECTS = "projects",
    SELF = "self"
}

export enum Resource {
    FABRIC_STRIP = 1,
    SCRAP_METAL,
    CHEMICALS,
    CIRCUITS,
    SMALL_BONE
}

export enum ItemType {
    ITEM = 1,
    MATERIAL,
    CONSUMABLE,
    WEAPON,
    LIMB,
    CORE,
    OUTFIT,
    CATALYST
}

export function resourceDisplayName(type:Resource) {
    switch(type) {
        case Resource.CHEMICALS:
            return "CHEMICALS";
        case Resource.CIRCUITS:
            return "CIRCUITS";
        case Resource.FABRIC_STRIP:
            return "F. STRIP";
        case Resource.SCRAP_METAL:
            return "S. METAL";
        case Resource.SMALL_BONE:
            return "SM. BONE";
    }
}