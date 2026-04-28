// Add items
StartupEvents.registry('item', event => {
  event.create('sleeping_eye_of_ender').maxStackSize(64).texture('magical_addons:item/sleeping_eye_of_ender'),
  event.create('gobber_smithing_template').maxStackSize(64).texture('magical_addons:item/base_gobber_upgrade_template'),
  event.create('nether_gobber_smithing_template').maxStackSize(64).texture('magical_addons:item/nether_gobber_upgrade_template'),
  event.create('end_gobber_smithing_template').maxStackSize(64).texture('magical_addons:item/end_gobber_upgrade_template'),
  event.create('dragon_gobber_smithing_template').maxStackSize(64).texture('magical_addons:item/dragon_gobber_upgrade_template')
})