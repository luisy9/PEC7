# Preguntas ejercicio 1
- ¿Qué es y cómo funciona el elemento <RouterOutlet>
    El RouterOutlet lo que hace es ir insertando dinamicamente los componentes que se han especificado en las rutas.
    Y dependiendo de donde se inserte el RouterOutlet hara que se inserten los componentes en un lugar especifico de la pagina.

- ¿Para qué se utilizan las directivas routerLink y routerLinkActive? ¿Existen más directivas relacionadas con el router?
    routerLink -> Es una directiva que se utiliza para crear enlaces dentro de la aplicacion de Angular, en lugar de utilizar el href tradicional se utiliza el routerLink.
    routerLinkActive -> Es una directiva que se utiliza para aplicar una clase de CSS3, esto es util para resaltar visualmente el enlace.
    Otras directivas:
        routerLinkActiveOptions -> Sirve para personalizar las opciones de activación.

- ¿Qué diferencias hay entre los servicios Router y ActivatedRoute? ¿Qué funcionalidades tiene cada uno de estos servicios?
    - Router y ActivedRoute diferencias.
        - Router se utiliza para gestionar la navegación y realizar acciones de nivel de aplicación, mientras que ActivatedRoute se utiliza para obtener información detallada sobre la ruta activa actual desde el contexto de un componente asociado a esa ruta.
        - Funcionalidades de Router:    - Navigate: Permite navegar a una ruta especifica, puedes especificar como una cadena o un array con la ruta.
                                        - NavigateByUrl: Similar a navigate pero te permite navegar a una ruta especifica utilizando una url completa.

- ¿Qué son las Route Guards? ¿Cómo se usan las guardas en Angular? 
    - Los Router Guards en Angular son funciones que puedes implementar para realizar acciones específicas antes de que una ruta sea activada, 
    después de que una ruta ha sido activada o cuando una ruta está a punto de ser desactivada.
    Primero los guards se tienen que crear y le ponemos la logica del guard para determinar que tendra que hacer, y luego en el app-routing tendremos que
    definir la ruta que protegera el guardian y luego definirle el guardian que se ejecutara, ademas importar RouterModules.forRoot(routes), y luego exportar RouterModule.

- ¿Qué es la carga Lazy de los módulos de Angular? ¿Cómo se configura en Angular la carga Lazy?
    - La carga perezosa quiere decir que hasta que no se le ordene que se cargue la pagina, por ejemplo que se escriba en la url su url esa pagina no se cargara en el navegador.
    De lo contrario nunca se cargara en el navegador.
    Lo primero que tenemos que tener es un modulo que tenga configurado su routing de tal forma que apunte a un componente.

- ¿Qué es/para qué son útiles los middlewares en el contexto de node.js? ¿Dónde estás usando middlewares en nuestra aplicación?
    - Los middlewares pueden realizar diversas tareas intermedias durante el procesamiento de una solicitud HTTP.
    Los Router Guards podrían ser middlewares en el entorno de Angular Router, ya que estan en medio de entre la peticion y la carga de la pagina.
