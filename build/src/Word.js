"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//Esto es una clase.
class Word {
    //Dado un conjunto de palabras que me pasan como un vector, creaba 
    //un atributo con el constructor con ese cojunto de palabras.
    //En este caso tipamos y le decimos que es un vector de strings
    constructor(wordsArray) {
        this._words = wordsArray;
    }
    //Consulta de la palabra.
    get words() {
        return this._words;
    }
    //Tipamos. Actualización de la palabra.
    set words(wordsArray) {
        this._words = wordsArray;
    }
    //Metodo para devolver de todas la palabras guardadas, una aleatorimente.
    //Tipamos para decirle que devuelve un string.
    getRandomWord() {
        const min = 0;
        const max = this.words.length - 1;
        return this._words[Math.trunc(Math.random() * (max - min + 1))];
    }
}
exports.default = Word;
/*Tenemos tres modificados de accesos principales, "private" solo puedes
acceder desde dentro de la propia clase a un atributo, desde metodos de la
propia clase. "protected* es mas abierto pero sigue estando protegido, solo
lo puede modificar directamente tambien las clases que hereda.*/ 
