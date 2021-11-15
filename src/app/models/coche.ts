export class Coche {
    constructor(
        public marca: string,
        public modelo: string,
        public v: number,
        public vMax: number,
        public a: number,
        public estado: boolean
    ) {}
}