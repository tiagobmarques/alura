package com.bmarques.apikotlin.service

import com.bmarques.apikotlin.model.Usuario
import org.springframework.stereotype.Service

@Service
class UsuarioService(private var usuarios: List<Usuario>) {

    init {
        val usuario = Usuario(
            id = 1,
            nome = "Tiago Marques",
            email = "tiagobm564@gmail.com"
        )

        usuarios = listOf(usuario)
    }

    fun buscaPorId(id: Long): Usuario {
        return usuarios.stream().filter { usuario ->
            usuario.id == id
        }.findFirst().get()
    }

}
