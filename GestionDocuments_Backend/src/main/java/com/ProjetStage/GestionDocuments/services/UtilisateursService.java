package com.ProjetStage.GestionDocuments.services;

import com.ProjetStage.GestionDocuments.exceptions.ResourceNotFoundException;
import com.ProjetStage.GestionDocuments.models.Utilisateurs;
import com.ProjetStage.GestionDocuments.repositories.UtilisateursRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UtilisateursService {

    @Autowired
    private UtilisateursRepository utilisateursRepository;

    public List<Utilisateurs> findAll() {
        return utilisateursRepository.findAll();
    }

    public Utilisateurs findById(Integer id) {
        return utilisateursRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id=" + id));
    }

    public Utilisateurs findByNomUtilisateur(String nomUtilisateur) {
        return utilisateursRepository.findByNomUtilisateur(nomUtilisateur);
    }

    public Utilisateurs save(Utilisateurs utilisateurs) {
        return utilisateursRepository.save(utilisateurs);
    }

    public void delete(Utilisateurs utilisateurs) {
        utilisateursRepository.delete(utilisateurs);
    }
    public Utilisateurs findByEmailAndPassword(String email, String motDePasse) {
        return utilisateursRepository.findByEmailAndMotDePasse(email, motDePasse);
    }
}