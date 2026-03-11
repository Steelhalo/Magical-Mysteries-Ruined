//Shapless
ServerEvents.recipes(event => {
    event.shapeless(
        Item.of('bewitchment:unpowered_silver_nugget', 9),
        [
            'bewitchment:unpowered_silver_ingot'
        ]
    )
    event.shapeless(
        Item.of('bewitchment:unpowered_silver_ingot', 9),
        [
            'bewitchment:silver_block'
        ]
    )
    event.shapeless(
        Item.of('bewitchment:silver_ingot', 9),
        [
            'bewitchment:powered_silver_block'
        ]
    )
})