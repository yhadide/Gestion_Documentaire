package com.ProjetStage.GestionDocuments.controllers;

import com.ProjetStage.GestionDocuments.exceptions.ResourceNotFoundException;
import com.ProjetStage.GestionDocuments.models.Utilisateurs;
import com.ProjetStage.GestionDocuments.services.UtilisateursService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/utilisateurs")
public class UtilisateursController {

    @Autowired
    private UtilisateursService utilisateursService;

    @GetMapping
    public ResponseEntity<List<Utilisateurs>> findAll() {
        List<Utilisateurs> utilisateurs = utilisateursService.findAll();
        return new ResponseEntity<>(utilisateurs, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Utilisateurs> findById(@PathVariable Integer id) {
        Utilisateurs utilisateurs = utilisateursService.findById(id);
        return new ResponseEntity<>(utilisateurs, HttpStatus.OK);
    }

    @GetMapping("/nom-utilisateur/{nomUtilisateur}")
    public ResponseEntity<Utilisateurs> findByNomUtilisateur(@PathVariable String nomUtilisateur) {
        Utilisateurs utilisateurs = utilisateursService.findByNomUtilisateur(nomUtilisateur);
        return new ResponseEntity<>(utilisateurs, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Utilisateurs> save(@RequestBody Utilisateurs utilisateurs) {
        Utilisateurs savedUtilisateurs = utilisateursService.save(utilisateurs);
        return new ResponseEntity<>(savedUtilisateurs, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody Utilisateurs userData) {
        Utilisateurs user = utilisateursService.findByEmailAndPassword(userData.getEmail(), userData.getMotDePasse());
        if (user != null && user.getEmail().equals(userData.getEmail()) && user.getMotDePasse().equals(userData.getMotDePasse())) {
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        Utilisateurs utilisateurs = utilisateursService.findById(id);
        if (utilisateurs == null) {
            throw new ResourceNotFoundException("User not found with id=" + id);
        }
        utilisateursService.delete(utilisateurs);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<String> handleResourceNotFound(ResourceNotFoundException ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }
}