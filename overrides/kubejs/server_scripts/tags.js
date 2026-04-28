// Add tags to blocks
ServerEvents.tags('block', event => {
    event.add('c:glass_blocks', 'ftbquests:barrier'),
    event.add('minecraft:impermeable', 'ftbquests:barrier'),
    event.add('c:colorless_glass', 'ftbquests:barrier'),
    event.add('chipped:glass', 'ftbquests:barrier'),
    event.add('axiom:existing', 'ftbquests:barrier'),
    event.add('axiom:solid', 'ftbquests:barrier')
})

// Add tags to items
ServerEvents.tags('item', event => {    
    event.add('allmostunified:hide', 'betterend:thallasium_nugget'),
    event.add('allmostunified:hide', 'betterend:thallasium_block'),

    // Add new tags
    event.add('c:gobber_smithing_upgrade', 'kubejs:gobber_smithing_template'),
    event.add('c:nether_gobber_smithing_upgrade', 'kubejs:nether_gobber_smithing_template'),
    event.add('c:end_gobber_smithing_upgrade', 'kubejs:end_gobber_smithing_template'),
    event.add('c:dragon_gobber_smithing_upgrade', 'kubejs:dragon_gobber_smithing_template')

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