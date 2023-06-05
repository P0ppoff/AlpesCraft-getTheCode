import {describe, expect, it} from "vitest";

const AllPossibleKnightMoves = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'] as const;
type KnightMove = typeof AllPossibleKnightMoves[number];
type ChestColumn = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';


class Position {

    column: ChestColumn[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    movePossible: Record<KnightMove, { row: number; column: number }> = {
        'A': {row: 2, column: 1},
        'B': {row: 1, column: 2},
        'C': {row: -1, column: 2},
        'D': {row: -2, column: 1},
        'E': {row: -2, column: -1},
        'F': {row: -1, column: -2},
        'G': {row: 1, column: -2},
        'H': {row: 2, column: -1}
    }

    constructor(public positionColumn: ChestColumn, public positionRow: number) {
    }

    moveBy(knightMove: KnightMove) {
        const {row, column} = this.movePossible[knightMove];

        return new Position(
            this.column[this.column.indexOf(this.positionColumn) + column],
            this.positionRow + row
        );
    }

    toString(): string {
        return this.positionColumn + this.positionRow
    }
}

describe('Get the Code', () => {
    it.each<{ knightMove: KnightMove, finalPosition: Position }>([
        {knightMove: 'A', finalPosition: new Position('E', 6)},
        {knightMove: 'B', finalPosition: new Position('F', 5)},
        {knightMove: 'C', finalPosition: new Position('F', 3)},
        {knightMove: 'D', finalPosition: new Position('E', 2)},
        {knightMove: 'E', finalPosition: new Position('C', 2)},
        {knightMove: 'F', finalPosition: new Position('B', 3)},
        {knightMove: 'G', finalPosition: new Position('B', 5)},
        {knightMove: 'H', finalPosition: new Position('C', 6)},
    ])
    (`should go to $finalPosition if in D4 and receive $knightMove`, async ({knightMove, finalPosition}) => {
        expect(new Position('D', 4).moveBy(knightMove))
            .toEqual(finalPosition);
    });

    it('should iterate', async () => {
        'DBGHACDAHEGEBEAFHDHDBBDGEDBHDGEACGGHEECBFFAEBFBCGBCFHFCBGHEBFEABDADAFEHFBGDFBGCCAGDBFHGCCCHAGBEHFEBFEHACHFBFDEAHCGDAGDBFBBFDAEEBAH'
            .split('')
            .filter((move: any): move is KnightMove => AllPossibleKnightMoves.includes(move))
            .reduce((oldPosition, move) => {
                console.log(`${oldPosition}`);
                return oldPosition.moveBy(move);
            }, new Position('C', 3))
        console.log(parseInt('A1', 16));
        console.log(parseInt('F7', 16));
    });
});

