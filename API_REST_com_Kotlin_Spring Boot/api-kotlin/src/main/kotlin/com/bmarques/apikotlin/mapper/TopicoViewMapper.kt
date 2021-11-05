package com.bmarques.apikotlin.mapper

import com.bmarques.apikotlin.dto.TopicoView
import com.bmarques.apikotlin.model.Topico
import org.springframework.stereotype.Component

@Component
class TopicoViewMapper : Mapper<Topico, TopicoView> {
    override fun map(t: Topico): TopicoView {
        return TopicoView(
            id = t.id,
            titulo = t.titulo,
            mensagem = t.mensagem,
            dataCriacao = t.dataCriacao,
            curso = t.curso,
            autor = t.autor
        )
    }
}