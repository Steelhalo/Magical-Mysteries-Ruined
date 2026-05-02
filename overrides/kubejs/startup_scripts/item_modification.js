ItemEvents.modification(event => {
    const gobberTools = ['gobber2:gobber2_helmet', 'gobber2:gobber2_chestplate', 'gobber2:gobber2_leggings', 'gobber2:gobber2_boots', 'gobber2:gobber2_sword', 'gobber2:gobber2_pickaxe', 'gobber2:gobber2_axe', 'gobber2:gobber2_shovel', 'gobber2:gobber2_hoe', 'gobber2:gobber2_bow', 'gobdelight:gobber_knife', 'gobber2:gobber2_helmet_nether', 'gobber2:gobber2_chestplate_nether', 'gobber2:gobber2_leggings_nether', 'gobber2:gobber2_boots_nether', 'gobber2:gobber2_sword_nether', 'gobber2:gobber2_pickaxe_nether', 'gobber2:gobber2_axe_nether', 'gobber2:gobber2_shovel_nether', 'gobber2:gobber2_hoe_nether', 'gobber2:gobber2_paxel_nether', 'gobber2:gobber2_hammer_nether', 'gobber2:gobber2_bow_nether', 'gobber2:gobber2_tree_axe_nether', 'gobber2:gobber2_excavator_nether', 'gobdelight:nether_gobber_knife', 'gobber2:gobber2_helmet_end', 'gobber2:gobber2_chestplate_end', 'gobber2:gobber2_leggings_end', 'gobber2:gobber2_boots_end', 'gobber2:gobber2_sword_end', 'gobber2:gobber2_pickaxe_end', 'gobber2:gobber2_axe_end', 'gobber2:gobber2_shovel_end', 'gobber2:gobber2_hoe_end', 'gobber2:gobber2_paxel_end', 'gobver:hammers_end', 'gobbdelight:ender_gobbler_knife','gobbdelight:nether_gobbler_knife','gobbdelight:nether_gobbler_knife','gobbdelight:nether_gobbler_knife','gobber2:gobber2_helmet_dragon', 'gobber2:gobber2_chestplate_dragon', 'gobber2:gobber2_leggings_dragon', 'gobber2:gobber2_boots_dragon']
    const baseGobberArmor = ['gobber2:gobber2_helmet', 'gobber2:gobber2_chestplate', 'gobber2:gobber2_leggings', 'gobber2:gobber2_boots']
    const netherGobberArmor = ['gobber2:gobber2_helmet_nether', 'gobber2:gobber2_chestplate_nether', 'gobber2:gobber2_leggings_nether', 'gobber2:gobber2_boots_nether']
    const endGobberArmor = ['gobber2:gobber2_helmet_end', 'gobber2:gobber2_chestplate_end', 'gobber2:gobber2_leggings_end', 'gobber2:gobber2_boots_end']
    const dragonGobberArmor = ['gobber2:gobber2_helmet_dragon', 'gobber2:gobber2_chestplate_dragon', 'gobber2:gobber2_leggings_dragon', 'gobber2:gobber2_boots_dragon']
    const wardenArmor = ['deeperdarker:warden_helmet', 'deeperdarker:warden_chestplate', 'deeperdarker:warden_leggings', 'deeperdarker:warden_boots']

    baseGobberArmor.forEach(item => {
        event.modify(item, item => {
            item.rarity = 'UNCOMMON'
        })
    })
    netherGobberArmor.forEach(item => {
        event.modify(item, item => {
            item.rarity = 'RARE'
        })
    })
    endGobberArmor.forEach(item => {
        event.modify(item, item => {
            item.rarity = 'RARE'
        })
    })
    dragonGobberArmor.forEach(item => {
        event.modify(item, item => {
            item.rarity = 'EPIC'
        })
    })


    const armorModification = (armor_piece, type, idType, armor_toughness, armor_protection, knockback_resistance, speed, swimingSpeed, sneakingSpeed, attackSpeed, blockBreakSpeed, operation) => {
        event.modify(armor_piece, item => {
        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers
            .withModifierAdded(
                "generic.armor",
                { 
                    amount: armor_protection,
                    id: idType,
                    operation: operation
                }, 
                type
            )
            .withModifierAdded(
                "generic.armor_toughness",
                { 
                    amount: armor_toughness,
                    id: idType,
                    operation: operation
                }, 
                type
            )
            .withModifierAdded(
                "generic.knockback_resistance",
                { 
                    amount: knockback_resistance,
                    id: idType,
                    operation: operation
                }, 
                type
            )
            .withModifierAdded(
                "generic.movement_speed",
                { 
                    amount: speed,
                    id: idType,
                    operation: operation
                }, 
                type
            )
            .withModifierAdded(
                "generic.attack_speed",
                { 
                    amount: attackSpeed,
                    id: idType,
                    operation: operation
                }, 
                type
            )
            .withModifierAdded(
                "neoforge:swim_speed",
                { 
                    amount: swimingSpeed,
                    id: idType,
                    operation: operation
                }, 
                type
            )
            .withModifierAdded(
                "player.sneaking_speed",
                { 
                    amount: sneakingSpeed,
                    id: idType,
                    operation: operation
                }, 
                type
            )
            .withModifierAdded(
                "apothic_attributes:mining_speed",
                { 
                    amount: blockBreakSpeed,
                    id: idType,
                    operation: operation
                }, 
                type
            )
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())
    })
    }

    const swordModification = (sword, attackSpeed, attackDamage, entityInteractionRange, operation) => {
        event.modify(sword, item => {
        let modifiedAttributeModifier = Item.of(item.item().id).attributeModifiers
            .withModifierAdded(
                "generic.attack_speed",
                { 
                    amount: attackSpeed,
                    id: "minecraft:weapon",
                    operation: operation
                }, 
                "any"
            )
            .withModifierAdded(
                "generic.attack_damage",
                { 
                    amount: attackDamage,
                    id: "minecraft:weapon",
                    operation: operation
                }, 
                "any"
            )
            .withModifierAdded(
                "player.entity_interaction_range",
                { 
                    amount: entityInteractionRange,
                    id: "minecraft:weapon",
                    operation: operation
                }, 
                "any"
            )
        item.setAttributeModifiersWithTooltip(modifiedAttributeModifier.modifiers())
    })
}

    armorModification('deeperdarker:warden_helmet', 'head', 'minecraft:armor.helmet', '3.0', '4', '0.1', '0.0', '0.0', '0.0', '0.0', '0.0', 'add_value')
    armorModification('deeperdarker:warden_chestplate', 'chest', 'minecraft:armor.chestplate', '3.0', '9', '0.1', '0.0', '0.0', '0.0', '0.0', '0.0', 'add_value')
    armorModification('deeperdarker:warden_leggings', 'legs', 'minecraft:armor.leggings', '-1.0', '0.0', '0.0', '-0.05', '0.0', '0.0', '0.0', '0.0', 'add_value')
    armorModification('deeperdarker:warden_boots', 'feet', 'minecraft:armor.boots', '3.0', '4', '0.1', '0.0', '0.0', '0.0', '0.0', '0.0', 'add_value')

    armorModification('gobber2:gobber2_helmet', 'head', 'minecraft:armor.helmet', '3.5', '6', '0.1', '0.0', '0.0', '0.0', '0.0', '0.0', 'add_value')
    armorModification('gobber2:gobber2_chestplate', 'chest', 'minecraft:armor.chestplate', '3.5', '10', '0.1', '0.0', '0.0', '0.0', '0.0', '0.0', 'add_value')
    armorModification('gobber2:gobber2_leggings', 'legs', 'minecraft:armor.leggings', '3.5', '8', '0.1', '0.0', '0.0', '0.0', '0.0', '0.0', 'add_value')
    armorModification('gobber2:gobber2_boots', 'feet', 'minecraft:armor.boots', '3.5', '6', '0.1', '0.0', '0.0', '0.0', '0.0', '0.0', 'add_value')

    armorModification('gobber2:gobber2_helmet_nether', 'head', 'minecraft:armor.helmet', '4.0', '7', '0.15', '0.0', '0.0', '0.0', '0.0', '0.0', 'add_value')
    armorModification('gobber2:gobber2_chestplate_nether', 'chest', 'minecraft:armor.chestplate', '4.0', '12', '0.15', '0.0', '0.0', '0.0', '0.0', '0.0', 'add_value')
    armorModification('gobber2:gobber2_leggings_nether', 'legs', 'minecraft:armor.leggings', '4.0', '10', '0.15', '0.0', '0.0', '0.0', '0.0', '0.0', 'add_value')
    armorModification('gobber2:gobber2_boots_nether', 'feet', 'minecraft:armor.boots', '4.0', '7', '0.15', '0.0', '0.0', '0.0', '0.0', '0.0', 'add_value')

    armorModification('gobber2:gobber2_helmet_end', 'head', 'minecraft:armor.helmet', '4.5', '8', '0.2', '0.0', '0.0', '0.0', '0.0', '0.0', 'add_value')
    armorModification('gobber2:gobber2_chestplate_end', 'chest', 'minecraft:armor.chestplate', '4.5', '13', '0.2', '0.0', '0.0', '0.0', '0.0', '0.0', 'add_value')
    armorModification('gobber2:gobber2_leggings_end', 'legs', 'minecraft:armor.leggings', '4.5', '11', '0.2', '0.0', '0.0', '0.0', '0.0', '0.0', 'add_value')
    armorModification('gobber2:gobber2_boots_end', 'feet', 'minecraft:armor.boots', '4.5', '8', '0.2', '0.0', '0.0', '0.0', '0.0', '0.0', 'add_value')

    armorModification('gobber2:gobber2_helmet_dragon', 'head', 'minecraft:armor.helmet', '5.0', '9', '0.25', '0.0', '0.0', '0.0', '0.0', '0.0', 'add_value')
    armorModification('gobber2:gobber2_chestplate_dragon', 'chest', 'minecraft:armor.chestplate', '5.0', '14', '0.25', '0.0', '0.0', '0.0', '0.0', '0.0', 'add_value')
    armorModification('gobber2:gobber2_leggings_dragon', 'legs', 'minecraft:armor.leggings', '5.0', '12', '0.25', '0.0', '0.0', '0.0', '0.0', '0.0', 'add_value')
    armorModification('gobber2:gobber2_boots_dragon', 'feet', 'minecraft:armor.boots', '5.0', '9', '0.25', '0.0', '0.0', '0.0', '0.0', '0.0', 'add_value')

    swordModification('gobber2:gobber2_sword', '-0.3', '5.0', '3.0', 'add_value')
    swordModification('gobber2:gobber2_sword_nether', '-0.4', '11.0', '0.1', 'add_value')
    swordModification('gobber2:gobber2_sword_end', '-0.4', '14.0', '0.1', 'add_value')
})