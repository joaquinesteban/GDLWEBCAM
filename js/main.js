
let regalo = document.getElementById('regalo');

(function(){

    document.addEventListener('DOMContentLoaded', function(){
        

        //CAMPOS DE DATOS DE USUARIO

        let nombre = document.getElementById('nombre');
        let apellido = document.getElementById('apellido');
        let email = document.getElementById('email');

        // CAMPOS PASES 

        let pase_dia = document.getElementById('pase_dia');
        let pase_completo = document.getElementById('pase_completo');
        let pase_dosdia = document.getElementById('pase_dosdia');

        //BOTONES Y DIVS

        let calcular = document.getElementById('calcular');
        let errorDiv = document.getElementById('error');
        let botonRegistro = document.getElementById('btnResgistro');
        let resultado = document.getElementById('lista_productos');

        //EXTRAS

        let etiquetas = document.getElementById('etiquetas');
        let remeras = document.getElementById('remera_evento');

        calcular.addEventListener('click', calcularMonto);

        function calcularMonto(event){
            event.preventDefault();
            if(regalo.value === ''){
                alert('Debes elegir un regalo')
                regalo.focus()
            }else{
                let boleto_Dia = parseInt(pase_dia.value, 0) ;
                let boleto_dosdias = parseInt(pase_dosdia.value, 0) ;
                let boleto_completo = parseInt(pase_completo.value, 0) ;
                let CantRemeras = parseInt(remeras.value, 0) ;
                let CantEtiquetas = parseInt(etiquetas.value, 0) ;
 

                let totalPagar = (boleto_Dia * 30) + (boleto_dosdias * 45) + (boleto_completo * 50) + ((CantRemeras* 10) * .93) + (CantEtiquetas * 2);

                console.log(totalPagar);
            }
        }


    })//DOM CONTENT LOADED
})();