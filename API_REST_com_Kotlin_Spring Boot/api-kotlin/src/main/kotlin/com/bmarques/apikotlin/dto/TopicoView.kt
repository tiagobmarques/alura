package com.bmarques.apikotlin.dto

import com.bmarques.apikotlin.model.Curso
import com.bmarques.apikotlin.model.Usuario
import java.time.LocalDateTime

data class TopicoView(
    val id: Long? = null,
    val titulo: String,
    val mensagem: String,
    val dataCriacao: LocalDateTime = LocalDateTime.now(),
    val curso: Curso,
    val autor: Usuario,
)