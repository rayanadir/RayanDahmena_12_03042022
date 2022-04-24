import { Performance } from "./Performance";

/**
 * @class
 * @classdesc UserPerformance class, instantiate all user performances
 */
export class UserPerformance {
    /**
     * @param { Object } kind list of performances 
     * @param { Array } data array of user performances 
     */
    constructor(kind, data) {
        for (const key in kind) {
            /*this[kind[key]] = {
                label: this.formatLabel(kind[key]),
                value: data.find((d) => d.kind == key).value
            };*/
            this[kind[key]]= new Performance(this.formatLabel(kind[key]),data.find((d) => d.kind == key).value)
        }
    }

    /**
     * @param { String } labelToFormat name of the label 
     * @returns translates the label in french
     */
    formatLabel(labelToFormat) {
        switch (labelToFormat) {
            case 'cardio':
                return 'Cardio';
            case 'energy':
                return 'Energie';
            case 'endurance':
                return 'Endurance';
            case 'strength':
                return 'Force';
            case 'speed':
                return 'Vitesse';
            case 'intensity':
                return 'Intensité';
            default:
                return labelToFormat;
        }
    }
}