"use strict";
class Pais {
    constructor(nombre, capital, poblacion, gobierno, coordenadas, religion) {
        this.nombre = nombre;
        this.capital = capital;
        this.poblacion = poblacion;
        this.gobierno = gobierno;
        this.coordenadas = coordenadas;
        this.religion = religion;
        this.default();
    }
    default() {
        if (this.nombre == undefined)
            this.nombre = "no-nombre";
        if (this.capital == undefined)
            this.capital = "no-capital";
        if (this.poblacion == undefined)
            this.poblacion = 0;
        if (this.gobierno == undefined)
            this.gobierno = "no-gobierno";
        if (this.coordenadas == undefined)
            this.coordenadas = "0, 0";
        if (this.religion == undefined)
            this.religion = "no-religion";
    }
    getNombre() { return this.nombre; }
    getCapital() { return this.capital; }
    getPoblacion() { return this.poblacion; }
    getGobierno() { return this.gobierno; }
    getReligion() { return this.religion; }

    getInfo() {
        return "<ul><li>" + this.getPoblacion() + "</li><li>" + this.getGobierno() + "</li><li>" + this.getReligion() + "</li></ul>"
    }
    getCoordenadas() {
        document.write("<p>" + this.coordenadas + "</p>")
    }
}
var camerun = new Pais("Camerún", "Yaundé", "28647292", "República presidencialista", "3°51'28''N, 11°31'05''E", "Cristiana");
