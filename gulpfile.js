const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require('sass'));

function css(done) {   
    src("src/scss/app.scss")//Identificamos el archivo
    .pipe(sass())//Compilamos
    .pipe (dest("build/css"))//Almacenamos en el disco duro     

    done()//Avisamos a gulp cuando llegamos al final
}

function dev(done) {
watch("src/scss/app.scss", css)

    done()
}

exports.css = css;
exports.dev = dev;