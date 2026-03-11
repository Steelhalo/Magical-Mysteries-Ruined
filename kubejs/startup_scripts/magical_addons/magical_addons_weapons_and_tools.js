//Weapons
StartupEvents.registry('item', event => {
    //Knives
    event.create('rustic_knife', 'sword').tier('rustic').maxDamage(34).texture('magical_addons:item/rustic_knife').attackDamageBaseline(0).speedBaseline(0),
    event.create('decent_knife', 'sword').tier('decent').maxDamage(58).texture('magical_addons:item/decent_knife').attackDamageBaseline(0.5).speedBaseline(0),
    event.create('ancient_knife', 'sword').tier('ancient').maxDamage(89).texture('magical_addons:item/ancient_knife').attackDamageBaseline(1).speedBaseline(0.1),
    event.create('runic_knife', 'sword').tier('runic').maxDamage(114).texture('magical_addons:item/runic_knife').attackDamageBaseline(1.5).speedBaseline(0.25),

    //Rustic Whips
    event.create('rustic_whip_red', 'sword').tier('rustic').maxDamage(41).texture('magical_addons:item/rustic_whip/rustic_whip_red').attackDamageBaseline(5).speedBaseline(-3.5).displayName('Red Rustic Whip').tag('magical_addons:rustic_whip'),
    event.create('rustic_whip_orange', 'sword').tier('rustic').maxDamage(41).texture('magical_addons:item/rustic_whip/rustic_whip_orange').attackDamageBaseline(5).speedBaseline(-3.5).displayName('Orange Rustic Whip').tag('magical_addons:rustic_whip'),
    event.create('rustic_whip_yellow', 'sword').tier('rustic').maxDamage(41).texture('magical_addons:item/rustic_whip/rustic_whip_yellow').attackDamageBaseline(5).speedBaseline(-3.5).displayName('Yellow Rustic Whip').tag('magical_addons:rustic_whip'),
    event.create('rustic_whip_green', 'sword').tier('rustic').maxDamage(41).texture('magical_addons:item/rustic_whip/rustic_whip_green').attackDamageBaseline(5).speedBaseline(-3.5).displayName('Green Rustic Whip').tag('magical_addons:rustic_whip'),
    event.create('rustic_whip_lime', 'sword').tier('rustic').maxDamage(41).texture('magical_addons:item/rustic_whip/rustic_whip_lime').attackDamageBaseline(5).speedBaseline(-3.5).displayName('Lime Rustic Whip').tag('magical_addons:rustic_whip'),
    event.create('rustic_whip_blue', 'sword').tier('rustic').maxDamage(41).texture('magical_addons:item/rustic_whip/rustic_whip_blue').attackDamageBaseline(5).speedBaseline(-3.5).displayName('Blue Rustic Whip').tag('magical_addons:rustic_whip'),
    event.create('rustic_whip_cyan', 'sword').tier('rustic').maxDamage(41).texture('magical_addons:item/rustic_whip/rustic_whip_cyan').attackDamageBaseline(5).speedBaseline(-3.5).displayName('Cyan Rustic Whip').tag('magical_addons:rustic_whip'),
    event.create('rustic_whip_light_blue', 'sword').tier('rustic').maxDamage(41).texture('magical_addons:item/rustic_whip/rustic_whip_light_blue').attackDamageBaseline(5).speedBaseline(-3.5).displayName('Light Blue Rustic Whip').tag('magical_addons:rustic_whip'),
    event.create('rustic_whip_pink', 'sword').tier('rustic').maxDamage(41).texture('magical_addons:item/rustic_whip/rustic_whip_pink').attackDamageBaseline(5).speedBaseline(-3.5).displayName('Pink Rustic Whip').tag('magical_addons:rustic_whip'),
    event.create('rustic_whip_magenta', 'sword').tier('rustic').maxDamage(41).texture('magical_addons:item/rustic_whip/rustic_whip_magenta').attackDamageBaseline(5).speedBaseline(-3.5).displayName('Magenta Rustic Whip').tag('magical_addons:rustic_whip'),
    event.create('rustic_whip_purple', 'sword').tier('rustic').maxDamage(41).texture('magical_addons:item/rustic_whip/rustic_whip_purple').attackDamageBaseline(5).speedBaseline(-3.5).displayName('Purple Rustic Whip').tag('magical_addons:rustic_whip'),
    event.create('rustic_whip_white', 'sword').tier('rustic').maxDamage(41).texture('magical_addons:item/rustic_whip/rustic_whip_white').attackDamageBaseline(5).speedBaseline(-3.5).displayName('White Rustic Whip').tag('magical_addons:rustic_whip'),
    event.create('rustic_whip_grey', 'sword').tier('rustic').maxDamage(41).texture('magical_addons:item/rustic_whip/rustic_whip_grey').attackDamageBaseline(5).speedBaseline(-3.5).displayName('Grey Rustic Whip').tag('magical_addons:rustic_whip'),
    event.create('rustic_whip_light_grey', 'sword').tier('rustic').maxDamage(41).texture('magical_addons:item/rustic_whip/rustic_whip_light_grey').attackDamageBaseline(5).speedBaseline(-3.5).displayName('Light Grey Rustic Whip').tag('magical_addons:rustic_whip'),
    event.create('rustic_whip_black', 'sword').tier('rustic').maxDamage(41).texture('magical_addons:item/rustic_whip/rustic_whip_black').attackDamageBaseline(5).speedBaseline(-3.5).displayName('Black Rustic Whip').tag('magical_addons:rustic_whip'),
    event.create('rustic_whip_brown', 'sword').tier('rustic').maxDamage(41).texture('magical_addons:item/rustic_whip/rustic_whip_brown').attackDamageBaseline(5).speedBaseline(-3.5).displayName('Brown Rustic Whip').tag('magical_addons:rustic_whip'),
    event.create('rustic_whip', 'sword').tier('rustic').maxDamage(41).texture('magical_addons:item/rustic_whip/rustic_whip').attackDamageBaseline(5).speedBaseline(-3.5).tag('magical_addons:rustic_whip'),
    
    //Decent Whips
    event.create('decent_whip_red', 'sword').tier('decent').maxDamage(83).texture('magical_addons:item/decent_whip/decent_whip_red').attackDamageBaseline(6).speedBaseline(-3.4).displayName('Red Decent Whip').tag('magical_addons:decent_whip'),
    event.create('decent_whip_orange', 'sword').tier('decent').maxDamage(83).texture('magical_addons:item/decent_whip/decent_whip_orange').attackDamageBaseline(6).speedBaseline(-3.4).displayName('Orange Decent Whip').tag('magical_addons:decent_whip'),
    event.create('decent_whip_yellow', 'sword').tier('decent').maxDamage(83).texture('magical_addons:item/decent_whip/decent_whip_yellow').attackDamageBaseline(6).speedBaseline(-3.4).displayName('Yellow Decent Whip').tag('magical_addons:decent_whip'),
    event.create('decent_whip_green', 'sword').tier('decent').maxDamage(83).texture('magical_addons:item/decent_whip/decent_whip_green').attackDamageBaseline(6).speedBaseline(-3.4).displayName('Green Decent Whip').tag('magical_addons:decent_whip'),
    event.create('decent_whip_lime', 'sword').tier('decent').maxDamage(83).texture('magical_addons:item/decent_whip/decent_whip_lime').attackDamageBaseline(6).speedBaseline(-3.4).displayName('Lime Decent Whip').tag('magical_addons:decent_whip'),
    event.create('decent_whip_blue', 'sword').tier('decent').maxDamage(83).texture('magical_addons:item/decent_whip/decent_whip_blue').attackDamageBaseline(6).speedBaseline(-3.4).displayName('Blue Decent Whip').tag('magical_addons:decent_whip'),
    event.create('decent_whip_cyan', 'sword').tier('decent').maxDamage(83).texture('magical_addons:item/decent_whip/decent_whip_cyan').attackDamageBaseline(6).speedBaseline(-3.4).displayName('Cyan Decent Whip').tag('magical_addons:decent_whip'),
    event.create('decent_whip_light_blue', 'sword').tier('decent').maxDamage(83).texture('magical_addons:item/decent_whip/decent_whip_light_blue').attackDamageBaseline(6).speedBaseline(-3.4).displayName('Light Blue Decent Whip').tag('magical_addons:decent_whip'),
    event.create('decent_whip_pink', 'sword').tier('decent').maxDamage(83).texture('magical_addons:item/decent_whip/decent_whip_pink').attackDamageBaseline(6).speedBaseline(-3.4).displayName('Pink Decent Whip').tag('magical_addons:decent_whip'),
    event.create('decent_whip_magenta', 'sword').tier('decent').maxDamage(83).texture('magical_addons:item/decent_whip/decent_whip_magenta').attackDamageBaseline(6).speedBaseline(-3.4).displayName('Magenta Decent Whip').tag('magical_addons:decent_whip'),
    event.create('decent_whip_purple', 'sword').tier('decent').maxDamage(83).texture('magical_addons:item/decent_whip/decent_whip_purple').attackDamageBaseline(6).speedBaseline(-3.4).displayName('Purple Decent Whip').tag('magical_addons:decent_whip'),
    event.create('decent_whip_white', 'sword').tier('decent').maxDamage(83).texture('magical_addons:item/decent_whip/decent_whip_white').attackDamageBaseline(6).speedBaseline(-3.4).displayName('White Decent Whip').tag('magical_addons:decent_whip'),
    event.create('decent_whip_grey', 'sword').tier('decent').maxDamage(83).texture('magical_addons:item/decent_whip/decent_whip_grey').attackDamageBaseline(6).speedBaseline(-3.4).displayName('Grey Decent Whip').tag('magical_addons:decent_whip'),
    event.create('decent_whip_light_grey', 'sword').tier('decent').maxDamage(83).texture('magical_addons:item/decent_whip/decent_whip_light_grey').attackDamageBaseline(6).speedBaseline(-3.4).displayName('Light Grey Decent Whip').tag('magical_addons:decent_whip'),
    event.create('decent_whip_black', 'sword').tier('decent').maxDamage(83).texture('magical_addons:item/decent_whip/decent_whip_black').attackDamageBaseline(6).speedBaseline(-3.4).displayName('Black Decent Whip').tag('magical_addons:decent_whip'),
    event.create('decent_whip_brown', 'sword').tier('decent').maxDamage(83).texture('magical_addons:item/decent_whip/decent_whip_brown').attackDamageBaseline(6).speedBaseline(-3.4).displayName('Brown Decent Whip').tag('magical_addons:decent_whip'),
    event.create('decent_whip', 'sword').tier('decent').maxDamage(83).texture('magical_addons:item/decent_whip/decent_whip').attackDamageBaseline(6).speedBaseline(-3.4).tag('magical_addons:decent_whip'),

    //Ancient Whips
    event.create('ancient_whip_red', 'sword').tier('ancient').maxDamage(136).texture('magical_addons:item/ancient_whip/ancient_whip_red').attackDamageBaseline(8).speedBaseline(-3.4).displayName('Red Ancient Whip').tag('magical_addons:ancient_whip'),
    event.create('ancient_whip_orange', 'sword').tier('ancient').maxDamage(136).texture('magical_addons:item/ancient_whip/ancient_whip_orange').attackDamageBaseline(8).speedBaseline(-3.4).displayName('Orange Ancient Whip').tag('magical_addons:ancient_whip'),
    event.create('ancient_whip_yellow', 'sword').tier('ancient').maxDamage(136).texture('magical_addons:item/ancient_whip/ancient_whip_yellow').attackDamageBaseline(8).speedBaseline(-3.4).displayName('Yellow Ancient Whip').tag('magical_addons:ancient_whip'),
    event.create('ancient_whip_green', 'sword').tier('ancient').maxDamage(136).texture('magical_addons:item/ancient_whip/ancient_whip_green').attackDamageBaseline(8).speedBaseline(-3.4).displayName('Green Ancient Whip').tag('magical_addons:ancient_whip'),
    event.create('ancient_whip_lime', 'sword').tier('ancient').maxDamage(136).texture('magical_addons:item/ancient_whip/ancient_whip_lime').attackDamageBaseline(8).speedBaseline(-3.4).displayName('Lime Ancient Whip').tag('magical_addons:ancient_whip'),
    event.create('ancient_whip_blue', 'sword').tier('ancient').maxDamage(136).texture('magical_addons:item/ancient_whip/ancient_whip_blue').attackDamageBaseline(8).speedBaseline(-3.4).displayName('Blue Ancient Whip').tag('magical_addons:ancient_whip'),
    event.create('ancient_whip_cyan', 'sword').tier('ancient').maxDamage(136).texture('magical_addons:item/ancient_whip/ancient_whip_cyan').attackDamageBaseline(8).speedBaseline(-3.4).displayName('Cyan Ancient Whip').tag('magical_addons:ancient_whip'),
    event.create('ancient_whip_light_blue', 'sword').tier('ancient').maxDamage(136).texture('magical_addons:item/ancient_whip/ancient_whip_light_blue').attackDamageBaseline(8).speedBaseline(-3.4).displayName('Light Blue Ancient Whip').tag('magical_addons:ancient_whip'),
    event.create('ancient_whip_pink', 'sword').tier('ancient').maxDamage(136).texture('magical_addons:item/ancient_whip/ancient_whip_pink').attackDamageBaseline(8).speedBaseline(-3.4).displayName('Pink Ancient Whip').tag('magical_addons:ancient_whip'),
    event.create('ancient_whip_magenta', 'sword').tier('ancient').maxDamage(136).texture('magical_addons:item/ancient_whip/ancient_whip_magenta').attackDamageBaseline(8).speedBaseline(-3.4).displayName('Magenta Ancient Whip').tag('magical_addons:ancient_whip'),
    event.create('ancient_whip_purple', 'sword').tier('ancient').maxDamage(136).texture('magical_addons:item/ancient_whip/ancient_whip_purple').attackDamageBaseline(8).speedBaseline(-3.4).displayName('Purple Ancient Whip').tag('magical_addons:ancient_whip'),
    event.create('ancient_whip_white', 'sword').tier('ancient').maxDamage(136).texture('magical_addons:item/ancient_whip/ancient_whip_white').attackDamageBaseline(8).speedBaseline(-3.4).displayName('White Ancient Whip').tag('magical_addons:ancient_whip'),
    event.create('ancient_whip_grey', 'sword').tier('ancient').maxDamage(136).texture('magical_addons:item/ancient_whip/ancient_whip_grey').attackDamageBaseline(8).speedBaseline(-3.4).displayName('Grey Ancient Whip').tag('magical_addons:ancient_whip'),
    event.create('ancient_whip_light_grey', 'sword').tier('ancient').maxDamage(136).texture('magical_addons:item/ancient_whip/ancient_whip_light_grey').attackDamageBaseline(8).speedBaseline(-3.4).displayName('Light Grey Ancient Whip').tag('magical_addons:ancient_whip'),
    event.create('ancient_whip_black', 'sword').tier('ancient').maxDamage(136).texture('magical_addons:item/ancient_whip/ancient_whip_black').attackDamageBaseline(8).speedBaseline(-3.4).displayName('Black Ancient Whip').tag('magical_addons:ancient_whip'),
    event.create('ancient_whip_brown', 'sword').tier('ancient').maxDamage(136).texture('magical_addons:item/ancient_whip/ancient_whip_brown').attackDamageBaseline(8).speedBaseline(-3.4).displayName('Brown Ancient Whip').tag('magical_addons:ancient_whip'),
    event.create('ancient_whip', 'sword').tier('ancient').maxDamage(136).texture('magical_addons:item/ancient_whip/ancient_whip').attackDamageBaseline(8).speedBaseline(-3.4).tag('magical_addons:ancient_whip'),

    //Runic Whips
    event.create('runic_whip_red', 'sword').tier('runic').maxDamage(258).texture('magical_addons:item/runic_whip/runic_whip_red').attackDamageBaseline(10).speedBaseline(-3.3).displayName('Red Runic Whip').tag('magical_addons:runic_whip'),
    event.create('runic_whip_orange', 'sword').tier('runic').maxDamage(258).texture('magical_addons:item/runic_whip/runic_whip_orange').attackDamageBaseline(10).speedBaseline(-3.3).displayName('Orange Runic Whip').tag('magical_addons:runic_whip'),
    event.create('runic_whip_yellow', 'sword').tier('runic').maxDamage(258).texture('magical_addons:item/runic_whip/runic_whip_yellow').attackDamageBaseline(10).speedBaseline(-3.3).displayName('Yellow Runic Whip').tag('magical_addons:runic_whip'),
    event.create('runic_whip_green', 'sword').tier('runic').maxDamage(258).texture('magical_addons:item/runic_whip/runic_whip_green').attackDamageBaseline(10).speedBaseline(-3.3).displayName('Green Runic Whip').tag('magical_addons:runic_whip'),
    event.create('runic_whip_lime', 'sword').tier('runic').maxDamage(258).texture('magical_addons:item/runic_whip/runic_whip_lime').attackDamageBaseline(10).speedBaseline(-3.3).displayName('Lime Runic Whip').tag('magical_addons:runic_whip'),
    event.create('runic_whip_blue', 'sword').tier('runic').maxDamage(258).texture('magical_addons:item/runic_whip/runic_whip_blue').attackDamageBaseline(10).speedBaseline(-3.3).displayName('Blue Runic Whip').tag('magical_addons:runic_whip'),
    event.create('runic_whip_cyan', 'sword').tier('runic').maxDamage(258).texture('magical_addons:item/runic_whip/runic_whip_cyan').attackDamageBaseline(10).speedBaseline(-3.3).displayName('Cyan Runic Whip').tag('magical_addons:runic_whip'),
    event.create('runic_whip_light_blue', 'sword').tier('runic').maxDamage(258).texture('magical_addons:item/runic_whip/runic_whip_light_blue').attackDamageBaseline(10).speedBaseline(-3.3).displayName('Light Blue Runic Whip').tag('magical_addons:runic_whip'),
    event.create('runic_whip_pink', 'sword').tier('runic').maxDamage(258).texture('magical_addons:item/runic_whip/runic_whip_pink').attackDamageBaseline(10).speedBaseline(-3.3).displayName('Pink Runic Whip').tag('magical_addons:runic_whip'),
    event.create('runic_whip_magenta', 'sword').tier('runic').maxDamage(258).texture('magical_addons:item/runic_whip/runic_whip_magenta').attackDamageBaseline(10).speedBaseline(-3.3).displayName('Magenta Runic Whip').tag('magical_addons:runic_whip'),
    event.create('runic_whip_purple', 'sword').tier('runic').maxDamage(258).texture('magical_addons:item/runic_whip/runic_whip_purple').attackDamageBaseline(10).speedBaseline(-3.3).displayName('Purple Runic Whip').tag('magical_addons:runic_whip'),
    event.create('runic_whip_white', 'sword').tier('runic').maxDamage(258).texture('magical_addons:item/runic_whip/runic_whip_white').attackDamageBaseline(10).speedBaseline(-3.3).displayName('White Runic Whip').tag('magical_addons:runic_whip'),
    event.create('runic_whip_grey', 'sword').tier('runic').maxDamage(258).texture('magical_addons:item/runic_whip/runic_whip_grey').attackDamageBaseline(10).speedBaseline(-3.3).displayName('Grey Runic Whip').tag('magical_addons:runic_whip'),
    event.create('runic_whip_light_grey', 'sword').tier('runic').maxDamage(258).texture('magical_addons:item/runic_whip/runic_whip_light_grey').attackDamageBaseline(10).speedBaseline(-3.3).displayName('Light Grey Runic Whip').tag('magical_addons:runic_whip'),
    event.create('runic_whip_black', 'sword').tier('runic').maxDamage(258).texture('magical_addons:item/runic_whip/runic_whip_black').attackDamageBaseline(10).speedBaseline(-3.3).displayName('Black Runic Whip').tag('magical_addons:runic_whip'),
    event.create('runic_whip_brown', 'sword').tier('runic').maxDamage(258).texture('magical_addons:item/runic_whip/runic_whip_brown').attackDamageBaseline(10).speedBaseline(-3.3).displayName('Brown Runic Whip').tag('magical_addons:runic_whip'),
    event.create('runic_whip', 'sword').tier('runic').maxDamage(258).texture('magical_addons:item/runic_whip/runic_whip').attackDamageBaseline(10).speedBaseline(-3.3).tag('magical_addons:runic_whip')
})

//Tools
StartupEvents.registry('item', event => {
    
})

//Custom Tool Tiers
ItemEvents.toolTierRegistry(event => {
    event.add('rustic', tier => {tier.uses = 34, tier.speed = 2, tier.attackDamageBonus = 0, tier.level = 0, tier.enchantmentValue = 3, tier.repairIngredient = 'minecraft:flint'}),
    event.add('decent', tier => {tier.uses = 58, tier.speed = 3, tier.attackDamageBonus = 0, tier.level = 1, tier.enchantmentValue = 5, tier.repairIngredient = 'minecraft:copper_ingot'}),
    event.add('ancient', tier => {tier.uses = 89, tier.speed = 4, tier.attackDamageBonus = 0, tier.level = 2, tier.enchantmentValue = 9, tier.repairIngredient = 'amethyst_imbuement:steel_ingot'}),
    event.add('runic', tier => {tier.uses = 114, tier.speed = 4, tier.attackDamageBonus = 0, tier.level = 2, tier.enchantmentValue = 11, tier.repairIngredient = 'amethyst_imbuement:imbued_lapis'})
    })