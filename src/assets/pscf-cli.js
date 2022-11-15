#!/usr/bin/env node
'use strict'
import { default as PSCompetitiveFormat } from './pscf.js'
import { default as hljs } from 'highlight.js'
import { argv, argv0 } from 'process'

{
  const { name } = PSCompetitiveFormat()

  hljs.registerLanguage(name, PSCompetitiveFormat)
  //hljs.registerAliases(aliases, { name })
  //console.log(hljs.listLanguages())
}

console.log(hljs.highlight(`Infernape (Monkfu) (M) @ Expert Belt
Ability: Blaze
EVs: 4 HP / 252 Atk / 252 Spe
IVs: 0 SpA
Shiny: Yes
- Close Combat / Drain Punch / Shadow Claw
- Flare Blitz
- Earthquake
- Slack Off`, {language: 'pscf'}).value)