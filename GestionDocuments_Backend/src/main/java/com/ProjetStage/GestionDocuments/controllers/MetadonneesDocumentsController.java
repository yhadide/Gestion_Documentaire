package com.ProjetStage.GestionDocuments.controllers;

import com.ProjetStage.GestionDocuments.exceptions.ResourceNotFoundException;
import com.ProjetStage.GestionDocuments.models.Document;
import com.ProjetStage.GestionDocuments.models.MetadonneesDocuments;
import com.ProjetStage.GestionDocuments.services.MetadonneesDocumentsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/metadonnees-documents")
public class MetadonneesDocumentsController {

    @Autowired
    private MetadonneesDocumentsService metadonneesDocumentsService;

    @GetMapping
    public ResponseEntity<List<MetadonneesDocuments>> findAll() {
        List<MetadonneesDocuments> metadonneesDocuments = metadonneesDocumentsService.findAll();
        return new ResponseEntity<>(metadonneesDocuments, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MetadonneesDocuments> findById(@PathVariable Integer id) {
        MetadonneesDocuments metadonneesDocuments = metadonneesDocumentsService.findById(id);
        return new ResponseEntity<>(metadonneesDocuments, HttpStatus.OK);
    }

    @GetMapping("/findByDocumentId/{documentId}")
    public ResponseEntity<List<MetadonneesDocuments>> findByDocumentId(@PathVariable Integer documentId) {
        List<MetadonneesDocuments> metadonneesDocuments = metadonneesDocumentsService.findByDocumentId(documentId);
        return new ResponseEntity<>(metadonneesDocuments, HttpStatus.OK);
    }



    @PostMapping
    public ResponseEntity<MetadonneesDocuments> save(@RequestBody MetadonneesDocuments metadonneesDocuments) {
        MetadonneesDocuments savedMetadonneesDocuments = metadonneesDocumentsService.save(metadonneesDocuments);
        return new ResponseEntity<>(savedMetadonneesDocuments, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        MetadonneesDocuments metadonneesDocuments = metadonneesDocumentsService.findById(id);
        if (metadonneesDocuments == null) {
            throw new ResourceNotFoundException("Metadonnees not found with id=" + id);
        }
        metadonneesDocumentsService.delete(metadonneesDocuments);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<String> handleResourceNotFound(ResourceNotFoundException ex) {
        return new ResponseEntity<>(ex.getMessage(), HttpStatus.NOT_FOUND);
    }
}