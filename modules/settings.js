Hooks.on("ready", function () {
  console.log("Setting system settings for Unlimited Dungeons")

  game.settings.set("dungeonworld", "xpFormula", "(@attributes.level.value + 10)")

  game.settings.set("dungeonworld", "alignmentSingle", "Drive")
  game.settings.set("dungeonworld", "alignmentPlural", "Drives")
  game.settings.set("dungeonworld", "raceSingle", "Background")
  game.settings.set("dungeonworld", "racePlural", "Backgrounds")
  game.settings.set("dungeonworld", "bondSingle", "Bond")
  game.settings.set("dungeonworld", "bondPlural", "Bonds")

  game.settings.set("dungeonworld", "noCompendiumAutoData", true)
  game.settings.set("dungeonworld", "compendiumPrefix", "ud")

  game.settings.set("dungeonworld", "noAbilityScores", true)
  game.settings.set("dungeonworld", "noAbilityIncrease", true)
  game.settings.set("dungeonworld", "noConstitutionToHP", true)
  game.settings.set("dungeonworld", "noSTRToMaxLoad", true)

  game.settings.set("dungeonworld", "debilityLabelSTR", "Weakened")
  game.settings.set("dungeonworld", "debilityLabelDEX", "Shaken")
  game.settings.set("dungeonworld", "debilityLabelCON", "Sick")
  game.settings.set("dungeonworld", "debilityLabelINT", "Muddled")
  game.settings.set("dungeonworld", "debilityLabelWIS", "Tired")
  game.settings.set("dungeonworld", "debilityLabelCHA", "Stressed")
})
