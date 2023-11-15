# Microservicios

# Introduccion
La siguiente actividad es la conversion de la pagina web de la actividad anterior de un monolito a una estructura de microservicios, asi como enfocarla mas en su objetivo original que es crear una pseudo tienda. Para ser mas especificos, en esta actividad se plantea el poder generar una base de adtos de postgres como un contenedor separado del resto del programa, y poder asignarle un volumen para evitar la perdidad de informacion.

# Desarrollo
Primeramente se rediseño parte de la pagina, el menu inicial sigue siendo el mismo, pero se añadieron campos adicionales para guardar los objetos de mejor forma, por ejemplo, ahora todos los articulos tienen un campo de costo:
![image](https://github.com/AlejandroPaisano/microservicios/assets/91223611/a0ebf16a-3651-46ef-a239-f7d0be3a92df)

Lo mismo se ha hecho con la pantalla de objeto para que este se vea de forma mas adeucada a los nuevos aspectos de cada articulo
![image](https://github.com/AlejandroPaisano/microservicios/assets/91223611/69bc3bd1-ff92-47ce-81a1-5fe3afdc6615)


Pero lo mas importante se encuentra dentro del objeto YAML.

![image](https://github.com/AlejandroPaisano/microservicios/assets/91223611/ed549dd7-9369-4637-a359-abcabb25d09d)

Hemos agregado algunas variables de entorno para poder generar la informacion relevante para la base de datos, adems de que ahora generamos una base de datos, haciendo uso de la imagen oficial de docker, solo que a esta le añadimos algunas variables para la propia base de datos, un usuario, contraseña y el nombre de la propia base de datos donde guardaremos nuestra informacion. Ademas de esto, tambien generaremos nuestro propio volumen, de esta forma, mientras el contenedor no sea borrado, no perderemos la informacion de la base de datos.

Y de hecho podemos observar que la base opera como su propio contenedor desde la aplicacion de docker desktop:
![image](https://github.com/AlejandroPaisano/microservicios/assets/91223611/8378ea7c-4d29-49b9-8df2-9c569b111245)

No solo eso, si no que con la extension de PortNavigator podemos ver que la base de datos tiene su direccion ip propia e independiente del resto de la aplicacion:

 ![image](https://github.com/AlejandroPaisano/microservicios/assets/91223611/2cd2314d-888a-45e2-a92e-00a14d7a1647)

En otras palabras, de ser necesario, podriamos empezar a escalar la base de datos sin necesidad de comenzar a esclara el resto de la aplicacion, e incluso podriamos respaldarla sin necesidad de tocar nada del codigo de la aplicacion inicial.

# Conclusion

Hacer uso de los dockers ha sido algo divertido, sobre todo por que facilita el no tener que instalar multiples aplicaciones para poder correr y operar codigos que pueden tener diferentes necesidades. Tambien permite el no tener que modificar un archivo constantemente y temer que cosas como los datos se pierdan o se corrompan por mal maneja, ademas, como los errores se ven contenidos dentro de los contenedores, sus efectos se sienten menos en una computadora. 

Aunque sigue teniendo sus limitaciones, por ejemplo, las imagenes se generan como su propio documento, asi que en ocasiones puede ser algo complicao el incorporar nuevas aplicaciones a docker. Ademas de que tuve que aprender aun mas cosas, como el manejo de volumenes para las bases de datos, el como configurar un modelo para obligar a la base de datos a crear una tabla y el como generar un compose que pueda crear la propia base de datos con los requisitos necesarios.

# nota
Es importante correr el archivo desde el docker compose y con las respectivas carpetas, de otra forma, el propio docker no podra generar la imagen de postgres y la aplicacion no funcionara como es debido
