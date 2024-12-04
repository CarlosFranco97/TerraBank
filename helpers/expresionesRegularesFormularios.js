export const regularExpressions = {
    nombre: /^[A-Za-záéíóúñÁÉÍÓÚÑ]{3,}(\s[A-Za-záéíóúñÁÉÍÓÚÑ]+){0,1}$/, /* acepta un nombre, maximo dos, acepta caracteres especiales */
    apellido: /^[A-Za-záéíóúñÁÉÍÓÚÑ]{3,}(\s[A-Za-záéíóúñÁÉÍÓÚÑ]+){0,1}$/ /* acepta uno o dos apellidos, acepta caracteres especiales */,
    correo: /^[A-Za-z0-9]+([._%+-][A-Za-z0-9]+)*@[A-Za-z0-9-]+(\.[A-Za-z]{2,})+$/,
    telefono: /^\+57\s?[0-9]{10}$/ /* formato con el prefijo en colombia y solo acepta 10 digitos del numero */,
    contrasena:  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{4,10}$/, 
}