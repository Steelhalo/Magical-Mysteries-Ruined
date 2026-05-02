// Add tags to blocks
ServerEvents.tags('block', event => {
    event.add('c:glass_blocks', 'ftbquests:barrier'),
    event.add('minecraft:impermeable', 'ftbquests:barrier'),
    event.add('c:colorless_glass', 'ftbquests:barrier'),
    event.add('chipped:glass', 'ftbquests:barrier'),
    event.add('axiom:existing', 'ftbquests:barrier'),
    event.add('axiom:solid', 'ftbquests:barrier')

    event.add('minecraft:dragon_immune', 'kubejs:gobber_glass_dragon')

    // Add new tags

})

// Add tags to items
ServerEvents.tags('item', event => {    
    event.add('allmostunified:hide', 'betterend:thallasium_nugget'),
    event.add('allmostunified:hide', 'betterend:thallasium_block'),

    event.add('forbidden_arcanus:modifier/eternal_incompatible', 'gobber2:gobber2_medallion_exp'),
    event.add('forbidden_arcanus:modifier/eternal_incompatible', 'gobber2:gobber2_staff_transformation'),
    event.add('forbidden_arcanus:modifier/eternal_incompatible', 'ars_nouveau:potion_flask'),
    event.add('forbidden_arcanus:modifier/eternal_incompatible', 'ars_nouveau:potion_flask_extend_time'),
    event.add('forbidden_arcanus:modifier/eternal_incompatible', 'ars_nouveau:potion_flask_amplify'),
    event.add('forbidden_arcanus:modifier/eternal_incompatible', 'apotheosis:potion_charm'),
    event.add('forbidden_arcanus:modifier/eternal_incompatible', 'apothic_enchanting:occult_ender_lead'),
    event.add('forbidden_arcanus:modifier/eternal_incompatible', 'ars_additions:fire_resistance_charm'),
    event.add('forbidden_arcanus:modifier/eternal_incompatible', 'ars_additions:undying_charm'),
    event.add('forbidden_arcanus:modifier/eternal_incompatible', 'ars_additions:dispel_protection_charm'),
    event.add('forbidden_arcanus:modifier/eternal_incompatible', 'ars_additions:fall_prevention_charm'),
    event.add('forbidden_arcanus:modifier/eternal_incompatible', 'ars_additions:water_breathing_charm'),
    event.add('forbidden_arcanus:modifier/eternal_incompatible', 'ars_additions:ender_mask_charm'),
    event.add('forbidden_arcanus:modifier/eternal_incompatible', 'ars_additions:void_protection_charm'),
    event.add('forbidden_arcanus:modifier/eternal_incompatible', 'ars_additions:sonic_boom_protection_charm'),
    event.add('forbidden_arcanus:modifier/eternal_incompatible', 'ars_additions:wither_protection_charm'),
    event.add('forbidden_arcanus:modifier/eternal_incompatible', 'ars_additions:golden_charm'),
    event.add('forbidden_arcanus:modifier/eternal_incompatible', 'ars_additions:powdered_snow_walk_charm'),
    event.add('forbidden_arcanus:modifier/eternal_incompatible', 'ars_additions:night_vision_charm'),
    event.add('forbidden_arcanus:modifier/eternal_incompatible', 'waystones:warp_stone'),
    event.add('forbidden_arcanus:modifier/eternal_incompatible', 'sophisticatedstorage:packing_tape'),
    event.add('forbidden_arcanus:modifier/eternal_incompatible', 'sophisticatedstorage:super_packing_tape'),
    event.add('forbidden_arcanus:modifier/eternal_incompatible', 'mysticalagriculture:infusion_crystal'),
    event.add('forbidden_arcanus:modifier/eternal_incompatible', 'mysticalagriculture:master_infusion_crystal'),
    event.add('forbidden_arcanus:modifier/eternal_incompatible', 'forbidden_arcanus:reinforced_deorum_sword'),
    event.add('forbidden_arcanus:modifier/eternal_incompatible', 'forbidden_arcanus:reinforced_deorum_shovel'),
    event.add('forbidden_arcanus:modifier/eternal_incompatible', 'forbidden_arcanus:reinforced_deorum_hoe'),
    event.add('forbidden_arcanus:modifier/eternal_incompatible', 'forbidden_arcanus:reinforced_deorum_axe'),
    event.add('forbidden_arcanus:modifier/eternal_incompatible', 'forbidden_arcanus:reinforced_deorum_pickaxe'),
    event.add('forbidden_arcanus:modifier/eternal_incompatible', 'ironfurnaces:rainbow_coal'),
    event.add('forbidden_arcanus:modifier/eternal_incompatible', 'betterend:elytra_armored'),
    event.add('forbidden_arcanus:modifier/eternal_incompatible', 'betterend:elytra_crystalite'),
    event.add('forbidden_arcanus:modifier/eternal_incompatible', 'deeperdarker:soul_elytra'),

    event.add('deeperdarker:dampens_vibrations', 'gobber2:gobber2_boots'),
    event.add('deeperdarker:dampens_vibrations', 'gobber2:gobber2_boots_nether'),
    event.add('deeperdarker:dampens_vibrations', 'gobber2:gobber2_boots_end'),
    event.add('deeperdarker:dampens_vibrations', 'gobber2:gobber2_boots_dragon'),

    // Add new tags
    event.add('c:diamond_tier', 'minecraft:diamond_pickaxe'),
    event.add('c:diamond_tier', 'minecraft:diamond_axe'),
    event.add('c:diamond_tier', 'minecraft:diamond_hoe'),
    event.add('c:diamond_tier', 'minecraft:diamond_sword'),
    event.add('c:diamond_tier', 'minecraft:diamond_shovel'),
    event.add('c:diamond_tier', 'minecraft:diamond_helmet'),
    event.add('c:diamond_tier', 'minecraft:diamond_chestplate'),
    event.add('c:diamond_tier', 'minecraft:diamond_leggings'),
    event.add('c:diamond_tier', 'minecraft:diamond_boots'),

    event.add('c:warden_smithing_upgrade', 'deeperdarker:warden_upgrade_smithing_template'),
    event.add('c:gobber_smithing_upgrade', 'kubejs:gobber_smithing_template'),
    event.add('c:nether_gobber_smithing_upgrade', 'kubejs:nether_gobber_smithing_template'),
    event.add('c:end_gobber_smithing_upgrade', 'kubejs:end_gobber_smithing_template'),
    event.add('c:dragon_gobber_smithing_upgrade', 'kubejs:dragon_gobber_smithing_template'),

    event.add('c:base_gobber', 'gobber2:gobber2_helmet'),
    event.add('c:base_gobber', 'gobber2:gobber2_chestplate'),
    event.add('c:base_gobber', 'gobber2:gobber2_leggings'),
    event.add('c:base_gobber', 'gobber2:gobber2_boots'),
    event.add('c:base_gobber', 'gobber2:gobber2_sword'),
    event.add('c:base_gobber', 'gobber2:gobber2_pickaxe'),
    event.add('c:base_gobber', 'gobber2:gobber2_axe'),
    event.add('c:base_gobber', 'gobber2:gobber2_shovel'),
    event.add('c:base_gobber', 'gobber2:gobber2_hoe'),
    event.add('c:base_gobber', 'gobber2:gobber2_bow'),
    event.add('c:base_gobber', 'gobberdelight:gobber_knife'),
    event.add('c:nether_gobber', 'gobber2:gobber2_helmet_nether'),
    event.add('c:nether_gobber', 'gobber2:gobber2_chestplate_nether'),
    event.add('c:nether_gobber', 'gobber2:gobber2_leggings_nether'),
    event.add('c:nether_gobber', 'gobber2:gobber2_boots_nether'),
    event.add('c:nether_gobber', 'gobber2:gobber2_sword_nether'),
    event.add('c:nether_gobber', 'gobber2:gobber2_pickaxe_nether'),
    event.add('c:nether_gobber', 'gobber2:gobber2_axe_nether'),
    event.add('c:nether_gobber', 'gobber2:gobber2_shovel_nether'),
    event.add('c:nether_gobber', 'gobber2:gobber2_hoe_nether'),
    event.add('c:nether_gobber', 'gobber2:gobber2_paxel_nether'),
    event.add('c:nether_gobber', 'gobber2:gobber2_hammer_nether'),
    event.add('c:nether_gobber', 'gobber2:gobber2_bow_nether'),
    event.add('c:nether_gobber', 'gobber2:gobber2_tree_axe_nether'),
    event.add('c:nether_gobber', 'gobber2:gobber2_excavator_nether'),
    event.add('c:nether_gobber', 'gobberdelight:nether_gobber_knife'),
    event.add('c:end_gobber', 'gobber2:gobber2_helmet_end'),
    event.add('c:end_gobber', 'gobber2:gobber2_chestplate_end'),
    event.add('c:end_gobber', 'gobber2:gobber2_leggings_end'),
    event.add('c:end_gobber', 'gobber2:gobber2_boots_end'),
    event.add('c:end_gobber', 'gobber2:gobber2_sword_end'),
    event.add('c:end_gobber', 'gobber2:gobber2_pickaxe_end'),
    event.add('c:end_gobber', 'gobber2:gobber2_axe_end'),
    event.add('c:end_gobber', 'gobber2:gobber2_shovel_end'),
    event.add('c:end_gobber', 'gobber2:gobber2_hoe_end'),
    event.add('c:end_gobber', 'gobber2:gobber2_paxel_end'),
    event.add('c:end_gobber', 'gobber2:gobber2_hammer_end'),
    event.add('c:end_gobber', 'gobber2:gobber2_bow_end'),
    event.add('c:end_gobber', 'gobber2:gobber2_tree_axe_end'),
    event.add('c:end_gobber', 'gobber2:gobber2_excavator_end')
    event.add('c:end_gobber', 'gobberdelight:ender_gobber_knife')
    event.add('c:dragon_gobber', 'gobber2:gobber2_helmet_dragon'),
    event.add('c:dragon_gobber', 'gobber2:gobber2_chestplate_dragon'),
    event.add('c:dragon_gobber', 'gobber2:gobber2_leggings_dragon'),
    event.add('c:dragon_gobber', 'gobber2:gobber2_boots_dragon')
})

// Remove tags from blocks
ServerEvents.tags('block', event => {
})

// Remove tags from items
ServerEvents.tags('item', event => {
    event.remove('c:ingots/iron', 'betterend:thallasium_ingot')
})

// Add tags with a loop
ServerEvents.tags('item', event => {
    const gobberTools = event.get('c:base_gobber').getObjectIds()
    gobberTools.forEach(tool => {
        event.add('c:gobber', tool)
    })
    const netherGobberTools = event.get('c:nether_gobber').getObjectIds()
    netherGobberTools.forEach(tool => {
        event.add('c:gobber', tool)
    })
    const endGobberTools = event.get('c:end_gobber').getObjectIds()
    endGobberTools.forEach(tool => {
        event.add('c:gobber', tool)
    })
    const dragonGobberTools = event.get('c:dragon_gobber').getObjectIds()
    dragonGobberTools.forEach(tool => {
        event.add('c:gobber', tool)
    })
})
ServerEvents.tags('block', event => {
        const needsEndGobberTier = event.get('c:needs_end_gobber_tool').getObjectIds()
    needsEndGobberTier.forEach(block => {
        event.add('c:incorrect_for_overworld_gobber_tool'),
        event.add('c:incorrect_for_nether_gobber_tool'),
        event.add('minecraft:incorrect_for_wooden_tool'),
        event.add('minecraft:incorrect_for_stone_tool'),
        event.add('minecraft:incorrect_for_gold_tool'),
        event.add('minecraft:incorrect_for_iron_tool'),
        event.add('minecraft:incorrect_for_diamond_tool'),
        event.add('minecraft:incorrect_for_netherite_tool'),
        event.add('mysticalagriculture:incorrect_for_soulium_tool'),
        event.add('silentgems:incorrect_for_alexandrite_tool'),
        event.add('silentgems:incorrect_for_ammolite_tool'),
        event.add('silentgems:incorrect_for_aquamarine_tool'),
        event.add('silentgems:incorrect_for_black_diamond_tool'),
        event.add('silentgems:incorrect_for_carnelian_tool'),
        event.add('silentgems:incorrect_for_citrine_tool'),
        event.add('silentgems:incorrect_for_garnet_tool'),
        event.add('silentgems:incorrect_for_heliodor_tool'),
        event.add('silentgems:incorrect_for_iolite_tool'),
        event.add('silentgems:incorrect_for_kyanite_tool'),
        event.add('silentgems:incorrect_for_moldavite_tool'),
        event.add('silentgems:incorrect_for_opal_tool'),
        event.add('silentgems:incorrect_for_pearl_tool'),
        event.add('silentgems:incorrect_for_peridot_tool'),
        event.add('silentgems:incorrect_for_roze_quartz_tool'),
        event.add('silentgems:incorrect_for_ruby_tool'),
        event.add('silentgems:incorrect_for_sapphire_tool'),
        event.add('silentgems:incorrect_for_tranzanite_tool'),
        event.add('silentgems:incorrect_for_topaz_tool'),
        event.add('silentgems:incorrect_for_turquoize_tool'),
        event.add('silentgems:incorrect_for_white_diamond_tool')
    })
    const needsNetherGobberTier = event.get('c:needs_nether_gobber_tool').getObjectIds()
    needsNetherGobberTier.forEach(block => {
        event.add('c:incorrect_for_overworld_gobber_tool'),
        event.add('minecraft:incorrect_for_wooden_tool'),
        event.add('minecraft:incorrect_for_stone_tool'),
        event.add('minecraft:incorrect_for_gold_tool'),
        event.add('minecraft:incorrect_for_iron_tool'),
        event.add('minecraft:incorrect_for_diamond_tool'),
        event.add('minecraft:incorrect_for_netherite_tool'),
        event.add('mysticalagriculture:incorrect_for_soulium_tool'),
        event.add('silentgems:incorrect_for_alexandrite_tool'),
        event.add('silentgems:incorrect_for_ammolite_tool'),
        event.add('silentgems:incorrect_for_aquamarine_tool'),
        event.add('silentgems:incorrect_for_black_diamond_tool'),
        event.add('silentgems:incorrect_for_carnelian_tool'),
        event.add('silentgems:incorrect_for_citrine_tool'),
        event.add('silentgems:incorrect_for_garnet_tool'),
        event.add('silentgems:incorrect_for_heliodor_tool'),
        event.add('silentgems:incorrect_for_iolite_tool'),
        event.add('silentgems:incorrect_for_kyanite_tool'),
        event.add('silentgems:incorrect_for_moldavite_tool'),
        event.add('silentgems:incorrect_for_opal_tool'),
        event.add('silentgems:incorrect_for_pearl_tool'),
        event.add('silentgems:incorrect_for_peridot_tool'),
        event.add('silentgems:incorrect_for_roze_quartz_tool'),
        event.add('silentgems:incorrect_for_ruby_tool'),
        event.add('silentgems:incorrect_for_sapphire_tool'),
        event.add('silentgems:incorrect_for_tranzanite_tool'),
        event.add('silentgems:incorrect_for_topaz_tool'),
        event.add('silentgems:incorrect_for_turquoize_tool'),
        event.add('silentgems:incorrect_for_white_diamond_tool')
    })
    const needsBaseGobberTier = event.get('c:needs_overworld_gobber_tool').getObjectIds()
    needsBaseGobberTier.forEach(block => {
        event.add('minecraft:incorrect_for_wooden_tool'),
        event.add('minecraft:incorrect_for_stone_tool'),
        event.add('minecraft:incorrect_for_gold_tool'),
        event.add('minecraft:incorrect_for_iron_tool'),
        event.add('minecraft:incorrect_for_diamond_tool'),
        event.add('minecraft:incorrect_for_netherite_tool'),
        event.add('mysticalagriculture:incorrect_for_soulium_tool'),
        event.add('silentgems:incorrect_for_alexandrite_tool'),
        event.add('silentgems:incorrect_for_ammolite_tool'),
        event.add('silentgems:incorrect_for_aquamarine_tool'),
        event.add('silentgems:incorrect_for_black_diamond_tool'),
        event.add('silentgems:incorrect_for_carnelian_tool'),
        event.add('silentgems:incorrect_for_citrine_tool'),
        event.add('silentgems:incorrect_for_garnet_tool'),
        event.add('silentgems:incorrect_for_heliodor_tool'),
        event.add('silentgems:incorrect_for_iolite_tool'),
        event.add('silentgems:incorrect_for_kyanite_tool'),
        event.add('silentgems:incorrect_for_moldavite_tool'),
        event.add('silentgems:incorrect_for_opal_tool'),
        event.add('silentgems:incorrect_for_pearl_tool'),
        event.add('silentgems:incorrect_for_peridot_tool'),
        event.add('silentgems:incorrect_for_roze_quartz_tool'),
        event.add('silentgems:incorrect_for_ruby_tool'),
        event.add('silentgems:incorrect_for_sapphire_tool'),
        event.add('silentgems:incorrect_for_tranzanite_tool'),
        event.add('silentgems:incorrect_for_topaz_tool'),
        event.add('silentgems:incorrect_for_turquoize_tool'),
        event.add('silentgems:incorrect_for_white_diamond_tool')
    })
    const needsNetheriteTier = event.get('c:needs_netherite_tool').getObjectIds()
    needsNetheriteTier.forEach(block => {
        event.add('minecraft:needs_netherite_tool'),
        event.add('minecraft:incorrect_for_wooden_tool'),
        event.add('minecraft:incorrect_for_stone_tool'),
        event.add('minecraft:incorrect_for_gold_tool'),
        event.add('minecraft:incorrect_for_iron_tool'),
        event.add('minecraft:incorrect_for_diamond_tool'),
        event.add('mysticalagriculture:incorrect_for_soulium_tool'),
        event.add('silentgems:incorrect_for_alexandrite_tool'),
        event.add('silentgems:incorrect_for_ammolite_tool'),
        event.add('silentgems:incorrect_for_aquamarine_tool'),
        event.add('silentgems:incorrect_for_carnelian_tool'),
        event.add('silentgems:incorrect_for_citrine_tool'),
        event.add('silentgems:incorrect_for_garnet_tool'),
        event.add('silentgems:incorrect_for_heliodor_tool'),
        event.add('silentgems:incorrect_for_iolite_tool'),
        event.add('silentgems:incorrect_for_moldavite_tool'),
        event.add('silentgems:incorrect_for_opal_tool'),
        event.add('silentgems:incorrect_for_pearl_tool'),
        event.add('silentgems:incorrect_for_peridot_tool'),
        event.add('silentgems:incorrect_for_ruby_tool'),
        event.add('silentgems:incorrect_for_sapphire_tool'),
        event.add('silentgems:incorrect_for_tranzanite_tool'),
        event.add('silentgems:incorrect_for_topaz_tool'),
        event.add('silentgems:incorrect_for_turquoize_tool')
    })
})