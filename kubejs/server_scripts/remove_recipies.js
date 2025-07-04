//Remove Recipies using a filter
//Filter By Output
ServerEvents.recipes(event => {
        event.remove({ output: 'mythicmetals:copper_nugget' }),
        event.remove({ output: 'mythicmetals:steel_ingot' })
})
//Filter By Input
ServerEvents.recipes(event => {
    event.remove({ input: 'mythicmetals:steel_ingot' })
})
//Filter By Input and Output
ServerEvents.recipes(event => {
    event.remove({output: 'bewitchment:silver_ingot', input: 'bewitchment:raw_silver'}),
    event.remove({output: 'bewitchment:silver_ingot', input: 'bewitchment:silver_ore'}),
    event.remove({output: 'bewitchment:silver_ingot', input: 'bewitchment:deepslate_silver_ore'})
})