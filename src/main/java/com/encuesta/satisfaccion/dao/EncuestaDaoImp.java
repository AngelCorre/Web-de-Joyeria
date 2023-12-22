package com.encuesta.satisfaccion.dao;


import com.encuesta.satisfaccion.models.Encuesta;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
@Transactional
public class EncuestaDaoImp implements EncuestaDao {

    @PersistenceContext
    private EntityManager entityManager;

    @Override
    @Transactional
    public List<Encuesta> getEncuestas() {
        String query = "FROM Encuesta";
        return entityManager.createQuery(query).getResultList();
    }

    @Override
    public void registrar(Encuesta encuesta) {

        entityManager.merge(encuesta);

    }

}


