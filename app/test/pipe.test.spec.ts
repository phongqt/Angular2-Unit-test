import {it, describe, expect, beforeEach, inject} from 'angular2/testing';
import {TruncatePipe} from '../pipes/truncate.pipe';
import {CapitalizeFirstLetterPipe} from '../pipes/capitalize-first-letter.pipe';
import {CapitalizePipe} from '../pipes/capitalize.pipe'

describe('Test Pipe', () => {
    let trunCate: TruncatePipe;
    let capitalize: CapitalizePipe;
    let capitalizeFirstLetter: CapitalizeFirstLetterPipe;
    beforeEach(()=>{
        trunCate = new TruncatePipe();
        capitalize = new CapitalizePipe();
        capitalizeFirstLetter = new CapitalizeFirstLetterPipe();
    });
  // Truncate string
  it('transforms "angularjs2 typescript" to "angularjs2..."', () => {
    expect(trunCate.transform('angularjs2 typescript',['10','...'])).toEqual('angularjs2...');
  });
  
  // Capitalize first letter  
  it('transforms "angularjs2 typescript" to "Angularjs2 Typescript"', () => {
    expect(capitalizeFirstLetter.transform('angularjs2 typescript',[])).toEqual('Angularjs2 Typescript');
  });
  
  // Capitalize string  
  it('transforms "angularjs2 typescript" to "Angularjs2 typescript"', () => {
    expect(capitalize.transform('angularjs2 typescript',[])).toEqual('Angularjs2 typescript');
  });
});
