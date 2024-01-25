package com.ProjetStage.GestionDocuments.controllers;

import com.ProjetStage.GestionDocuments.models.JournalAudit;
import com.ProjetStage.GestionDocuments.services.JournalAuditService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/journal-audit")
public class JournalAuditController {

    @Autowired
    private JournalAuditService journalAuditService;

    @GetMapping
    public ResponseEntity<List<JournalAudit>> findAll() {
        List<JournalAudit> journalAudits = journalAuditService.findAll();
        return new ResponseEntity<>(journalAudits, HttpStatus.OK);
    }

    @GetMapping("/{documentId}")
    public ResponseEntity<List<JournalAudit>> findByDocumentId(@PathVariable Integer documentId) {
        List<JournalAudit> journalAudits = journalAuditService.findByDocumentId(documentId);
        return new ResponseEntity<>(journalAudits, HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<JournalAudit> save(@RequestBody JournalAudit journalAudit) {
        JournalAudit savedJournalAudit = journalAuditService.save(journalAudit);
        return new ResponseEntity<>(savedJournalAudit, HttpStatus.CREATED);
    }


}
