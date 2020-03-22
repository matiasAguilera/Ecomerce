export class Usuario {
    constructor(_id="",_userName="",_password="",_nombre="",_apellido="",
    _email="",_enabled=true,_roles=` "roles": [
        {
            "id": 1,
            "nombre": "ROLE_USER"
        }
    ]`){

    };

    id:       number;
    userName: string;
    password: string;
    nombre  :   string;
    apellido: string;
    email   :    string;
    enabled :  boolean;
    roles   :    Role[];
}

export class Role {
    id:     number;
    nombre: string;
}