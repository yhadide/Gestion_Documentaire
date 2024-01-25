package com.ProjetStage.GestionDocuments.services;

import com.ProjetStage.GestionDocuments.models.FluxTravailDocuments;
import com.ProjetStage.GestionDocuments.repositories.FluxTravailDocumentsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FluxTravailDocumentsService {

    @Autowired
    private FluxTravailDocumentsRepository fluxTravailDocumentsRepository;

    public List<FluxTravailDocuments> findAll(){
        return fluxTravailDocumentsRepository.findAll();
    }

    public List<FluxTravailDocuments> findByDocumentId(Integer documentId) {
        return fluxTravailDocumentsRepository.findByDocumentIdDocument(documentId);
    }

    public FluxTravailDocuments save(FluxTravailDocuments fluxTravailDocuments) {
        return fluxTravailDocumentsRepository.save(fluxTravailDocuments);
    }
}