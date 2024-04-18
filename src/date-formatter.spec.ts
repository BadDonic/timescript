// ./src/date-formatter.spec.ts


import {it,test,describe,expect} from 'vitest';
import {formatDate} from './date-formatter.js';

describe('date-formatter',()=>{

    describe('formatDate() ',()=>{
        test('Custom format string',()=>{
            expect(formatDate("MMM-D-YYYY", new Date("2026-04-02"))).toBe("Apr-2-2026");
        });
        test('Throw on wrong format string',()=> {
            expect(()=> formatDate("MMM.D.YYYY", new Date())).toThrow("Invalid format string. Use YY, YYYY, MMM, MM, DD, D seperated by '-'");
        });
    });
})
