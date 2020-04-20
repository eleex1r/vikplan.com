import { constants } from "fs";

// effects
export const ATTACK = 1;
export const DEFENSE = 2;
export const HEALTH = 3;
export const ENEMY_ATTACK = 4;
export const ENEMY_DEFENSE = 5;
export const ENEMY_HEALTH = 6;
export const MARCH_SIZE = 7;
export const MARCH_SPEED = 20;

export const DAMAGE_VS_MELEE = 8;
export const DAMAGE_VS_RANGED = 9;
export const DAMAGE_VS_CAVALRY = 10;
export const DAMAGE_VS_KILLER = 11;
export const DAMAGE_VS_SIEGE = 12;
export const DAMAGE_VS_TIER_1 = 13;
export const DAMAGE_VS_TIER_2 = 14;
export const DAMAGE_VS_TIER_3 = 15;
export const DAMAGE_VS_TIER_4 = 16;
export const DAMAGE_VS_TIER_5 = 17;
export const DAMAGE_VS_TIER_6 = 18;
export const DAMAGE_VS_TIER_7 = 19;

// troops
export const MELEE = 1;
export const RANGED = 2;
export const CAVALRY = 3;
export const SIEGE = 4;
export const KILLER = 5;
export const SCOUT = 6;
export const ALL_TROOPS = 10;

// tier
export const TIER_1 = 1;
export const TIER_2 = 2;
export const TIER_3 = 3;
export const TIER_4 = 4;
export const TIER_5 = 5;
export const TIER_6 = 6;
export const TIER_7 = 7;

// with
export const WITH_HERO = 1;
export const WITH_SHAMAN = 2;

// action
export const ACTION_ATTACK = 1;
export const ACTION_DEFENSE = 2;

// area
export const AREA_POP = 1; // крепости

/* template to tag research list
war: {
    effect: constants.,
    troops: constants.,
    tier: constants.,
    action: constants.,
    with: constants.,
    area: constants.
}
*/

