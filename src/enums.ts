export enum FlagEnum {
    FIRE_STARTED = 1, //Fire Started
    INITIAL_EXPLORATION, //Explored your surroundings
    MATERIALS_ACQUIRED //Got first materials.
}

export enum Panel {
    BONFIRE = "bonfire",
    EXPLORE = "explore",
    CRAFT = "craft",
    PROJECTS = "projects"
}

export enum Resource {
    FABRIC_STRIP = 1,
    SCRAP_METAL,
    CHEMICALS,
    CIRCUITS
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
    }
}