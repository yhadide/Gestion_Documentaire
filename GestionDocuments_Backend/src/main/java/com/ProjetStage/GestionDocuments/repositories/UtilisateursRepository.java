package com.ProjetStage.GestionDocuments.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.ProjetStage.GestionDocuments.models.Utilisateurs;

@Repository
@EnableJpaRepositories
public interface UtilisateursRepository extends JpaRepository<Utilisateurs, Integer> {
    Utilisateurs findByNomUtilisateur(String nomUtilisateur);
    Utilisateurs findByEmailAndMotDePasse(String email, String motDePasse);
}
