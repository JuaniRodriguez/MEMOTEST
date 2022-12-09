const $cuadros=document.querySelectorAll("#cuadro");
const $botonJugar=document.querySelector(".boton")
$botonJugar.onclick=jugar;
//$botonJugar=document.querySelector("#ronda");
$bienvenida=document.querySelector("#bienvenida");

function jugar() {
$bienvenida.textContent="Juegue!"    
//document.querySelector("#bienvenida").setAttribute("style","display:none");
$botonJugar.textContent="Ronda 1";
//$botonJugar.setAttribute("style","");
//$botonJugar.textContent="Ronda 1";
resetear($cuadros)
asignarColor()

}

function resetear(cuadros) {
    contadorCuadros=[];
    contadorCuadrosNumerico=0
    target=[];
    pares=0;

    cuadros.forEach(function(cuadro,i) {
        
            cuadro.style.setProperty("background-color","");
    });
}

function asignarColor() {
    let colores=["red","blue","green","orange","yellow","purple","brown","pink","red","blue","green","orange","yellow","purple","brown","pink"];
    
    colores.sort(function(a,b) {
        return 0.5-Math.random()
    })    
   
    let objetoColores={};

    for(i=0;i<colores.length;i++) {
        objetoColores[i+1]=`${colores[i]}`
    }

    console.log(objetoColores);


        let contadorCuadros=[];
        let contadorCuadrosNumerico=0;
        let target=[];
        let pares=0;
        let rondas=1;
    $cuadros.forEach(function(cuadro,i) {
        
        cuadro.onclick=function(e) {
            cuadro.style.setProperty("background-color",`${objetoColores[i+1]}`);
            target.push(e.target)
           
            
            contadorCuadros.push(`${objetoColores[[i+1]]}`);
            contadorCuadrosNumerico++;

        
            if(contadorCuadrosNumerico==2) {

                if(contadorCuadros[0]==contadorCuadros[1]) {
                    pares=pares+2;
                    if(pares==16) {
                        setTimeout(() => {
                            $botonJugar.textContent="Jugar";
                            $bienvenida.textContent=`Ganaste en ${rondas=rondas - 1 } rondas!`
                        }, 500);
                        

                    }
                        contadorCuadros=[];
                        contadorCuadrosNumerico=0;
                        target=[];
                        $botonJugar.textContent=`Ronda ${rondas=rondas + 1}`;
                } else {
                    setTimeout(() => {
                        target.forEach((cuadro)=>

                        cuadro.removeAttribute("style")
                    )
                    }, 500);
                    setTimeout(() => {
                        contadorCuadros=[];
                        contadorCuadrosNumerico=0;
                        target=[];
                        $botonJugar.textContent=`Ronda ${rondas=rondas + 1}`;
                    }, 501);
                }
            } 
        }   
    })
}




