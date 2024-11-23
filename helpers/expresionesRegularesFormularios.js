export const regularExpressions = {
    nombre: /^[A-Za-záéíóúñÁÉÍÓÚÑ]+(\s[A-Za-záéíóúñÁÉÍÓÚÑ]+){0,1}$/, /* acepta un nombre, maximo dos, acepta caracteres especiales */
    apellido: /^[A-Za-záéíóúñÁÉÍÓÚÑ]+(\s[A-Za-záéíóúñÁÉÍÓÚÑ]+){0,1}$/ /* acepta uno o dos apellidos, acepta caracteres especiales */,
    correo: /^[A-Za-z0-9]+([._%+-][A-Za-z0-9]+)*@[A-Za-z0-9-]+(\.[A-Za-z]{2,})+$/,
    telefono: /^\+57\s?[0-9]{10}$/ /* formato con el prefijo en colombia y solo acepta 10 digitos del numero */,
    contrasena: /^(?=.*[A-Z])(?=.*[!"#$%&/()=?¡¿])(?=.*[a-záéíóúÁÉÍÓÚñÑ0-9]).{5,}$/ /* acepta de 5 a mas caracteres, minimo una mayuscula y un caracter especial */
}