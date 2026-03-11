//Shapless
ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('kubejs:unpowered_silver_nugget', 9),
        [
            'kubejs:unpowered_silver_ingot'
        ]
    )
    event.shapeless(
        Item.of('kubejs:unpowered_silver_ingot', 9),
        [
            'bewitchment:silver_block'
        ]
    )
})