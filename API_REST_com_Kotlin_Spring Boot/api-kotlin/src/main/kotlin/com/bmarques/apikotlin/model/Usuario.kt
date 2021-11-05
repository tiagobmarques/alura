package com.bmarques.apikotlin.model

data class Usuario(
    val id: Long? = null,
    val nome: String,
    val email: String
)