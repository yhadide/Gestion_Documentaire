package com.ProjetStage.GestionDocuments.services;

import com.ProjetStage.GestionDocuments.exceptions.ResourceNotFoundException;
import com.ProjetStage.GestionDocuments.models.Document;
import com.ProjetStage.GestionDocuments.repositories.DocumentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class DocumentService {

    private final DocumentRepository documentRepository;

    @Autowired
    public DocumentService(DocumentRepository documentRepository) {
        this.documentRepository = documentRepository;
    }

    public List<Document> findAll() {
        return documentRepository.findAll();
    }

    public Document findById(Integer id) {
        return documentRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Document not found with id=" + id));
    }

    public Document save(Document document, MultipartFile file) throws IOException {
        if (file != null && !file.isEmpty()) {
            document.setDocumentImg(file.getBytes());
        }
        return documentRepository.save(document);
    }

    public List<Document> findByType(String type) {
        return documentRepository.findByTypeDocument(type);
    }

    public void delete(Integer id) {
        documentRepository.deleteById(id);
    }
    
}
