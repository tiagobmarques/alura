package com.bmarques.apikotlin.service

import com.bmarques.apikotlin.dto.NovoTopicoDto
import com.bmarques.apikotlin.dto.TopicoView
import com.bmarques.apikotlin.mapper.TopicoViewMapper
import com.bmarques.apikotlin.model.Topico
import org.springframework.stereotype.Service
import java.util.stream.Collectors

@Service
class TopicoService(
    private var topicos: List<Topico> = ArrayList(),
    private val cursoService: CursoService,
    private val usuarioService: UsuarioService,
    private val topicoViewMapper: TopicoViewMapper
) {

    fun listar(): List<TopicoView> {
        return topicos.stream().map { topico ->
            TopicoView(
                id = topico.id,
                titulo = topico.titulo,
                mensagem = topico.mensagem,
                dataCriacao = topico.dataCriacao,
                curso = topico.curso,
                autor = topico.autor
            )
        }.collect(Collectors.toList())
    }

    fun buscarPorId(id: Long): TopicoView {
        val topico = topicos.stream().filter { t ->
            t.id == id
        }.findFirst().get()

        return TopicoView(
            id = topico.id,
            titulo = topico.titulo,
            mensagem = topico.mensagem,
            dataCriacao = topico.dataCriacao,
            curso = topico.curso,
            autor = topico.autor
        )
    }

    fun cadastrar(novoTopicoDto: NovoTopicoDto) {
        val topico = Topico(
            id = topicos.size.toLong() + 1,
            titulo = novoTopicoDto.titulo,
            mensagem = novoTopicoDto.mensagem,
            curso = cursoService.buscaPorId(novoTopicoDto.idCurso),
            autor = usuarioService.buscaPorId(novoTopicoDto.idAutor),
        )
        topicos = topicos.plus(topico)
    }
}