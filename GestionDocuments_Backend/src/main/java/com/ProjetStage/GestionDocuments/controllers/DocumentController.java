package com.ProjetStage.GestionDocuments.controllers;

import com.ProjetStage.GestionDocuments.exceptions.ErrorDetails;
import com.ProjetStage.GestionDocuments.exceptions.ResourceNotFoundException;
import com.ProjetStage.GestionDocuments.models.Document;
import com.ProjetStage.GestionDocuments.services.DocumentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/documents")
public class DocumentController {

    @Autowired
    private DocumentService documentService;

    @GetMapping
    public ResponseEntity<List<Document>> findAll() {
        List<Document> documents = documentService.findAll();
        return new ResponseEntity<>(documents, HttpStatus.OK);
    }


    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<ErrorDetails> handleResourceNotFoundException(ResourceNotFoundException ex) {
        ErrorDetails errorDetails = new ErrorDetails(HttpStatus.NOT_FOUND.value(), ex.getMessage());
        return new ResponseEntity<>(errorDetails, HttpStatus.NOT_FOUND);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Document> findById(@PathVariable Integer id) {
        Document document = documentService.findById(id);
        if (document == null) {
            throw new ResourceNotFoundException("Document not found with id=" + id);
        }
        return new ResponseEntity<>(document, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<Document> save(@RequestPart Document document,
                                         @RequestPart(required = false) MultipartFile file) {
        // Manually validate the Document object here
        if (document.getTypeDocument() == null || document.getTypeDocument().isEmpty()) {
            // Handle validation error appropriately (e.g., return a validation error response)
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }

        // Continue with the save logic
        try {
            Document savedDocument = documentService.save(document, file);
            return new ResponseEntity<>(savedDocument, HttpStatus.CREATED);
        } catch (IOException e) {
            // Handle the exception appropriately
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


    @GetMapping("/type/{type}")
    public ResponseEntity<List<Document>> findByType(@PathVariable String type) {
        List<Document> documents = documentService.findByType(type);
        return new ResponseEntity<>(documents, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        documentService.delete(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}