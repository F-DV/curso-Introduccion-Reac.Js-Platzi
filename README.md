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

# Local storage VS Session Storage
La principal diferencia entre estas dos, es que el Local Storage no tiene una fecha de expiración y está disponible en la web que estamos desarrollando de forma global.Lo interesante del Session Storage es que solo esta disponible ventana actual en la que estamos navegando y solo son accesibles para el dominio actual.

- localStorage.getItem('nombre') :Recibe por parametro el nombre de la     infomacion guardada
- localStorage.setItem('nombre',JSON.stringify(objeto a guardar)

- NOTA: localStorage solo guarda String, por eso usamos JSON.stringify para convertir a String y JSON.parse para convertir a objeto de nuevo.

# UseEffect
- Ejecuta el codigo que tiene dentro justo depues de renderizar
- para que se ejecute solo en la primera renderizada, le enviamos un array vacio como segundo parametro
- Podemos enviarle un estado en el array del segundo parametro y el codigo dentro se ejecutara cada que tengamos un cambio en ese estado
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

# Persistencia de Datos de FrontEnd con LocalStorage
-> PARTE 1(guardar en localStorage)
-  Creamos constante localStorageItem para traer lo que el navegador tiene en localStorage.
- Creamos variable parsedTodos para guardar la informacion parseada que tengamos en local Storage
- Creamos condicional que diga if local Stogae esta vacio, lo inicializamos con un array vacio
- Else : parseamos lo que este guardado en localstorage y se lo pasamos a la variable parsedTodos que inicializará la lista de TODOS

-> PARTE 2(Persistir los cambios)
- Creamos una funcion puente llamada saveTodos la cual recibira como parametro la actualizacion de la lista de Todos
- antes de actualizar la lista con setTodos llamamos la funcion saveTodos la cual guardara esa lista actualizada en el local storage

# Creamos Hook para la funcionalidad de local Storage
NOTA: Cuando Creamos un hook y devuelve mas de dos parametros, ya no devolvemos un array si no un objeto.

- Una de las reglas para crear HOOK es empezar el nombre con use
- Creamos una funcion que se encargara de todo lo que tenga que ver con localstorage
- Pasamos la logica de local store a esta funcion con nombre mas genericos para usarla para guarda mas infiormacion mas adelante
- Dentro utilizaremos un useStage de React
- retornamos un array con las dos variables de estado
- por ultimo creamos un estado en la funcion App para consume useLocalStorage

# Manejo de Efectos
- Vamos a la UI y simulamos lo que queremos que haga en este caso que muestre un texto de carga, error o exito.
- Simulamos las propiedades que esperamos recibir en este casi loading y error
- en App.js simulamos enviar las propiedades que queremos
- Modificamos la funcion localStorage, 
- Creamos las variables de estado que hemos simulado error y loading
- las inicializamos, error en false y loading en true
- creamos un useEffect para envoler la funcionalidad del localstorage y le damos un try{}catch
- Tambien creamos un simulador con un setTimeOut para simular que cargamos algo de alguna API.
- encaso de que tengamos un error, modificamos la variable de estado setError
- si no ocurre ningun error cambiamos loading a false
- Retornamos un Objeto con las variables que necesitamos en los componentes
- Enviamos las variables a la AppUI

# React Context
- Dado que no es practico estar enviado propiedades(props) de componente a componente, vamos a crear un contexto que nos provee de provaider y consumer para compartir el estado por todos los componentes de nuestra aplicacion.
-> Parte 1
- Pasamos toda la logica de local Storage a su propio componente.
- Creamos Carpeta para alojar el contexto.
- en TodoContext pasamos la logica que crea las variables que se enviaban como props
- Creamos un provider en el cual enviaremos como valor a todas las variables y exportamos tnato el TodoContext como TodoProvider
- en App.js envolvemos a AppUI en la etiqueta provider y esta ya tiene acceso a todas las propiedades sin expresarlo explicitamente
- En AppUI envolvemos al componente TodoList en un consumer y las propiedades que se necesitan dentro de TodoList son enviadas como children

# useContex
Nota: Es una mejor forma de enviar el consumer
- Instanciamos  React.useContext(); y traemos las variables, inmediatamente mi componente Todolist tiene acceso a estas
- Todos los componentes de nuestra aplicacion que estan envultos en el provider tiene acceso a las variables de estado con useContext

# portales teletransportacion de componentes
- Vamos a crear el formulario flotante para añadir un nuevo TODO
- Esto lo hacemos con ReactDOM.createPortal()
- Añadimos un nuevo div en index.html que representara el formulario
- Creamos el estado en en contexto inicializado con false
- y enviamos por provider el estado openModal y setOpenModal
- Recibimos en la AppUi esos estados y creamos la funcion para actualizar este estado cuadno presionemos el boton
- Creamos condicional para mostar el modal
- cambiamos el estado en el componente del boton.
