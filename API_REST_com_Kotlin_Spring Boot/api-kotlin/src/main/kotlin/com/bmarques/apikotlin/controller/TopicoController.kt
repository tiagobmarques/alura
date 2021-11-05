package com.bmarques.apikotlin.controller

import com.bmarques.apikotlin.dto.NovoTopicoDto
import com.bmarques.apikotlin.dto.TopicoView
import com.bmarques.apikotlin.model.Topico
import com.bmarques.apikotlin.service.TopicoService
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/topico")
class TopicoController(private val service: TopicoService) {

    @GetMapping
    fun getTopicos(): List<TopicoView> {
        return service.listar()
    }

    @GetMapping("/{id}")
    fun buscaPorId(@PathVariable id: Long): TopicoView {
        return service.buscarPorId(id)
    }

    @PostMapping
    fun cadastrar(@RequestBody topicoDto: NovoTopicoDto) {
        service.cadastrar(topicoDto)
    }
}