import {describe, expect, it} from "vitest";

class Position {

    column = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    movePossible: Record<'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H', { row: number; column: number }> = {
        'A': {row: 2, column: 1},
        'B': {row: 1, column: 2},
        'C': {row: -1, column: 2},
        'D': {row: -2, column: 1},
        'E': {row: -2, column: -1},
        'F': {row: -1, column: -2},
        'G': {row: 1, column: -2},
        'H': {row: 2, column: -1}
    }

    constructor(public positionColonne: string, public positionLigne: number) {
    }

    moveBy(knightMove: 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H') {
        const {row, column} = this.movePossible[knightMove];

        return new Position(
            this.column[this.column.indexOf(this.positionColonne) + column],
            this.positionLigne + row
        );
    }

    toString(): string {
        return this.positionColonne + this.positionLigne
    }
}

describe('Get the Code', () => {
    it.each([
        ['A', new Position('E', 6)],
        ['B', new Position('F', 5)],
        ['C', new Position('F', 3)],
        ['D', new Position('E', 2)],
        ['E', new Position('C', 2)],
        ['F', new Position('B', 3)],
        ['G', new Position('B', 5)],
        ['H', new Position('C', 6)],
    ])
    (`should go to %s if D4 and receive %s`, async (move: any, expectedPosition) => {
        expect(new Position('D', 4).moveBy(move))
            .toEqual(expectedPosition);
    });

    it('should iterate', async () => {
        'DBGHACDAHEGEBEAFHDHDBBDGEDBHDGEACGGHEECBFFAEBFBCGBCFHFCBGHEBFEABDADAFEHFBGDFBGCCAGDBFHGCCCHAGBEHFEBFEHACHFBFDEAHCGDAGDBFBBFDAEEBAH'
            .split('')
            .reduce((oldPosition, move: any) => {
                console.log(oldPosition.toString());
                return oldPosition.moveBy(move);
            }, new Position('C', 3))
        console.log(parseInt('A1', 16));
        console.log(parseInt('F7', 16));
    });
});

