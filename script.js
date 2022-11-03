function fib() {
    let temp
    let resultado  = 0
    let contador = 1
    
    function nacci() {
        temp = resultado
        resultado = contador
        contador = resultado + temp
        
        console.log(resultado);
    }

    return nacci
  }
  var fibCounter = fib();
  fibCounter() // debe ingresar console.log "1"
  fibCounter() // debe ingresar console.log "1"
  fibCounter() // debe ingresar console.log "2"
  fibCounter() // debe ingresar console.log "3"
  fibCounter() // debe ingresar console.log "5"
  fibCounter() // debe ingresar console.log "8"

  fibCounter() // debe ingresar console.log "13"
  fibCounter() // debe ingresar console.log "21"
  fibCounter() // debe ingresar console.log "34"
  fibCounter() // debe ingresar console.log "55"