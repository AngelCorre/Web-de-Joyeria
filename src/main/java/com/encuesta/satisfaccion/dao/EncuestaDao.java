package com.encuesta.satisfaccion.dao;

import com.encuesta.satisfaccion.models.Encuesta;

import java.util.List;

public interface EncuestaDao {

    List<Encuesta> getEncuestas();

    void registrar(Encuesta encuesta);

}
