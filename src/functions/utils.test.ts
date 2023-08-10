import { addZerosToStart } from './utils';

describe('util functions', () => {
  describe('addZerosToStart', () => {
    it('Should return default pokemon number', () => {
      const result = addZerosToStart();

      expect(result).toBe('#000');
    });

  
  it('Should return correct formating for a one digits number', () => {
    const result = addZerosToStart(9);

    expect(result).toBe('#009');
  });

    it('Should return correct formating for a two digits number', () => {
      const result = addZerosToStart(52);

      expect(result).toBe('#052');
    });

  it('Should return correct formating for a three digits number', () => {
    const result = addZerosToStart(220);

    expect(result).toBe('#220');
  });

    it('Should return a 10 digits number', () => {
      const result = addZerosToStart(52, 10);

      expect(result).toBe('#0000000052');
    });

    it('Should return a 10 digits number', () => {
      const result = addZerosToStart(1234, 2);

      expect(result).toBe('#1234');
    });
  });

//   describe('sortPokemonsOrder', () => {
//     it('Should .....', () => {
//       const result = sortPokemonsOrder(mockPokemons);

//       expect(result).toStrictEqual ([
//         mockPokemons[0],
//         mockPokemons[1]
//       ]);
//     });

//   it('Should revert order', () => {
//     const result = sortPokemonsOrder(mockPokemons, true, true);

//     expect(result).toStrictEqual ([
//       mockPokemons[0],
//       mockPokemons[1]
//     ]);
//   });

//   });
  
});