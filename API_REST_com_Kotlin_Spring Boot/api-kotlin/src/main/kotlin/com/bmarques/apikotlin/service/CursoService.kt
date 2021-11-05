package com.bmarques.apikotlin.service

import com.bmarques.apikotlin.model.Curso
import org.springframework.stereotype.Service

@Service
class CursoService(private var cursos: List<Curso>) {

    init {
        val curso = Curso(
            id = 1,
            nome = "Kotlin",
            categoria = "Programação"
        )

        cursos = listOf(curso)
    }

    fun buscaPorId(id: Long): Curso {
        return cursos.stream().filter { curso ->
            curso.id == id
        }.findFirst().get()
    }

}
