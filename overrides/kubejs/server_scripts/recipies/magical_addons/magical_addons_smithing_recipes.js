// Smithing recipes
ServerEvents.recipes(event => {
    const smithingRecipes = (output, template, base, addition) => {
        event.smithing(output, template, base, addition)
    }

    const gear = ['helmet', 'chestplate', 'leggings', 'boots', 'sword', 'pickaxe', 'axe', 'shovel', 'hoe']

    gear.forEach(gear => {
        smithingRecipes(`gobber2:gobber2_${gear}`, '#c:gobber_smithing_upgrade', `deeperdarker:warden_${gear}`, 'gobber2:gobber2_ring')
        smithingRecipes(`gobber2:gobber2_${gear}_nether`, '#c:nether_gobber_smithing_upgrade', `gobber2:gobber2_${gear}`, 'gobber2:gobber2_ring_nether')
        smithingRecipes(`gobber2:gobber2_${gear}_end`, '#c:end_gobber_smithing_upgrade', `gobber2:gobber2_${gear}_nether`, 'gobber2:gobber2_links_end')
    })

    smithingRecipes('gobber2:gobber2_bow', '#c:gobber_smithing_upgrade', 'minecraft:bow', 'gobber2:gobber2_ring')
    smithingRecipes('gobberdelight:gobber_knife', '#c:gobber_smithing_upgrade', 'farmersdelight:netherite_knife', 'gobber2:gobber2_ring')

    smithingRecipes('gobber2:gobber2_paxel_nether', '#c:nether_gobber_smithing_upgrade', 'gobber2:gobber2_paxel', 'gobber2:gobber2_ring_nether')
    smithingRecipes('gobber2:gobber2_hammer_nether', '#c:nether_gobber_smithing_upgrade', 'gobber2:gobber2_hammer', 'gobber2:gobber2_ring_nether')
    smithingRecipes('gobber2:gobber2_tree_axe_nether', '#c:nether_gobber_smithing_upgrade', 'gobber2:gobber2_tree_axe', 'gobber2:gobber2_ring_nether')
    smithingRecipes('gobber2:gobber2_excavator_nether', '#c:nether_gobber_smithing_upgrade', 'gobber2:gobber2_excavator', 'gobber2:gobber2_ring_nether')
    smithingRecipes('gobberdelight:nether_gobber_knife', '#c:nether_gobber_smithing_upgrade', 'gobberdelight:gobber_knife', 'gobber2:gobber2_ring_nether')
    smithingRecipes('gobber2:gobber2_bow_nether', '#c:nether_gobber_smithing_upgrade', 'gobber2:gobber2_bow', 'gobber2:gobber2_ring_nether')

    smithingRecipes('gobber2:gobber2_paxel_end', '#c:end_gobber_smithing_upgrade', 'gobber2:gobber2_paxel_nether', 'gobber2:gobber2_links_end')
    smithingRecipes('gobber2:gobber2_hammer_end', '#c:end_gobber_smithing_upgrade', 'gobber2:gobber2_hammer_nether', 'gobber2:gobber2_links_end')
    smithingRecipes('gobber2:gobber2_tree_axe_end', '#c:end_gobber_smithing_upgrade', 'gobber2:gobber2_tree_axe_nether', 'gobber2:gobber2_links_end')
    smithingRecipes('gobber2:gobber2_excavator_end', '#c:end_gobber_smithing_upgrade', 'gobber2:gobber2_excavator_nether', 'gobber2:gobber2_links_end')
    smithingRecipes('gobberdelight:ender_gobber_knife', '#c:end_gobber_smithing_upgrade', 'gobberdelight:nether_gobber_knife', 'gobber2:gobber2_links_end')
    smithingRecipes('gobber2:gobber2_bow_end', '#c:end_gobber_smithing_upgrade', 'gobber2:gobber2_bow_nether', 'gobber2:gobber2_links_end')

    smithingRecipes('gobber2:gobber2_helmet_dragon', '#c:dragon_gobber_smithing_upgrade', 'gobber2:gobber2_helmet_end', 'gobber2:dragon_star')
    smithingRecipes('gobber2:gobber2_chestplate_dragon', '#c:dragon_gobber_smithing_upgrade', 'gobber2:gobber2_chestplate_end', 'gobber2:dragon_elytra')
    smithingRecipes('gobber2:gobber2_leggings_dragon', '#c:dragon_gobber_smithing_upgrade', 'gobber2:gobber2_leggings_end', 'gobber2:dragon_star')
    smithingRecipes('gobber2:gobber2_boots_dragon', '#c:dragon_gobber_smithing_upgrade', 'gobber2:gobber2_boots_end', 'gobber2:dragon_star')


    smithingRecipes('deeperdarker:soul_elytra', 'deeperdarker:warden_upgrade_smithing_template', 'minecraft:elytra', 'deeperdarker:reinforced_echo_shard')
})