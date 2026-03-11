scoreboard objectives remove trueEnding_settings
scoreboard objectives add trueEnding_settings dummy
function true_ending:other/default_settings

function true_ending:settings/1

playsound entity.experience_orb.pickup player @s ~ ~ ~ 1 1

tag @e[type=ender_dragon] remove trueEnding_dragon_particlechecked