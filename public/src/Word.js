//Esto es una clase.
export default class Word {
    //Dado un conjunto de palabras que me pasan como un vector, creaba 
    //un atributo con el constructor con ese cojunto de palabras.
    constructor(wordsArray){
        this.words = wordsArray;
    }
    //Consulta de la palabra.
    get words(){
        return this._words;
    }
    //Actualización de la palabra.
    set words(wordsArray){
        this._words = wordsArray;
    }

    //Metodo para devolver de todas la palabras guardadas, una aleatorimente.
    getRandomWord() {
        const min = 0;
        const max = this.words.length-1;
        return this._words[Math.trunc(Math.random() * (max - min + 1))]
    }
}