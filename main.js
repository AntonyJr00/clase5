//------------
const form = document.createElement("form");
const inputNombre = document.createElement("input");
const inputHoras = document.createElement("input");
inputHoras.setAttribute("type", "number");
const inputCategoria = document.createElement("select");
const optionA = document.createElement("option");
optionA.value = "A";
optionA.textContent = "A";
const optionB = document.createElement("option");
optionB.value = "B";
optionB.textContent = "B";
const optionC = document.createElement("option");
optionC.value = "C";
optionC.textContent = "C";
inputCategoria.appendChild(optionA);
inputCategoria.appendChild(optionB);
inputCategoria.appendChild(optionC);
const inputAnios = document.createElement("input");
inputAnios.setAttribute("type", "number");
const btnResultado = document.createElement("button");
const txtResultado = document.createElement("textarea");
form.appendChild(inputNombre);
form.appendChild(inputHoras);
form.appendChild(inputCategoria);
form.appendChild(inputAnios);
form.appendChild(btnResultado);
form.appendChild(txtResultado);
root.append(form);
btnResultado.type = "submit";
btnResultado.textContent = "enviar";
form.style.display = "flex";
form.style.width = "400px";
form.style.flexDirection = "column";

inputNombre.placeholder = "Nombre";
inputNombre.required = true;

inputHoras.placeholder = "Horas";

inputCategoria.placeholder = "Categoria";

inputAnios.placeholder = "Años Servicio";

txtResultado.placeholder = "resultado";

// function crearRegistro() {
//   if (categoria == "a" || categoria == "A") {
//     resultadoB = horas * 40;
//     x.value.toString(`Trabajador: ${nombre} categoria ${categoria}`);
//   } else if (categoria == "b" || categoria == "B") {
//     resultadoB = horas * 35;
//     console.log(`Trabajador: ${nombre} categoria ${categoria}`);
//   } else if (categoria == "c" || categoria == "C") {
//     resultadoB = horas * 30;
//     console.log();
//   }
//   console.log(nombre);
// }
// crearRegistro();

//reuadfa.........

// const horas = document.getElementById("horas");
// const categorias = document.getElementById("categorias").value;
// const anios = document.getElementById("años");
// const buttonInput = document.getElementById("submit");
btnResultado.addEventListener("click", (e) => {
  e.preventDefault();
  let nombre = inputNombre.value;
  let horas = inputHoras.value;
  let categoria = inputCategoria.value;
  let years = inputAnios.value;
  let sueldoBasico = 0,
    bonificacion = 0,
    sueldoNeto = 0;
  switch (categoria) {
    case "A":
      sueldoBasico = 40 * horas;
      break;
    case "B":
      sueldoBasico = 35 * horas;
      break;
    case "C":
      sueldoBasico = 30 * horas;
      break;
    default:
      sueldoBasico = 40 * horas;
  }
  Number(years);
  switch (true) {
    case years >= 1 && years <= 3:
      bonificacion = sueldoBasico * 0.15;
      break;
    case years >= 4 && years <= 7:
      bonificacion = sueldoBasico * 0.2;
      break;
    case years >= 8 && years <= 12:
      bonificacion = sueldoBasico * 0.3;
      break;
    case years >= 13:
      bonificacion = sueldoBasico * 0.35;
      break;
    default:
      alert("error");
      break;
  }
  sueldoNeto = sueldoBasico + bonificacion;
  txtResultado.innerHTML = `El sueldo basico es ${sueldoBasico}, la bonificacion es ${bonificacion} y el sueldo Neto es ${sueldoNeto}`;
});
