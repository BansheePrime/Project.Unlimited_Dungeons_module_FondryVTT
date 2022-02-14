const classDamageBonusMapping = {
  "The Barbarian": 2,
  "The Bard": 0,
  "The Cleric": 0,
  "The Druid": 0,
  "The Fighter": 2,
  "The Immolator": 1,
  "The Paladin": 2,
  "The Ranger": 1,
  "The Thief": 1,
  "The Wizard": 1,
}

Hooks.on("updateActor", function (actor, change, options) {
  // Update only on a class change event
  if (options.diff && change?.data?.details?.class) {
    const className = change.data.details.class
    actor.update({
      data: {
        attributes: {
          damage: {
            misc: classDamageBonusMapping[className],
          },
        },
      },
    })
  }
})
