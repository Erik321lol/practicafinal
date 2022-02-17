function irLogin() {
    $(location).attr('href', 'login.html');

}

let usuarioactual;

function login() {
    var usuario = $("#usuario").val();
    usuarioactual = usuario;
    fetch('http://localhost:3000/persona/' + usuario, {
        method: 'GET'
    })

        .then((response) => response.json())
        .then(data => {
            var contrasena = $("#contrasena").val();
            if (contrasena == data.contrasena) {
                $(location).attr('href', 'interface.html');
            } else {
                alert('contrasena incorrecta');
            }
        })
}

function areasObtener() {
    fetch('http://localhost:3000/areades')
        .then(res => res.json())
        .then(datos => {
            tabla(datos);
        })
}

let contenido = document.querySelector('#contenido')
let contenido2 = document.querySelector('#contenido2')

function tabla(datos) {
    console.log(datos)
    contenido.innerHTML = ''
    for (let valor of datos) {
        contenido.innerHTML += `
            <tr>
            <th scope="col">${valor.cod}</th>
            <th scope="col">${valor.nombre}</th>
            <th scope="col">${valor.cantidad}</th>
            </tr>
        `
    }
}

function logrosObtener() {
    fetch('http://localhost:3000/logroac')
        .then(res => res.json())
        .then(datos => {
            tabla2(datos);
        })
}

function tabla2(datos) {
    console.log(datos)
    contenido2.innerHTML = ''
    for (let valor of datos) {
        contenido2.innerHTML += `
            <tr>
            <th scope="col">${valor.cod_persona}</th>
            <th scope="col">${valor.nombre1}</th>
            <th scope="col">${valor.apellido1}</th>
            <th scope="col">${valor.titulo}</th>
            <th scope="col">${valor.institucion}</th>
            <th scope="col">${valor.anio}</th>
            </tr>
        `
    }
}

function agregarlogro() {
    let nombre = $("#nombre").val();
    let descripcion = $("#descripcion").val();
    const newPost = {
        nombre: nombre,
        descripcion: descripcion
    }

    if (nombre !== "") {
        fetch('http://localhost:3000/logro', {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    } else {
        alert("complete el campo restante");
    }

}

function borrararea() {
    var nombre = $("#nombre").val();
    usuarioactual = nombre;
    fetch('http://localhost:3000/area/' + nombre, {
        method: 'DELETE'
    })
        .then((response) => response.json())
        .then(data => {
            alert('tarea completada')
        })
}

function agregararea() {
    let nombre = $("#nombre").val();
    let descripcion = $("#descripcion").val();
    const newPost = {
        nombre: nombre,
        descripcion: descripcion
    }

    if (nombre !== "") {
        fetch('http://localhost:3000/area', {
            method: 'POST',
            body: JSON.stringify(newPost),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
    } else {
        alert("complete el campo restante");
    }
}

function borrarlogro() {
    var nombre = $("#nombre").val();
    usuarioactual = nombre;
    fetch('http://localhost:3000/logro/' + nombre, {
        method: 'DELETE'
    })
        .then((response) => response.json())
        .then(data => {
            alert('tarea completada')
        })
}

function actualizardatos_personales() {
    fetch('http://localhost:3000/personaesp/Erik', {
        method: 'GET'
    })
        .then((response) => response.json())
        .then(data => {
            let PrimerNombre = $("#PrimerNombre").val();
            let SegundoNombre = $("#SegundoNombre").val();
            let TercerNombre = $("#TercerNombre").val();
            let PrimerApellido = $("#PrimerApellido").val();
            let SegundoApellido = $("#SegundoApellido").val();
            let Telefono = $("#Telefono").val();
            let Direccion = $("#Direccion").val();
            let Fechanacimiento = $("#Fechanacimiento").val();
            let comentario = $("#comentario").val();
            let usuario = $("#usuario").val();
            let contrasena = $("#contrasena").val();

            if (PrimerNombre == "") {
                PrimerNombre = data.nombre1;
            }
            if (SegundoNombre == "") {
                SegundoNombre = data.nombre2;
            }
            if (TercerNombre == "") {
                TercerNombre = data.nombre3;
            }
            if (PrimerApellido == "") {
                PrimerApellido = data.apellido1
            }
            if (SegundoApellido == "") {
                SegundoApellido = data.apellido2
            }
            if (Telefono == "") {
                Telefono = data.telefono
            }
            if (Direccion == "") {
                Direccion = data.direccion;
            }
            if (Fechanacimiento == "") {
                Fechanacimiento = '2000-09-28';
            }
            if (comentario == "") {
                comentario = data.comentario;
            }
            if (usuario == "") {
                usuario = data.usuario;
            }
            if (contrasena == "") {
                contrasena = data.contrasena;
            }


            const newPost = {
                nombre1: PrimerNombre,
                nombre2: SegundoNombre,
                nombre3: TercerNombre,
                apellido1: PrimerApellido,
                apellido2: SegundoApellido,
                telefono: Telefono,
                direccion: Direccion,
                fecha_nacimiento: Fechanacimiento,
                comentario: comentario,
                usuario: usuario,
                contrasena: contrasena
            }

            console.log(JSON.stringify(newPost))

            fetch('http://localhost:3000/persona/' + usuario, {
                method: 'PUT',
                body: JSON.stringify(newPost),
                headers: {
                    "Content-type": "application/json"
                }
            })
                .then(res => res.json())
                .then(data => console.log(data))
        })
}

function actualizar_logros() {
    let Nuevonombre = $("#NuevoNombre").val();
    let nombre = $("#Nombreanterior").val();

    const newPost = {
        nombre: Nuevonombre
    }

    console.log(newPost)

    fetch('http://localhost:3000/logro/' + nombre, {
        method: 'PUT',
        body: JSON.stringify(newPost),
        headers: {
            "Content-type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))

}

function actualizar_areas() {
    let Nuevonombre = $("#NuevoNombre").val();
    let nombre = $("#Nombreanterior").val();

    const newPost = {
        nombre: Nuevonombre
    }

    console.log(newPost)

    fetch('http://localhost:3000/area/' + nombre, {
        method: 'PUT',
        body: JSON.stringify(newPost),
        headers: {
            "Content-type": "application/json"
        }
    })
        .then(res => res.json())
        .then(data => console.log(data))

}

function iractualizarusuario(){
    $(location).attr('href', 'actualizardatos.html');
}

function iractualizararea(){
    $(location).attr('href', 'actualizararea.html');
}

function iractualizarlogro(){
    $(location).attr('href', 'actualizarlogro.html');
}

function agrdellogro(){
    $(location).attr('href', 'logro.html');
}

function agrdelarea(){
    $(location).attr('href', 'area.html');
}



