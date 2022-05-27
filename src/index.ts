const nombres: string[] = ["Carla", "Lucía", "Marta", "Cecilia"],
  edades: number[] = [89, 24, 24, 7],
  alturas: number[] = [164, 172, 181, 168];
function cargarPersonas() {
  // Esta función se ejecuta para recibir los datos del usuario
}
function mostrarPorPantalla(
  names: string[],
  ages: number[],
  heights: number[]
) {
  for (let i = 0; i < names.length; i++) {
    // Acá va el innerHTML
    console.log(`${names[i]}: ${ages[i]} años y ${heights[i]} cm de altura`);
  }
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
console.log("Antes de ordenarlos:");
mostrarPorPantalla(nombres, edades, alturas);
ordenarPorBurbuja(nombres, edades, alturas);
console.log("Después de ordenarlos:");
mostrarPorPantalla(nombres, edades, alturas);