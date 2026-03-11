//Furnace Smelting
ServerEvents.recipes(event => {
    event.smelting('bewitchment:unpowered_silver_ingot', 'bewitchment:raw_silver').xp(0.35)
  })