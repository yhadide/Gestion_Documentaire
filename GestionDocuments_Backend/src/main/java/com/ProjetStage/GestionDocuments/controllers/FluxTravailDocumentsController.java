    package com.ProjetStage.GestionDocuments.controllers;

    import com.ProjetStage.GestionDocuments.models.FluxTravailDocuments;
    import com.ProjetStage.GestionDocuments.services.FluxTravailDocumentsService;
    import org.springframework.beans.factory.annotation.Autowired;
    import org.springframework.http.HttpStatus;
    import org.springframework.http.ResponseEntity;
    import org.springframework.web.bind.annotation.*;

    import java.util.List;

    @RestController
    @RequestMapping("/flux-travail-documents")
    public class FluxTravailDocumentsController {

        @Autowired
        private FluxTravailDocumentsService fluxTravailDocumentsService;

        @GetMapping
        public ResponseEntity<List<FluxTravailDocuments>> findAll() {
            List<FluxTravailDocuments> fluxTravailDocumentsList = fluxTravailDocumentsService.findAll();
            return new ResponseEntity<>(fluxTravailDocumentsList, HttpStatus.OK);
        }

        @GetMapping("/{documentId}")
        public ResponseEntity<List<FluxTravailDocuments>> findByDocumentId(@PathVariable Integer documentId) {
            List<FluxTravailDocuments> fluxTravailDocuments = fluxTravailDocumentsService.findByDocumentId(documentId);
            return new ResponseEntity<>(fluxTravailDocuments, HttpStatus.OK);
        }

        @PostMapping
        public ResponseEntity<FluxTravailDocuments> save(@RequestBody FluxTravailDocuments fluxTravailDocuments) {
            FluxTravailDocuments savedFluxTravailDocuments = fluxTravailDocumentsService.save(fluxTravailDocuments);
            return new ResponseEntity<>(savedFluxTravailDocuments, HttpStatus.CREATED);
        }

    }