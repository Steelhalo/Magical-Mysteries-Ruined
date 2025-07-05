//Weapons
StartupEvents.registry('item', event => {
    event.create('rustic_knife', 'sword').tier('stone').maxDamage(34).texture('magical_addons:item/rustic_knife').attackDamageBaseline(0).speedBaseline(0),

    //Rustic Whips
    event.create('rustic_whip_red', 'sword').tier('wood').maxDamage(41).texture('magical_addons:item/rustic_whip_red').attackDamageBaseline(5).speedBaseline(-3.5).displayName('Red Rustic Whip').tag('magical_addons:whip'),
    event.create('rustic_whip_orange', 'sword').tier('wood').maxDamage(41).texture('magical_addons:item/rustic_whip_orange').attackDamageBaseline(5).speedBaseline(-3.5).displayName('Orange Rustic Whip').tag('magical_addons:rustic_whip'),
    event.create('rustic_whip_yellow', 'sword').tier('wood').maxDamage(41).texture('magical_addons:item/rustic_whip_yellow').attackDamageBaseline(5).speedBaseline(-3.5).displayName('Yellow Rustic Whip').tag('magical_addons:rustic_whip'),
    event.create('rustic_whip_green', 'sword').tier('wood').maxDamage(41).texture('magical_addons:item/rustic_whip_green').attackDamageBaseline(5).speedBaseline(-3.5).displayName('Green Rustic Whip').tag('magical_addons:rustic_whip'),
    event.create('rustic_whip_lime', 'sword').tier('wood').maxDamage(41).texture('magical_addons:item/rustic_whip_lime').attackDamageBaseline(5).speedBaseline(-3.5).displayName('Lime Rustic Whip').tag('magical_addons:rustic_whip'),
    event.create('rustic_whip_blue', 'sword').tier('wood').maxDamage(41).texture('magical_addons:item/rustic_whip_blue').attackDamageBaseline(5).speedBaseline(-3.5).displayName('Blue Rustic Whip').tag('magical_addons:rustic_whip'),
    event.create('rustic_whip_cyan', 'sword').tier('wood').maxDamage(41).texture('magical_addons:item/rustic_whip_cyan').attackDamageBaseline(5).speedBaseline(-3.5).displayName('Cyan Rustic Whip').tag('magical_addons:rustic_whip'),
    event.create('rustic_whip_light_blue', 'sword').tier('wood').maxDamage(41).texture('magical_addons:item/rustic_whip_light_blue').attackDamageBaseline(5).speedBaseline(-3.5).displayName('Light Blue Rustic Whip').tag('magical_addons:rustic_whip'),
    event.create('rustic_whip_pink', 'sword').tier('wood').maxDamage(41).texture('magical_addons:item/rustic_whip_pink').attackDamageBaseline(5).speedBaseline(-3.5).displayName('Pink Rustic Whip').tag('magical_addons:rustic_whip'),
    event.create('rustic_whip_magenta', 'sword').tier('wood').maxDamage(41).texture('magical_addons:item/rustic_whip_magenta').attackDamageBaseline(5).speedBaseline(-3.5).displayName('Magenta Rustic Whip').tag('magical_addons:rustic_whip'),
    event.create('rustic_whip_purple', 'sword').tier('wood').maxDamage(41).texture('magical_addons:item/rustic_whip_purple').attackDamageBaseline(5).speedBaseline(-3.5).displayName('Purple Rustic Whip').tag('magical_addons:rustic_whip'),
    event.create('rustic_whip_white', 'sword').tier('wood').maxDamage(41).texture('magical_addons:item/rustic_whip_white').attackDamageBaseline(5).speedBaseline(-3.5).displayName('White Rustic Whip').tag('magical_addons:rustic_whip'),
    event.create('rustic_whip_grey', 'sword').tier('wood').maxDamage(41).texture('magical_addons:item/rustic_whip_grey').attackDamageBaseline(5).speedBaseline(-3.5).displayName('Grey Rustic Whip').tag('magical_addons:rustic_whip'),
    event.create('rustic_whip_light_grey', 'sword').tier('wood').maxDamage(41).texture('magical_addons:item/rustic_whip_light_grey').attackDamageBaseline(5).speedBaseline(-3.5).displayName('Light Grey Rustic Whip').tag('magical_addons:rustic_whip'),
    event.create('rustic_whip_black', 'sword').tier('wood').maxDamage(41).texture('magical_addons:item/rustic_whip_black').attackDamageBaseline(5).speedBaseline(-3.5).displayName('Black Rustic Whip').tag('magical_addons:rustic_whip'),
    event.create('rustic_whip_brown', 'sword').tier('wood').maxDamage(41).texture('magical_addons:item/rustic_whip_Brown').attackDamageBaseline(5).speedBaseline(-3.5).displayName('Brown Rustic Whip').tag('magical_addons:rustic_whip'),
    event.create('rustic_whip', 'sword').tier('wood').maxDamage(41).texture('magical_addons:item/rustic_whip').attackDamageBaseline(5).speedBaseline(-3.5).tag('magical_addons:rustic_whip'),
    
    //Decent Whips
    event.create('decent_whip_red', 'sword').tier('stone').maxDamage(63).texture('magical_addons:item/decent_whip_red').attackDamageBaseline(7).speedBaseline(-3.25).displayName('Red Decent Whip').tag('magical_addons:decent_whip'),
    event.create('decent_whip_orange', 'sword').tier('stone').maxDamage(63).texture('magical_addons:item/decent_whip_orange').attackDamageBaseline(7).speedBaseline(-3.25).displayName('Orange Decent Whip').tag('magical_addons:decent_whip'),
    event.create('decent_whip_yellow', 'sword').tier('stone').maxDamage(63).texture('magical_addons:item/decent_whip_yellow').attackDamageBaseline(7).speedBaseline(-3.25).displayName('Yellow Decent Whip').tag('magical_addons:decent_whip'),
    event.create('decent_whip_green', 'sword').tier('stone').maxDamage(63).texture('magical_addons:item/decent_whip_green').attackDamageBaseline(7).speedBaseline(-3.25).displayName('Green Decent Whip').tag('magical_addons:decent_whip'),
    event.create('decent_whip_lime', 'sword').tier('stone').maxDamage(63).texture('magical_addons:item/decent_whip_lime').attackDamageBaseline(7).speedBaseline(-3.25).displayName('Lime Decent Whip').tag('magical_addons:decent_whip'),
    event.create('decent_whip_blue', 'sword').tier('stone').maxDamage(63).texture('magical_addons:item/decent_whip_blue').attackDamageBaseline(7).speedBaseline(-3.25).displayName('Blue Decent Whip').tag('magical_addons:decent_whip'),
    event.create('decent_whip_cyan', 'sword').tier('stone').maxDamage(63).texture('magical_addons:item/decent_whip_cyan').attackDamageBaseline(7).speedBaseline(-3.25).displayName('Cyan Decent Whip').tag('magical_addons:decent_whip'),
    event.create('decent_whip_light_blue', 'sword').tier('stone').maxDamage(63).texture('magical_addons:item/decent_whip_light_blue').attackDamageBaseline(7).speedBaseline(-3.25).displayName('Light Blue Decent Whip').tag('magical_addons:decent_whip'),
    event.create('decent_whip_pink', 'sword').tier('stone').maxDamage(63).texture('magical_addons:item/decent_whip_pink').attackDamageBaseline(7).speedBaseline(-3.25).displayName('Pink Decent Whip').tag('magical_addons:decent_whip'),
    event.create('decent_whip_magenta', 'sword').tier('stone').maxDamage(63).texture('magical_addons:item/decent_whip_magenta').attackDamageBaseline(7).speedBaseline(-3.25).displayName('Magenta Decent Whip').tag('magical_addons:decent_whip'),
    event.create('decent_whip_purple', 'sword').tier('stone').maxDamage(63).texture('magical_addons:item/decent_whip_purple').attackDamageBaseline(7).speedBaseline(-3.25).displayName('Purple Decent Whip').tag('magical_addons:decent_whip'),
    event.create('decent_whip_white', 'sword').tier('stone').maxDamage(63).texture('magical_addons:item/decent_whip_white').attackDamageBaseline(7).speedBaseline(-3.25).displayName('White Decent Whip').tag('magical_addons:decent_whip'),
    event.create('decent_whip_grey', 'sword').tier('stone').maxDamage(63).texture('magical_addons:item/decent_whip_grey').attackDamageBaseline(7).speedBaseline(-3.25).displayName('Grey Decent Whip').tag('magical_addons:decent_whip'),
    event.create('decent_whip_light_grey', 'sword').tier('stone').maxDamage(63).texture('magical_addons:item/decent_whip_light_grey').attackDamageBaseline(7).speedBaseline(-3.25).displayName('Light Grey Decent Whip').tag('magical_addons:decent_whip'),
    event.create('decent_whip_black', 'sword').tier('stone').maxDamage(63).texture('magical_addons:item/decent_whip_black').attackDamageBaseline(7).speedBaseline(-3.25).displayName('Black Decent Whip').tag('magical_addons:decent_whip'),
    event.create('decent_whip_brown', 'sword').tier('stone').maxDamage(63).texture('magical_addons:item/decent_whip_Brown').attackDamageBaseline(7).speedBaseline(-3.25).displayName('Brown Decent Whip').tag('magical_addons:decent_whip'),
    event.create('decent_whip', 'sword').tier('stone').maxDamage(63).texture('magical_addons:item/decent_whip').attackDamageBaseline(7).speedBaseline(-3.25).tag('magical_addons:whip')
})

//Tools
StartupEvents.registry('item', event => {
    
})