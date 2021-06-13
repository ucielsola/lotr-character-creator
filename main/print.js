$(document).ready(fillSelect);

let charNum;

function fillSelect() {
	// ON LOAD
	// appends one OPTION to SELECT per each Character in LocalStorage
	for (let i = 1; i <= localStorage.length; i++) {
		let option = document.createElement('option');
		option.text = `Character ${i}`;
		option.value = i;

		$('#select').append(option);
	}
}

function getCharacter(event) {
	// get selected character from Local Storage and prints it
	let selected = event.target;
	let character = JSON.parse(localStorage.getItem(`Character ${selected.value}`));
	charNum = selected.value;
	// avatars
	$('#avatar').attr('src', `img/avatars/${character.chGender}${character.chRace}.png`);
	$('#classIMG').attr('src', `img/classes/${character.chClass}.png`);
	$('#backIMG').attr('src', `img/backgrounds/${character.chBackground}.png`);

	// text
	$('#name').text(character.chName);
	$('#race').text(character.chRace);
	$('#class').text(character.chClass);
	$('#background').text(character.chBackground);
	$('#story').text(character.chStory);
	// stats
	$('#healthStats').text(character.health);
	$('#manaStats').text(character.mana);
	$('#strengthStats').text(character.strength);
	$('#dexStats').text(character.dexterity);
	$('#speedStats').text(character.speed);
	$('#stealthStats').text(character.stealth);
	$('#charismaStats').text(character.charisma);
	$('#luckStats').text(character.luck);

	// mods
	if ($('.removeDup')) {
		// fix duplicated
		$('.removeDup').remove();
	}

	$('#raceUl').append(`<li class='removeDup'>${character.chLangA}</li>`);
	$('#raceUl').append(`<li class='removeDup'>${character.chLangB}</li>`);
	$('#raceUl').append(`<li class='removeDup'>${character.raceModA}</li>`);
	$('#raceUl').append(`<li class='removeDup'>${character.raceModB}</li>`);

	$('#classUl').append(`<li class='removeDup'>${character.classModA}</li>`);
	$('#classUl').append(`<li class='removeDup'>${character.classModB}</li>`);

	$('#backUl').append(`<li class='removeDup'>${character.backgroundModA}</li>`);
	$('#backUl').append(`<li class='removeDup'>${character.backgroundModB}</li>`);
}

function printPDF() {
	// ONCLICK
	if (!charNum) {
		// aprovecho que undefined es falsy.
		return printErr();
	}

	const PRINT = document.querySelector('#printable');
	html2pdf()
		.set({
			margin: 0.5,
			filename: `character ${charNum}.pdf`,
			image: {
				type: 'jpeg',
				quality: 0.8,
			},
			htnl2canvas: {
				scale: 1,
				letterRendering: true,
			},
			jsPDF: {
				unit: 'cm',
				format: 'a4',
				orientation: 'portrait',
			},
		})
		.from(PRINT) // no funciona con jQuery!
		.save()
		.catch((err) => console.log(err))
		.then(console.log('printed!'));
}

function printErr() {
	Swal.fire({
		icon: 'error',
		title: 'Error',
		text: 'Select a Character from the list',
	});
}
