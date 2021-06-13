const TO_STAGE_3 = document.querySelectorAll('#toStage3');
const TO_STAGE_4 = document.querySelectorAll('#toStage4');
const TO_STAGE_5 = document.querySelectorAll('#toStage5');

let character = {};

class Character {
	constructor(chName, chGender) {
		this.chName = chName;
		this.chGender = chGender;
		this.chRace;
		this.chAvatar;
		this.chClass;
		this.chBackground;
		this.chStory;
		this.chLangA = 'Speaks Common Tongue';
		this.chLangB;
		this.raceModA;
		this.raceModB;
		this.classModA;
		this.classModB;
		this.backgroundModA;
		this.backgroundModB;
		this.health = 10;
		this.mana = 10;
		this.strength = 10;
		this.dexterity = 10;
		this.speed = 10;
		this.stealth = 10;
		this.charisma = 10;
		this.luck = 10;
	}

	setRaceMods() {
		switch (this.chRace) {
			case 'Dwarf':
				this.chLangB = 'Speaks secret Dwarf Tongue';
				this.raceModA = 'Treasure Hunter (Luck +5)';
				this.raceModB = 'Short Legs (Speed -3)';
				this.luck = this.luck + 5;
				this.speed = this.speed - 3;
				break;
			case 'Elf':
				this.chLangB = 'Speaks secret Elvish Tongue';
				this.raceModA = 'Lembas (Health +5)';
				this.raceModB = 'Selfish (Charisma -3)';
				this.health = this.health + 5;
				this.charisma = this.charisma - 3;
				break;
			case 'Hobbit':
				this.chLangB = 'Can Learn Elvish Tongue';
				this.raceModA = 'Survivor (Strength +5)';
				this.raceModB = 'Food Carrier (Speed -3)';
				this.strength = this.strength + 5;
				this.speed = this.speed - 3;
				break;
			case 'Human':
				this.chLangB = 'Can Learn Elvish';
				this.raceModA = 'Kingsman (Dexterity +5)';
				this.raceModB = 'Heavy Armor (Stealth -3)';
				this.dexterity = this.dexterity + 5;
				this.stealth = this.stealth - 3;
				break;
			case 'Orc':
				this.chLangB = 'Speaks secret Orc Tongue';
				this.raceModA = 'Survivor (Strength +5)';
				this.raceModB = 'Fear of Light (Mana -3)';
				this.strength = this.strength + 5;
				this.mana = this.mana - 3;
				break;
		}
	}
	setClassMods() {
		switch (this.chClass) {
			case 'Farmer':
				this.classModA = 'Quality Food (Health +4)';
				this.classModB = 'Hard Worker (Strength +2)';
				this.health = this.health + 4;
				this.strength = this.strength + 2;
				break;
			case 'Hunter':
				this.classModA = 'Dead Eye (Luck +4)';
				this.classModB = 'Furtiveness (Stealth +2)';
				this.luck = this.luck + 4;
				this.stealth = this.stealth + 2;
				break;
			case 'Warrior':
				this.classModA = 'Trained Soldier (Strength +4)';
				this.classModB = 'Camouflage (Stealth +2)';
				this.strength = this.strength + 4;
				this.stealth = this.stealth + 2;
				break;
			case 'Wizard':
				this.classModA = 'Meditation (Mana +4)';
				this.classModB = 'Enchanter (Charisma +2)';
				this.mana = this.mana + 4;
				this.charisma = this.charisma + 2;
				break;
		}
	}
	setBackgroundMods() {
		switch (this.chBackground) {
			case 'Isengardian':
				this.backgroundModA = 'White Hand (Strength + 2)';
				this.backgroundModB = 'Jealous Master (Mana - 2)';
				this.strength = this.strength + 2;
				this.mana = this.mana - 2;
				break;
			case 'Noble':
				this.backgroundModA = 'Well Educated (Charisma + 2)';
				this.backgroundModB = 'Bookworm (Strength - 2)';
				this.charisma = this.charisma + 2;
				this.strength = this.strength - 2;
				break;
			case 'Thief':
				this.backgroundModA = 'Experienced (Stealth + 2)';
				this.backgroundModB = 'Low Faith(Mana - 2)';
				this.stealth = this.stealth + 2;
				this.mana = this.mana - 2;
				break;
			case 'Wanderer':
				this.backgroundModA = 'Watchful Eye (Luck + 2)';
				this.backgroundModB = 'Ragged Clothes (Charisma - 2)';
				this.luck = this.luck + 2;
				this.charisma = this.charisma - 2;
				break;
		}
	}
}

const MALE_NAMES = [
	'Elrond',
	'Frodo',
	'Glorfindel',
	'Aragorn',
	'Turin',
	'Bolg',
	'Azog',
	'Uglúk',
	'Gorbag',
	'Fili',
	'Kili',
	'Gloin',
	'Sam',
	'Adanel',
	'Aegnor',
	'Belegorn',
	'Bëorn',
	'Bereth',
	'Boromir',
	'Cirdan',
	'Lagduf',
];

const FEMALE_NAMES = [
	'Arwen',
	'Berylla',
	'Camellia',
	'Eowyn',
	'Esmeralda',
	'Freda',
	'Galadriel',
	'Tauriel',
	'Goldberry',
	'Luthien',
	'Nimrodel',
	'Yavanna',
	'Nimrodel',
	'Elenwë',
	'Gilraen',
	'Irimë',
	'Uinen',
	'Zamin',
	'Mithrellas',
	'Mairen',
	'Isilmë',
];
// EVENTS

$('#toStage1').on('click', () => {
	nextStage(0);
});

$('#toStage2').on('click', () => {
	// sets NAME and GENDER
	let setName = $('#setName').val();
	let setGender = $('#setGender option:selected').text();

	if (setName.trim() == '') {
		errNoName();
	} else if (setGender == "Character's Gender") {
		errNoGender();
	} else {
		// saves name and gender to global character
		character = new Character(setName, setGender);
		// prints character name + gender symbolin the sidebar
		$('#sideName').text(setName + printGenderSymbol());
		// stops name blinking in sidebar
		$('#sideName').css('animation', 'none');
		nextStage(1);
		showAtavatars(setGender);
	}
});

$('#randomName').on('click', () => {
	// select random name according to selected gender
	let gender = $('#setGender option:selected').text();

	if (gender == `Character's Gender`) {
		// returns error if gender is in default state
		return errNoGender();
	}

	gender === 'Female'
		? $('#setName').val(FEMALE_NAMES[Math.floor(Math.random() * FEMALE_NAMES.length)])
		: $('#setName').val(MALE_NAMES[Math.floor(Math.random() * MALE_NAMES.length)]);
});

for (button of TO_STAGE_3) {
	// adds RACE
	button.addEventListener('click', toStage3.bind(this, button));
}

function toStage3(button) {
	// sets race to Character and prints it on sidebar.
	// Updates character stats and stats color
	// Sets avatar and Jump to next stage
	let modName = button.value;
	setRace(modName);
	sidebarPrintMods('Race', modName);
	sidebarShowStats();
	setAvatar('race');
	updateStats();
	statsColors();
	nextStage(2);
}

for (button of TO_STAGE_4) {
	// adds CLASS
	button.addEventListener('click', toStage4.bind(this, button));
}
function toStage4(button) {
	let modName = button.value;
	setClass(modName);
	setAvatar('class');
	sidebarPrintMods('Class', modName);
	updateStats();
	statsColors();
	nextStage(3);
}

for (button of TO_STAGE_5) {
	// adds BACKGROUND
	button.addEventListener('click', toStage5.bind(this, button));
}
function toStage5(button) {
	let modName = button.value;
	setBackground(modName);
	setAvatar('back');
	sidebarPrintMods('Background', modName);
	updateStats();
	statsColors();
	nextStage(4);
}

$('#toStage6').on('click', () => {
	let Story = $('#textarea').val();
	setStory(Story);
	saveToLocalStorage();
	// list characters on next stage avatar / name
	nextStage(5);
});

// FUNCTIONS

function nextStage(currentStage) {
	$(`#stage${currentStage}`).removeClass('show-card');
	$(`#stage${currentStage + 1}`).addClass('show-card');
}

function prevStage(currentStage) {
	// CALLED ONCLICK
	$(`#stage${currentStage}`).removeClass('show-card');
	$(`#stage${currentStage - 1}`).addClass('show-card');

	clearMod(currentStage);
	updateStats();
	resetStatColors();
}

function printGenderSymbol() {
	return $('#setGender option:selected').text() == 'Female' ? ' ♀️' : ' ♂️';
}

function showAtavatars(gender) {
	$('.' + gender).addClass('show-avatar');

	//fix doble avatar
	let oppGender = gender == 'Female' ? 'Male' : 'Female';
	$('.' + oppGender).removeClass('show-avatar');
}

function setRace(Race) {
	// set Race to Character
	character.chRace = Race;
	character.setRaceMods();
	$('#nameRace').removeClass('hide');
}

function setRace(Race) {
	// set Race to Character
	character.chRace = Race;
	character.setRaceMods();
	$('#nameRace').removeClass('hide');
}

function setClass(Class) {
	character.chClass = Class;
	character.setClassMods();
	$('#nameClass').removeClass('hide');
}
function setBackground(Background) {
	character.chBackground = Background;
	character.setBackgroundMods();
	$('#nameBackground').removeClass('hide');
}

function setStory(Story) {
	character.chStory = Story;
}

function sidebarPrintMods(modType, modName) {
	// FIXME: JQUERY??
	// clon and print MODS Stats to the Sidebar
	let currentStats = document.querySelector(`#${modName}Stats`);
	let clonedStats = currentStats.cloneNode(true);
	let modStats = document.querySelector(`#side${modType}`);
	let sidebar = document.querySelector('#sidebar');
	document.querySelector(`#name${modType}`).textContent = modName;
	sidebar.replaceChild(clonedStats, modStats);
}

function sidebarShowStats() {
	$('#characterStats').addClass('show-stats');
}

function setAvatar(modType) {
	// Set Character Avatar and updates site FavIcon
	// Set MODS avatar

	if (modType == 'race') {
		$('#avatar').attr('src', `img/avatars/${character.chGender}${character.chRace}.png`);
		$('#favicon').attr('href', `img/avatars/${character.chGender}${character.chRace}.png`);
	} else if (modType == 'class') {
		$('#classImg').attr('src', `img/classes/${character.chClass}.png`);
	} else if (modType == 'back') {
		$('#backImg').attr('src', `img/backgrounds/${character.chBackground}.png`);
	}
}

function updateStats() {
	$('#healthValue').text(character.health);
	$('#manaValue').text(character.mana);
	$('#strengthValue').text(character.strength);
	$('#dexValue').text(character.dexterity);
	$('#speedValue').text(character.speed);
	$('#stealthValue').text(character.stealth);
	$('#charValue').text(character.charisma);
	$('#luckValue').text(character.luck);
}

function statsColors() {
	// FIXME: JQUERY??
	const STATS = document.querySelectorAll('.value');
	const STATS_ARR = Array.from(STATS);
	for (stat of STATS_ARR) {
		if (stat.textContent > 10) {
			stat.classList.add('stats-pos-value');
		} else if (stat.textContent < 10) {
			stat.classList.add('stats-neg-value');
		} else {
			stat.classList.add('default');
		}
	}
}

function textareaCounter(textarea) {
	if (textarea.length) {
		$('#charcount').text(textarea.length + ' out of 1200 characters');
	}
}

function saveToLocalStorage() {
	// Saves created character to LS with incremental num.
	characterNumber = localStorage.length;
	localStorage.setItem(`Character ${characterNumber + 1}`, JSON.stringify(character));
}

// ERROR MSGS

function errNoName() {
	// error if name is undefined
	Swal.fire({
		icon: 'error',
		html: '<h2 class="swal-title">You Shall Not Pass!</h2><br><span class="swal-txt">Give your character a <strong>name</strong> to continue</span>',
		confirmButtonText: '<i class="fa fa-thumbs-up"></i> OK',
		confirmButtonAriaLabel: 'OK',
	});
}

function errNoGender() {
	// error if gender is undefined
	Swal.fire({
		icon: `error`,
		html: `<h2 class="swal-title">You Shall Not Pass!</h2><br><span class="swal-txt">Choose your character's <strong>gender</strong></span>`,
		confirmButtonText: `<i class="fa fa-thumbs-up"></i> OK`,
		confirmButtonAriaLabel: `OK`,
	});
}

// RESETS
function resetStatColors() {
	//FIXME: JQUERY??
	const STATS = document.querySelectorAll('.value');
	const STATS_ARR = Array.from(STATS);
	for (stat of STATS_ARR) {
		if (stat.textContent == '10') {
			stat.classList.remove('stats-pos-value');
			stat.classList.remove('stats-neg-value');
			stat.classList.add('default');
		}
	}
}

function clearMod(currentStage) {
	if (currentStage === 3) {
		let revertId = $('#' + character.chRace + 'Stats');

		revertId[0].id = 'sideRace';
		character.chLangB = undefined;
		character.raceModA = undefined;
		character.raceModB = undefined;

		character.health = 10;
		character.mana = 10;
		character.strength = 10;
		character.dexterity = 10;
		character.speed = 10;
		character.stealth = 10;
		character.charisma = 10;
		character.luck = 10;

		$('#nameRace').addClass('hide');
		$('#sideRace').addClass('hide');
		$('#avatar').attr('src', `img/avatars/placeholder.png`);
		$('#favicon').attr('href', `img/avatars/placeholder.png`);
	} else if (currentStage === 4) {
		let revertId = $('#' + character.chClass + 'Stats');

		revertId[0].id = 'sideClass';
		character.classModA = undefined;
		character.classModB = undefined;
		$('#nameClass').addClass('hide');
		$('#sideClass').addClass('hide');
		$('#classImg').attr('src', `img/classes/placeholder.png`);

		switch (character.chClass) {
			case 'Farmer':
				character.health = character.health - 4;
				character.strength = character.strength - 2;
				break;
			case 'Hunter':
				character.luck = character.luck - 4;
				character.stealth = character.stealth - 2;
				break;
			case 'Warrior':
				character.strength = character.strength - 4;
				character.stealth = character.stealth - 2;
				break;
			case 'Wizard':
				character.mana = character.mana - 4;
				character.charisma = character.charisma - 2;
				break;
		}
	} else if (currentStage === 5) {
		let revertId = $('#' + character.chBackground + 'Stats');

		revertId[0].id = 'sideBackground';
		character.backgroundModA = undefined;
		character.backgroundModB = undefined;
		$('#nameBackground').addClass('hide');
		$('#sideBackground').addClass('hide');
		$('#backImg').attr('src', `img/backgrounds/placeholder.png`);

		switch (character.chBackground) {
			case 'Isengardian':
				character.strength = character.strength - 2;
				character.mana = character.mana + 2;
				break;
			case 'Noble':
				character.charisma = character.charisma - 2;
				character.strength = character.strength + 2;
				break;
			case 'Thief':
				character.stealth = character.stealth - 2;
				character.mana = character.mana + 2;
				break;
			case 'Wanderer':
				character.luck = character.luck - 2;
				character.charisma = character.charisma + 2;
				break;
		}
	} else if (currentStage === 6) {
		let last = localStorage.length;
		localStorage.removeItem(`Character ${last}`);
		character.chStory = '';
	}
}

// *** EasterEgg *** //

$('#easterEgg').on('click', () => {
	Swal.fire({
		title: `When you set to MAX your Character's STRENGTH and CHARISMA `,
		imageUrl: 'img/egg.jpg',
		imageWidth: 1300,
		imageAlt: 'easter egg',
	});
});
