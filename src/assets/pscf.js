const lineReScope = (...re) => [/^\s*/, ...re, /\s*$/]

const PSExport = function(hljs) {
  return {
    name: 'psexport',
    aliases: ['pse', 'psex', 'psx'],
    contains: [
      {
        match: /^\s*(.+?)\s*(?:(\()([^()]+?)(\)))?\s*(?:(\()([MF])(\)))?\s*(?:(@)\s*(.*?))?\s*$/,
        scope: {
          1: 'string',
          2: 'punctuation',
          3: 'symbol',
          4: 'punctuation',
          5: 'punctuation',
          6: 'symbol',
          7: 'punctuation',
          8: 'operator',
          9: 'title'
        }
      },
      {
        begin: /^\s*([EI]Vs)(:)\s*/,
        end: /\s*$/,
        scope: {
          1: 'property',
          2: 'operator',
        },
        contains: [
          {
            match: /\s*(\d{1,3})\s+(HP|Atk|Def|Spe|SpA|SpD)\s*(\/)\s*/,
            scope: {
              1: 'number',
              2: 'symbol',
              3: 'operator'
            }
          },
          {
            match: /\s*(\d{1,3})\s+(HP|Atk|Def|Spe|SpA|SpD)\s*$/,
            scope: {
              1: 'number',
              2: 'symbol'
            }
          }
        ]
      },
      {
        match: /^\s*(Shiny|Gigantamax)(:)\s*(Yes|No)\s*$/,
        scope: {
          1: 'property',
          2: 'operator',
          3: 'literal',
        },
      },
      {
        match: /^\s*(Ability)(:)\s*(.*?)\s*$/,
        scope: {
          1: 'property',
          2: 'operator',
          3: 'title',
        },
      },
      {
        match: /^\s*(Level|Happiness)(:)\s*(\d+)\s*$/,
        scope: {
          1: 'property',
          2: 'operator',
          3: 'number',
        },
      },
      {
        match: /^\s*([A-Z][a-z]+)\s*([Nn]ature)\s*$/,
        scope: {
          1: 'symbol',
          2: 'property'
        },
      },
      {
        begin: /^\s*(-)\s*/,
        end: /\s*$/,
        scope: {
          1: 'operator',
        },
        contains: [
          {
            match: /\s*([A-Za-z0-9 ]+)\s*(?:(\[)([A-Za-z]+)(\])\s*)(\/)\s*/,
            scope: {
              1: 'title',
              2: 'punctuation',
              3: 'symbol',
              4: 'punctuation',
              5: 'operator'
            }
          },
          {
            match: /\s*([A-Za-z0-9 ]+)\s*(?:(\[)([A-Za-z]+)(\])\s*)\s*$/,
            scope: {
              1: 'title',
              2: 'punctuation',
              3: 'symbol',
              4: 'punctuation'
            }
          }
        ]
      },
    ]
  }
}

export default PSExport