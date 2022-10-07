export interface TrasnsaccionesInterface {
    id?: number;
    id_origen?: number;
    id_destino?: number;
    origen: string;
    destino: string;
    cantidad: number;
    fecha_realizada: Date;
}