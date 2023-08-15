export class Todo{
    public id: number = 0;
    public texto: string = '';
    public completado: boolean = false;

    constructor( texto:string ){
        this.texto = texto
        this.id = Math.random();
        this.completado = false;
    }
}