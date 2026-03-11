
particle dragon_breath ~ ~ ~ 0 0 0 1 140 force @a[distance=..256]
particle dragon_breath ~ ~ ~ 0 0 0 2 140 force @a[distance=..256]

item replace entity @s weapon.mainhand with totem_of_undying

execute store result entity @s Attributes[{Name:"minecraft:generic.max_health"}].Base double 1 run scoreboard players get dragonhealth trueEnding_settings
execute store result entity @s Health float 1 run scoreboard players get dragonhealth trueEnding_settings

execute store result score @s refresh_maxhealth run scoreboard players get dragonhealth trueEnding_settings

attribute @s generic.knockback_resistance base set 300

kill @e[type=marker,tag=trueEnding_endspike]
kill @e[type=phantom,tag=trueEnding_guardphantom]

execute positioned 42 110 0 run function true_ending:boss/phantom/summon_marker
execute positioned 33 110 -25 run function true_ending:boss/phantom/summon_marker
execute positioned 12 110 -40 run function true_ending:boss/phantom/summon_marker
execute positioned -13 110 -40 run function true_ending:boss/phantom/summon_marker
execute positioned -34 110 -25 run function true_ending:boss/phantom/summon_marker

execute positioned -42 110 -1 run function true_ending:boss/phantom/summon_marker
execute positioned -34 110 24 run function true_ending:boss/phantom/summon_marker
execute positioned -13 110 39 run function true_ending:boss/phantom/summon_marker
execute positioned 12 110 39 run function true_ending:boss/phantom/summon_marker
execute positioned 33 110 24 run function true_ending:boss/phantom/summon_marker


tag @s add trueEnding_dragon_particlechecked



