package com.ProgressSoft.Clustered.Data;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200") //since we’re just working locally
public class DealsDetailsController {

    DealsDetailsRepository dealsDetailsRepository;

    public DealsDetailsController(DealsDetailsRepository dealsDetailsRepository) {

        this.dealsDetailsRepository = dealsDetailsRepository;
    }

    @GetMapping("/dealsDetails/")
    public Iterable<DealsDetails> getDealsDetails() {
        return dealsDetailsRepository.findAll();
    }

    @GetMapping("/dealsDetails/{id}")
    public DealsDetails getDealsDetails(@PathVariable("id") Long id) {
        return dealsDetailsRepository.findById(id).get();
    }

    @PostMapping("/dealsDetails/")
    public HttpStatus addBook(@RequestBody DealsDetails dealsDetails){
        dealsDetailsRepository.save(dealsDetails);

        return HttpStatus.CREATED;
    }

}