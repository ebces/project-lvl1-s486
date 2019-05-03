#!/usr/bin/env node
import * as func from '..';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
console.log('What is the result of the expression?');
const actual = readlineSync.question('May I have your name?');
func.playerName(actual);
func.expressions();
