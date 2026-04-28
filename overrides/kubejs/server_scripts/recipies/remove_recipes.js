//Remove Recipies using filters
//Filter By Output
ServerEvents.recipes(event => {
    event.remove({ output: 'betterend:thallasium_nugget' }),
    event.remove({ output: 'betterend:thallasium_block' })
})
//Filter By Input
ServerEvents.recipes(event => {
    event.remove({ input: 'betterend:thallasium_nugget' }),
    event.remove({ input: 'betterend:thallasium_block' }),
    event.remove({ input: 'betterend:thallasium_ingot' })
})
//Filter By Input and Output
ServerEvents.recipes(event => {
    event.remove({ input: 'minecraft:netherite_upgrade_smithing_template', output: '#c:dragon_gobber' })
})
//Filter By ID
ServerEvents.recipes(event => {
    event.remove({ id: 'gobber2:gobber2_ingot' }),
    event.remove({ id: 'gobber2:gobber2_ingot_nether' }),
    event.remove({ id: 'gobber2:gobber2_ingot_end' })
    event.remove({ id: 'gobber2:dragon_star' }),
    event.remove({ id: 'gobber2:dragon_elytra' })
    event.remove({ id: 'deeperdarker:soul_elytra' })
})
//Filter By Type and Output
ServerEvents.recipes(event => {
    event.remove({ type: 'minecraft:crafting_shaped', output: '#c:gobber' })
})