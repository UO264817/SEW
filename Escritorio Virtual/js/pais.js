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

    getPrevision(dias) {

        this.apikey = "47b790fd0fc41878c80c57c9846132cb";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.capital +"&lang=ES&APPID=" + this.apikey;

        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function (datos) {
                $("pre").text(JSON.stringify(datos, null, 2)); 
                let stringDatos = "";
                stringDatos += "<li>Presión: " + datos.main.pressure + " milibares</li>";
                stringDatos += "<li>Humedad: " + datos.main.humidity + " %</li>";
                stringDatos += "<li>Descripción: " + datos.weather[0].description + "</li>";
                stringDatos += "<li>Visibilidad: " + datos.visibility + " metros</li>";
                stringDatos += "<li>Nubosidad: " + datos.clouds.all + " %</li></ul>";

                $("#clima").html(stringDatos);
            },
            error: function () {
                $("#clima").html("¡Tenemos problemas! No puedo obtener JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>");
            }
        });



    }
}
var camerun = new Pais("Camerún", "Yaoundé", "28647292", "República presidencialista", "3°51'28''N, 11°31'05''E", "Cristiana");