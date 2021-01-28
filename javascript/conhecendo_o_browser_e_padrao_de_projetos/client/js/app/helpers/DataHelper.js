class DataHelper {

    constructor() {
        throw new Error("Data helper cannot be created!")
    }
    static textoParaData(texto){
        if (!/\d{4}-\d{2}-\d{2}/.test(texto)){
            throw new Error("Invalid date format. Standard format is YYYY-MM-DD.");
        }

        return new Date(...texto
            .split("-")
            .map((item, index) => item - index % 2))
    }

    static dataParaText(data) {

        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }
}