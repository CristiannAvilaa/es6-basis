let colors = require('colors');
const estudiante1 = ["Duvan Camilo", "Juan Camilo", "Jackson", "Juan Diego"]

const estudiante2 = ["Cristian", "Laura", "Veronica", "David"]

// operador spread(resto)
const estudiante3 = ['Juan medina', 
                      ...estudiante1, 
                      'Dayana',
                      ...estudiante2]


console.log(estudiante3)

