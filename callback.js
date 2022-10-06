function imprimir ( c ){
    console.log(c)
}

function sumar( a , b , callback){
    callback(a + b)
}

let resultado = 0;

//ejucutar 
sumar( 7 , 8 , imprimir(resultado))