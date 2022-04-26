## Curso-ReactBasico-Platzi
Ejemplos planteados en el curso de React.js Basico en Platzi# curso-introduccion-React.js-Platzi

-------

# Descripcion del Proyecto

-Creamos una aplicacion llama Todo Machine
Este curso de basa en React : Componentes y Comportamientos

->Funcionalidades:
1) poder crear Todos
2) Poder ver los todos creados
3) poder buscar o filtrar los Todos guardados
4) Poder Marcar como completados los Todos
5) poder contar cuantos Todos no hemos completado 
6) Poder Borrar Todos  

---------

## Commits

# componentes de TODO machine
- Creamos estructura basica de React con npx creact-react-app
- Borramos algunos archivos que no usaremos
- Creamos la estructura de componentes en App
- Creamos cada componente que utilizaremos basadons en la estructura de App

# Css basico en React
- Creamos cada archivo css para cada componente.
- Los importamos en cada componente.
- Referenciamos los elementos que vamos a aplicar css con className=?
- y le damos estilo.

# Manejo de Eventos con React
- Le creamos al boton un evento onclick que llama la funcion        definida en el componente
- Creamos las funciones y activamos los onClick para los botones de los items(borrar y marcar como completado)
- Por el momento solo le ponemos un alert.
- le damos al input de TodoSearch, la funcionalidad de escuchar lo que escribimos, activando onChange y creando la funcion que acceda al event.target.value.

# Manejo del Estado con hooks
- Los hook son las funciones que empiezan con use
- En TodoSearch agregamos el hook para actualizar el estado cuando el usuario escriba
- Al input DEBEMOS agregarle la caracteristica value con el estado
- en onChange llamamos a la funcion que actua sobre setSearchValue

# Contando y Buscando Todos
- Vamos a pasar el estado de TodoSearch al componente principal App
- Recibimos el estado por props
- Creamos estado para los todos.
- Creamos dos variables, una para filtar cuandos todos estan realizados y otra para contar el total de los todos en lista.
-> PARTE 2
- Creamos un array llamado searchTodos y vamos a utilizarla para mostar la lista de todos en pantalla.
- Creamos un condicional para comparar  el texto de la lista de todos y lo que el usuario esta escribiendo en el buscador para mostar solo los todos que el usuario esta buscando

# Completando y Eliminando TODOs
- creamos la funcion completeTodo en la cual recibe como parametro un texto
- Dentro de esta funcion creamos una constante para almacenar el indice del TODO en el cual texto sea igual al texto que se pasa por parametro
- creamos array llamado newTodos y lo inicializamos con la lista de TODOS actual
- Luego utilizamos el inice y esta nueva lista para modificarla.
- y actualizamos la lista de todos con setTodos a la nueva lista modifica
- Luego la enviamos a a los items para modificar estos ya sea elimando o marcando como completado

# Organizacion de archivos y carpetas

- Creamos una carpeta por cada componente y su css.
- A cada componente lo renombremos con index.js
-> PARTE 2
- separamos de App la UI de la logica, creando el archivo AppUI.js, donde nos encargaremos de la parte grafica
enviamos los prosps de ./App/index.js y los recibimos en AppUI.js
