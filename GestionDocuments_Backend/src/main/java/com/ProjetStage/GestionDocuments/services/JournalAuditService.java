package com.ProjetStage.GestionDocuments.services;

import com.ProjetStage.GestionDocuments.models.JournalAudit;
import com.ProjetStage.GestionDocuments.repositories.JournalAuditRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JournalAuditService {

    @Autowired
    private JournalAuditRepository journalAuditRepository;

    public List<JournalAudit> findAll(){
        return journalAuditRepository.findAll();
    }
    public List<JournalAudit> findByDocumentId(Integer documentId) {
        return journalAuditRepository.findByDocumentIdDocument(documentId);
    }

    public JournalAudit save(JournalAudit journalAudit) {
        return journalAuditRepository.save(journalAudit);
    }
}