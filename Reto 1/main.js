
function cambiarfavorito() {
    let menu = document.getElementById("valoruno");
    let valor = parseInt(document.getElementById("numero").value);

    switch (valor) {
        case 1:
            menu.innerHTML = `<ol><li>Cambiar Contraseña</li>
                <li>Ingresar Coordenadas</li>
                <li>Ubicar Zona Wifi mas cercana</li>
                <li>Guardar Archivo</li>
                <li>Actualizar registros</li>
                <li>Elegir opción de menú favorita</li>
                <li>Cerrar Sesion</li></ol>`;
            break;
        case 2:
            menu.innerHTML = `<ol><li>Ingresar Coordenadas</li>
                <li>Cambiar Contraseña</li>
                <li>Ubicar Zona Wifi mas cercana</li>
                <li>Guardar Archivo</li>
                <li>Actualizar registros</li>
                <li>Elegir opción de menú favorita</li>
                <li>Cerrar Sesion</li></ol>`;
            break;
        case 3:
            menu.innerHTML = `<ol><li>Ubicar Zona Wifi mas cercana</li>
            <li>Ingresar Coordenadas</li>
            <li>Cambiar Contraseña</li>
            <li>Guardar Archivo</li>
            <li>Actualizar registros</li>
            <li>Elegir opción de menú favorita</li>
            <li>Cerrar Sesion</li></ol>`;
            break;
        case 4:
            menu.innerHTML =`<ol><li>Guardar Archivo</li>
            <li>Ingresar Coordenadas</li>
            <li>Ubicar Zona Wifi mas cercana</li>
            <li>Cambiar Contraseña</li>
            <li>Actualizar registros</li>
            <li>Elegir opción de menú favorita</li>
            <li>Cerrar Sesion</li></ol>`;
            break;
        case 5:
            menu.innerHTML = `<ol><li>Actualizar registros</li>
            <li>Ingresar Coordenadas</li>
            <li>Ubicar Zona Wifi mas cercana</li>
            <li>Guardar Archivo</li>
            <li>Cambiar Contraseña</li>
            <li>Elegir opción de menú favorita</li>
            <li>Cerrar Sesion</li></ol>`;
            break;
    
        default:
            menu.innerHTML = `<p>Opción no válida</p>`;
            break;
    }
}
