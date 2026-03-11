

execute if score @s trueEnding_bosstime matches 0.. run scoreboard players add @s trueEnding_bosstime 1

execute store result score @s trueEnding_healthpercent run data get entity @s Health
execute store result score @s trueEnding_y run data get entity @s Pos[1]
execute store result score @s trueEnding_dragonphase run data get entity @s DragonPhase

#particle trail
execute if score dragontrail trueEnding_settings matches 1 as @s run particle dust_color_transition 1.000 0.000 0.969 3 0.000 0.102 1.000 ~ ~2.5 ~ .6 .6 .6 1 2 force @a[distance=..256]
execute if score dragontrail trueEnding_settings matches 1 as @s run particle dragon_breath ~ ~2.5 ~ .3 .3 .3 .02 2 normal


#converts health to a percent

scoreboard players operation @s trueEnding_healthpercent *= 1000 trueEnding_constants
scoreboard players operation @s trueEnding_healthpercent /= dragonhealth trueEnding_settings

execute if score music_boss trueEnding_settings matches 1 positioned 0 80 0 as @a[distance=..128] unless score @s trueEnding_music matches 0.. run scoreboard players set @s trueEnding_music 0


#=================================================


#triple dive chance
execute as @s[predicate=true_ending:condition/perching,tag=!trueEnding_inattack] if score @s trueEnding_healthpercent matches ..666 run scoreboard players set @s trueEnding_bosstime 960




#health amounts
execute if score @s[tag=!trueEnding_halfhealth] trueEnding_healthpercent matches ..666 run scoreboard players set @s trueEnding_bosstime 1
execute if score @s[tag=!trueEnding_halfhealth] trueEnding_healthpercent matches ..666 run tag @s add trueEnding_halfhealth

execute if score @s[tag=!trueEnding_quarterhealth] trueEnding_healthpercent matches ..333 run scoreboard players set @s trueEnding_bosstime 2001
execute if score @s[tag=!trueEnding_quarterhealth] trueEnding_healthpercent matches ..333 run tag @s add trueEnding_quarterhealth

execute unless score @s[predicate=!true_ending:holding/totem] trueEnding_bosstime matches 3000.. run scoreboard players set @s trueEnding_bosstime 3000


#invulnerabity
execute unless score @s trueEnding_bosstime matches 3000.. if score @s trueEnding_healthpercent matches ..100 run function true_ending:boss/a_main_final
execute unless score @s[tag=!trueEnding_inattack] trueEnding_bosstime matches 3000.. unless score @s trueEnding_healthpercent matches ..100 run data modify entity @s Invulnerable set value 0b

#crystal count
execute if score crystalcount trueEnding_settings matches 1 positioned 0 65 0 if score 5tick trueEnding_count matches 1 run function true_ending:boss/crystal_count

#######################################################################

#dive chance
execute if score 20tick trueEnding_count matches 1 as @s[tag=!trueEnding_inattack] if predicate true_ending:chance/6_percent run scoreboard players set @s trueEnding_bosstime 1001

#ultra fireball chance
execute if score 1min trueEnding_count matches 1 if entity @p[distance=..128,gamemode=!spectator,gamemode=!creative] if score @s[tag=!trueEnding_inattack,predicate=!true_ending:condition/dragonphase_perched] trueEnding_healthpercent matches ..666 if predicate true_ending:chance/15_percent run scoreboard players set @s trueEnding_bosstime 20

#laser
execute if score 20tick trueEnding_count matches 1 unless entity @e[distance=..128,type=area_effect_cloud,tag=trueEnding_dragonbreath_quarter] if score @s[tag=!trueEnding_inattack] trueEnding_healthpercent matches ..333 if predicate true_ending:chance/20_percent run scoreboard players set @s trueEnding_bosstime 2001

#######################################################################
#phases

execute if score @s trueEnding_bosstime matches 0..218 run function true_ending:boss/phase_ultra_fireball

execute if score @s trueEnding_bosstime matches 900..1999 run function true_ending:boss/dive/phase

execute if score @s trueEnding_bosstime matches 2000..2999 run function true_ending:boss/phase_laser

execute if score @s trueEnding_bosstime matches 3000..3999 run function true_ending:boss/phase_totem


#extra ultra fireballs!
execute if score @s trueEnding_bosstime matches 4001 run tag @s add trueEnding_inattack
execute if score @s trueEnding_bosstime matches 4015 run function true_ending:boss/summon_ultra_fireball
execute if score @s trueEnding_bosstime matches 4030 run function true_ending:boss/summon_ultra_fireball
execute if score @s trueEnding_bosstime matches 4045 run tag @s remove trueEnding_inattack
execute if score @s trueEnding_bosstime matches 4045 run scoreboard players set @s trueEnding_bosstime 219

#waiting for phase attacks
execute if score @s trueEnding_bosstime matches 220 run scoreboard players set @s trueEnding_bosstime 219

