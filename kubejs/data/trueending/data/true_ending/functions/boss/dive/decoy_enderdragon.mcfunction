scoreboard players add @s trueEnding_count 1

execute at @s run particle dust_color_transition 1.000 0.000 0.969 3 0.000 0.102 1.000 ~ ~2.5 ~ .3 .3 .3 1 2 force @a[distance=..256]

data modify entity @s DragonPhase set value 5

tp @s ~ ~-1.8 ~

execute unless score @s trueEnding_count matches 900.. unless block ~ ~-2 ~ #true_ending:permeable run function true_ending:boss/dive/hit
execute unless block ~ ~-2 ~ #true_ending:permeable run scoreboard players set @s trueEnding_count 900

execute if score @s trueEnding_count matches 1000.. run kill @s
