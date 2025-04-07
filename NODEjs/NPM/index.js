// var generateName = require('sillyname');

import generateName from "sillyName";

import {randomSuperhero} from 'superheroes';

var sillyName = generateName();

var name = randomSuperhero();

console.log(`My nmae is ${sillyName} whereas my heroic name is ${name}`);
