package com.bmarques.apikotlin.mapper

interface Mapper<T, U> {

    fun map (t: T) : U
}