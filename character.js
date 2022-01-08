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
