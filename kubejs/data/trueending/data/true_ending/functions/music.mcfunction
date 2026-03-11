scoreboard players add @s trueEnding_music 1

execute if score @s trueEnding_music matches 1 run stopsound @s music true_ending:music.dragon
execute if score @s trueEnding_music matches 1 run playsound true_ending:music.dragon music @s

execute if score @s trueEnding_music matches 4100 run scoreboard players set @s trueEnding_music 0

execute in the_end positioned 0 80 0 unless entity @s[distance=..128,predicate=true_ending:position/the_end] run stopsound @s music true_ending:music.dragon
execute in the_end positioned 0 80 0 unless entity @s[distance=..128,predicate=true_ending:position/the_end] run scoreboard players reset @s trueEnding_music