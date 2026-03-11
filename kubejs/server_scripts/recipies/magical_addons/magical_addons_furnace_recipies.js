//Furnace Smelting
ServerEvents.recipes(event => {
    event.smelting('kubejs:unpowered_silver_ingot', 'bewitchment:raw_silver').xp(0.35)
  })