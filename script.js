//JavaScript

/*let nombreUsuario = "Alejandro"; //let deja modificar el valor de la variable
let apellidoUsuario = "Hurtado";
const anio = 2023; //const no deja cambiar el valor de la variable

console.log ("Hello World")

datosUser = nombreUsuario + " " + apellidoUsuario

alert (datosUser)
let nameUser = prompt("Ingresa tu nombre")
let lastnameUser = prompt ("Ingresa tu apellido")

alert ("Tu nombre es: " + nameUser + " " + lastnameUser)

let edad = parseInt (prompt ("Ingresa tu edad")) //ParseInt solo lee numeros, por lo que devuelve un NaN si ingresa letras
let aniodenacimiento = anio - edad
alert ("Segun mis calculos y tus datos, tu tienes " + edad + " años, eso quiere decir que naciste en el año " + aniodenacimiento)

if (edad > 17 && edad < 60){
    alert ("Puedes entrar al sitio web")
} else {
    alert ("No puedes ingresar")
}

if (confirm("Tienes auto?")){
    let matricula = prompt("Ingrese la matricula")
}
else{
    alert("No puedes ingresar")
}*/

//01/18/2023 Ciclos

/*Ciclo FOR*/

console.log ("Ejm A: ")

for (let i=0 ; i<5 ; i=i+1){
    console.log("Hello World")
}

console.log ("Ejm B: ")

for (let i=1 ; i<=5 ; i=i+1){
    console.log(i)
}

console.log ("Ejm C: ")

for (let i=5 ; i>=0 ; i=i-1){
    console.log(i)
}

console.log ("Ejm D: ")

for (let i=0 ; i<=6 ; i=i+2){
    console.log(i)
}

console.log("Ejm E: ")

/*let passwordUser=parseInt(prompt("Ingrese su contraseña: "))
const passwordAuth = 1606

for (let i=0 ; i<2 ; i++){
    if (passwordUser === passwordAuth){
        alert("Clave Correcta")
        console.log("Clave Correcta")
        break

    } else{
        passwordUser=parseInt(prompt("Su clave es incorrecta, intente de nuevo: "))
        console.log("Clave Incorrecta")
    }
}*/

console.log("Ejm F: ")

for (let i=0 ; i<=10 ; i++){
    if (i%2 == 0){
        continue
    }
    console.log(i)
}

console.log("Ejm G: ")

let name = prompt("Ingrese un nombre: (Par salir, ingrese:salir)")

while (name != "salir"){
    console.log(name);
    name = prompt("Ingrese un nombre: (para salir, ingrese: salir)")
}

