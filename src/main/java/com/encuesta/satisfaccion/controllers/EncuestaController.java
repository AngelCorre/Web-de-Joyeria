package com.encuesta.satisfaccion.controllers;

import com.encuesta.satisfaccion.dao.EncuestaDao;
import com.encuesta.satisfaccion.models.Encuesta;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class EncuestaController {

    @Autowired //COMPLETA LA CREACIÓN DEL OBJETO
    private EncuestaDao encuestaDao;

    //@RequestMapping(value = "encuesta/{id}")
    //public Encuesta getEncuestaa(@PathVariable Long id) {

        //Encuesta encuesta = new Encuesta();
        //encuesta.setId(id);
        //encuesta.setSatisfaccion(27);

        //return encuesta;

    //}

    @RequestMapping(value = "api/encuestas", method = RequestMethod.GET) // NOTACION QUE NOS AYUDA A INDICAR LA URL Y TAMBIEN NOS AYUDA A INDICAR EL REQUEST METHOD
    public List<Encuesta> getEncuesta() { // METODO QUE RETORNA UNA LISTA

        return encuestaDao.getEncuestas();

    }

    @RequestMapping(value = "api/encuestas", method = RequestMethod.POST)
    public void registrarUsuario(@RequestBody Encuesta encuesta) { // NOTACION QUE AYUDA A CONVERTIR EL JSON EN TEXTO

        encuestaDao.registrar(encuesta);

    }

}
