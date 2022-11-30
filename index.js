
class Ambiente {
  constructor(ambiente, people, rooms) {
    this.ambiente = ambiente.toUpperCase()
    this.people = people
    this.rooms = rooms
    this.price = 0
  }
  calculaPrice() {
    this.price = (this.people * this.rooms).toFixed(2)
  }
  
}
// Plan
let plan = 0
let cuotas = 0
let precio = 0
class PlanPago {
  constructor(nombre, precioCdo, cuotas) {
    this.nombre = nombre
    this.precioContado = precioCdo
    this.cuotass = cuotas
  }

  precio() {
    if (subTotal <= 18) {
      precio = this.precioContado
      return precio
    } else {
      precio = this.precioContado * Math.round(subTotal / 18)
      return precio
    }
  }
  cuotas() {
    let PrecioCtas = 0
    PrecioCtas = (precio / this.cuotass) * 1.04
    return PrecioCtas
  }
}
// Cliente

class Cliente {
  constructor(nombre, email, celular) {
    this.nombre = nombre
    this.email = email
    this.celular = celular
  }
  datosDelCliente() {
    alert(`Thank you for contacting and trusting us ${this.name},
    We will contact you shortly on your phone ${this.celular}
    or we'll notify to your email ${this.email} and we will indicate how to continue
     
     Resumen:
     ${info}
     * Environment: ${estilos[estilo-1]}
     * Activities: ${actividades[0]}, ${actividades[1]}, ${actividades[2]}
     * The type of trip will be ${tipos[tipo-1]}
     * Your Plan ${planes[plan-1]}, in installments ${cuotas} with ${tarjetas[tarjeta-1]}
     * Total Price: €${planPersonalizado.precio()} 
     * In ${cuotas} installments of €${planPersonalizado.cuotas()}
     `)
  }
}


// Variables generales
let info = ''
let ambiente = ''
let people = 0
let rooms = 0
let price = 0
const estilos = ['Mountain', 'Beach', 'Desert', 'Big City']
const tipos = ['Roadtrip', 'Train', 'Airplane', 'Circuit']
let planes = ['Personalizado', 'Premium']
let tarjetas = ['Visa', 'Mastercard', 'PayPal']



// Introducción
alert('Welcome to MG Travel Guide!! Request your travel budget NOW!')


// Funcion para que no quede vacio o se introduzcan caracteres erróneos
function validaStringVacios(promp) {
  while (promp === '' || !isNaN(promp)) {
    promp = prompt('You have not written anything in the field or the data is numeric, try again please!')
  }
  return promp
}

// Funcion para que no quede vacio o se introduzcan caracteres erróneos
function validaNumerosVacios(promp) {
  let num = promp
  while (num <= 0 || isNaN(num)) {
    num = prompt('Type a numeric value, do not leave blank or include letters, try again!')
  }
  return num
}


// Descripción, sondear un poco sobre gustos del cliente
info = prompt('TELL US, what do you expect from your trip? Write it here! 📝!')
validaStringVacios(info)

alert('Nice description! We already know something about what you want. Now, tell us which environment you prefer.')
console.log(info)


// Sondeo
let respuesta = 'Y'
const ambientes = []
while (respuesta === 'Y') {
  ambiente = validaStringVacios(prompt('What season do you prefer?'))

  people = validaNumerosVacios(parseInt(prompt('How many persons are traveling with you?')))

  rooms = validaNumerosVacios(parseInt(prompt('How many rooms do you want?')))


  ambientes.push(new Ambiente(ambiente, people, rooms))

  respuesta = prompt('If you want to add another season, write the letter "y", otherwise type any other character').toUpperCase()
}

for (const i of ambientes) i.calculaPrice()
console.log(ambientes)

let borra = validaStringVacios(prompt('Write "d" if you want to delete the last season, otherwise type any key').toUpperCase())
while (borra === 'D') {
  console.log(ambientes.length)
  if (ambientes.length != 0) {
    ambientes.pop()
    console.log(ambientes.length)
    borra = prompt('It has been deleted successfully, do you want to delete another season? Write "d" to delete, type any other letter to continue').toUpperCase()
  } else {
    alert('There are no more environments to delete!')
    borra = ''
  }
}

// Ambientes
let estilo = 0
console.log(estilo)
estilo = parseInt(prompt('Now choose the Environment - Type: "1" for Mountain, "2" for Beach, "3" for Desert or "4" for Big Cities'))
console.log(estilo)

// Validación
while (estilo !== 1 && estilo !== 2 && estilo !== 3 && estilo !== 4) {
  estilo = parseInt(prompt('You entered the option wrong, try again - Type: "1" for Mountain, "2" for Beach, "3" for Desert or "4" for Big Cities'))
  console.log(estilo)
}
alert(`You have chosen: ${estilos[estilo - 1]}`)


// Actividades que quiere hacer
let actividades = []
contador = 0
while (contador < 3) {
  actividades[contador] = validaStringVacios(prompt('Tell us 3 (three) ACTIVITIES that you would like to do on your trip, write one at a time and press OK'))
  contador++
}
alert(`The chosen activities are : ${actividades[0]}, ${actividades[1]}, ${actividades[2]}, Now, let's move on, there's more!`)


// Tipo de viaje
let tipo = 0
console.log(tipo)
tipo = parseInt(prompt('Now choose the type of trip - Type: "1" for Roadtrip, "2" for Train, "3" for Plane or "4" for Circuit'))
console.log(tipo)

// Validación
while (tipo !== 1 && tipo !== 2 && tipo !== 3 && tipo !== 4) {
  estilo = parseInt(prompt('You entered the option wrong, try again - Type: "1" for Roadtrip, "2" for Train, "3" for Plane or "4" for Circuit'))
  console.log(tipo)
}
alert(`You have chosen: ${tipos[tipo - 1]}`)


// Elegir plan
plan = parseInt(prompt('Choose the PLAN, type "1" for Custom and "2" for Premium'))

while (plan != 1 && plan != 2) {
  plan = parseInt(prompt('Invalid option!, I chose between the 2 valid options, "1" for Custom and "2" for Premium'))
}

let subTotal = 0
for (const i of ambientes) {
  console.log(subTotal += parseFloat(i.price))
}
console.log(subTotal)

if (plan === 1) {
  precio = 650
}
 else precio = 800

cuotas = parseInt(prompt('Enter the number of installments you want in the plan'))


// Plan pago
const planPersonalizado = new PlanPago(planes[plan - 1], precio, cuotas)

console.log(`The price of the trip is: €${planPersonalizado.precio()}`)
console.log(`In  ${planPersonalizado.cuotass} installments of €${planPersonalizado.precio()}`)


let tarjeta = 0
tarjeta = prompt('Choose your payment method!, Press: "1" for Visa, "2" for Mastercard or "3" for PayPal')

while (tarjeta != 1 && tarjeta != 2 && tarjeta != 3 && tarjeta != 4 && tarjeta != 5 && tarjeta != 6) {
  tarjeta = prompt('Please, Check the option you entered,Press: "1" for Visa, "2" for Mastercard or "3" for PayPal')
}
alert(`Your payment method is: ${tarjetas[tarjeta - 1]}`)

// Datos de contacto del usuario

const nombreCliente = validaStringVacios(prompt('Enter your first and last name for contact'))


const emailCliente = validaStringVacios(prompt('Now your email'))


let celularCliente = validaNumerosVacios(prompt('And finally, your phone'))


// Cliente
const datosCliente = new Cliente(nombreCliente, emailCliente, celularCliente)
datosCliente.datosDelCliente()









