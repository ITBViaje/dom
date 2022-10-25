//DOM es la forma en que Javascript puede acceder a nuestro documento HTML.
//Cuando tenemos un HTML tenemos etiquetas, contenidos, JS lo lleva a un 
//documento en grupo de nodos y objetos.
//El document representa cualquier página cargada en el navegador
//¿Cómo accedemos al document?
//Entonces, tengo toda la estructura del HTML. Esto es el DOM.
//Prueben el atajo de teclado, clg para:

console.log(document);
//Para acceder al h1, hacemos:
console.log(document.querySelector('h1'));
//Para cambiar el h1:
document.querySelector('h1').textContent = ('Hola desde JS');
//De nuevo, la idea es acceder al index.html.
//¿Qué pasa si tengo DOS h2?
console.log(document.querySelector('h2'));
//Lo que podemos concluir es que selecciona el primer h2.
//Una alternativa para acceder al h3, sería colocar una clase.
//console.log(document.querySelector('.subtitulo'))
//Para acceder por id:
//console.log(document.querySelector('#parrafo'));
//Otra forma de acceder por id, es (getElementById solo se selecciona por id):
//console.log(document.getElementById('parrafo'));
//Para seleccionar todos los elementos que coincidan con una clase:
//En la consola veo la lista de nodos con los dos elementos.
//console.log(document.querySelectorAll('.subtitulo'))
//HASTA ACA ESTAMOS CAPTURANDO ELEMENTOS.
//LO QUE VIENE A CONTINUACION ES ALGO INTERESANTE, COMO SER,
//PODER MODIFICAR LOS ELEMENTOS, SU TEXTO, AGREGAR CLASES, ID, ETC.
//VEMOS COMO HACER ESTO. 
//DECLARO UNA CONTANTE, ACCESO AL PARRAFO
console.log('#parrafo')
const parrafo = document.getElementById('parrafo');
//Una vez que tenemos la constante párrafo podemos acceder a 
//sus métodos. Usamos textContent que modifica su contenido.
parrafo.textContent = 'Párrafo desde JS';
parrafo.innerHTML = '<b>texto con innerHTML</b>'
//ClassList.add permite agregar clases específicas.
//parrafo.classList.add('subtitulo');

//CREATE ELEMENT
//Nos permite crear un elemento HTML.
//Creamos el ul en el html para luego desde el JS crear las li.
//const lista = document.getElementById('lista');
//console.log('lista');
//const li = document.createElement('li');
//li.textContent = '1 elemento';
//lista.appendChild(li);

//const array = ['uno', 'dos', 'tres']

//array.forEach(item =>{
//   const li = document.createElement('li')
//    li.textContent = item
//    lista.appendChild(li)
//})
//OTRA FORMA MAS:
//array.forEach(item =>{
//   lista.innerHTML = lista.innerHTML +`<li>${item}</li>`
//})
//Tanto createElement como innerHTML nos genera reflow, ocurre cuando un 
//navegador debe pintar una página web nuevamente, después de una actualización.
//(si se hacen múltiples solicitudes, por ejemplo)
//Solución a esto es el FRAGMENT.(casos de array de muchos elementos, más de 100 o 1000, por ej.)

//const fragmento = document.createDocumentFragment();
//array.forEach(item => {
  //  const li = document.createElement('li')
  //  li.textContent = item
   // fragmento.appendChild(li)
//})
//lista.appendChild(fragmento)

//EJERCICIO: leer la documentación y probar el insertBefore







