// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

past the following code into the file and add your desired formats and their sections between the brackets
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: FormatList = [

	// Sw/Sh Singles
	///////////////////////////////////////////////////////////////////

	{
		section: "LC Singles",
	
	},
	{
		name: "[Gen 8] LC OU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656348/">LC Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3661419/">LC Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3657374/">LC Viability Rankings</a>`,
		],

		mod: 'gen8',
		maxLevel: 5,
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Switch Priority Clause Mod'],
		banlist: [
		'NU','OU','Porygon + Download', 'Trapinch + Arena Trap', 'Diglett + Arena Trap'
		]
	},
	{
		name: "[Gen 8] LC UU",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3656348/">LC Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3661419/">LC Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3657374/">LC Viability Rankings</a>`,

		],

		mod: 'gen8',
		maxLevel: 5,
		ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Switch Priority Clause Mod'],
		banlist: [
		'NU','OU','Porygon + Download', 'Trapinch + Arena Trap', 'Diglett + Arena Trap','UU'
	]

},
{
	name: "[Gen 8] LC NU WIP",
	threads: [
		`&bullet; <a href="https://www.smogon.com/forums/threads/3656348/">LC Metagame Discussion</a>`,
		`&bullet; <a href="https://www.smogon.com/forums/threads/3661419/">LC Sample Teams</a>`,
		`&bullet; <a href="https://www.smogon.com/forums/threads/3657374/">LC Viability Rankings</a>`,

	],

	mod: 'gen8',
	maxLevel: 5,
	ruleset: ['Standard NatDex', 'OHKO Clause', 'Evasion Moves Clause', 'Species Clause', 'Dynamax Clause', 'Sleep Clause Mod', 'Switch Priority Clause Mod'],
	banlist: [
	'NU','OU','Porygon + Download', 'Trapinch + Arena Trap', 'Diglett + Arena Trap','UU', 'PU'
]
},

	// Sw/Sh Doubles
	///////////////////////////////////////////////////////////////////

	{
		section: "LC Doubles",
	
	},
	{
		name: "[Gen 8] DOUBLES LC",
		threads: [
			`&bullet; <a href="https://www.smogon.com/forums/threads/3666636/">Doubles OU Metagame Discussion</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658826/">Doubles OU Sample Teams</a>`,
			`&bullet; <a href="https://www.smogon.com/forums/threads/3658242/">Doubles OU Viability Rankings</a>`,
		],

	},
];
