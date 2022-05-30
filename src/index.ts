let btnAgregarPersona = <HTMLButtonElement>(
  document.getElementById("btnAgregarPersona")
);
let btnOrdenar = <HTMLButtonElement>document.getElementById("btnOrdenar");
let divMostrarPersonas = <HTMLDivElement>(
  document.getElementById("divMostrarPersonas")
);
const nombres: string[] = new Array(),
  edades: number[] = new Array(),
  alturas: number[] = new Array();

function cargarPersonas(
  nombres: string[],
  edades: number[],
  alturas: number[]
) {
  nombres.push(String(prompt("ingrese el nombre de la persona")));
  edades.push(Number(prompt("ingrese la edad de la persona")));
  alturas.push(Number(prompt("ingrese la altura en cms de la persona")));
}
function mostrarPorPantalla(
  names: string[],
  ages: number[],
  heights: number[]
) {
  let mostrar = " ";
  for (let i = 0; i < names.length; i++) {
    mostrar =
      mostrar +
      String(
        `${names[i]}: ${ages[i]} años y ${heights[i]} cm de altura <br />`
      );
  }
  return mostrar;
}

function comparar(
  ages: number[],
  heights: number[],
  i: number,
  j: number
): number {
  let comparacion: number;
  if (ages[i] === ages[j]) {
    if (heights[i] === heights[j]) {
      comparacion = 0;
    } else if (heights[i] < heights[j]) {
      comparacion = -1;
    } else {
      comparacion = 1;
    }
  } else if (ages[i] < ages[j]) {
    comparacion = -1;
  } else {
    comparacion = 1;
  }
  return comparacion;
}
function intercambiar(arr: any[], i: number, j: number) {
  let aux = arr[i];
  arr[i] = arr[j];
  arr[j] = aux;
}
function ordenarPorBurbuja(names: string[], ages: number[], heights: number[]) {
  for (let i = 1; i <= names.length; i++) {
    for (let j = 0; j < names.length - i; j++) {
      if (comparar(ages, heights, j, j + 1) === 1) {
        intercambiar(nombres, j, j + 1);
        intercambiar(edades, j, j + 1);
        intercambiar(alturas, j, j + 1);
      }
    }
  }
}

btnAgregarPersona.addEventListener("click", () => {
  cargarPersonas(nombres, edades, alturas);
  divMostrarPersonas.innerHTML = String(
    mostrarPorPantalla(nombres, edades, alturas)
  );
});
btnOrdenar.addEventListener("click", () => {
  ordenarPorBurbuja(nombres, edades, alturas);
  divMostrarPersonas.innerHTML = String(
    `Despues de ordenarlos:<br />${mostrarPorPantalla(
      nombres,
      edades,
      alturas
    )}`
  );
  //mostrarPorPantalla(nombres, edades, alturas);
});

/*
mostrarPorPantalla(nombres, edades, alturas);
ordenarPorBurbuja(nombres, edades, alturas);
mostrarPorPantalla(nombres, edades, alturas);
*/
