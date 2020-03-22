export class Producto {
  constructor(_id='',_nombre='',_precio=0,_foto=Blob){
    this.id=_id;
    this.nombre=_nombre;
    this.precio=_precio;
    this.foto=new _foto;

  };
  id:       string;
  nombre:    string;
  precio:    number;
  create_At: Date;
  foto:      Blob;
}