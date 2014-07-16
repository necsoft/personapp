/*
 * math_tools
 * -------------------
 * Este es un módulo interno que utilizamos para hacer algunas funciones matemáticas.
 *
 */

exports.nrand = function() {
    var x1, x2, rad, y1;
    do {
        x1 = 2 * Math.random() - 1;
        x2 = 2 * Math.random() - 1;
        rad = x1 * x1 + x2 * x2;
    } while (rad >= 1 || rad == 0);
    var c = Math.sqrt(-2 * Math.log(rad) / rad);
    return x1 * c;
};

exports.map = function(value, istart, istop, ostart, ostop) {
    return ostart + (ostop - ostart) * ((value - istart) / (istop - istart));
};

exports.random_age = function() {
    var edad;
    var normal_random = this.nrand();
    if (normal_random < 0.9) {
        // Mapear de 12 a 25
        edad = Math.round(this.map(normal_random, -2, 0.9, 12, 25))
    } else {
        // Mapear de 25 a 60
        edad = Math.round(this.map(normal_random, 0, 2, 25, 60))
    }
    return edad;
}