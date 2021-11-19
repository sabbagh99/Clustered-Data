package com.ProgressSoft.Clustered.Data;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200") //since we’re just working locally
public class DealsDetailsController {

    DealsDetailsRepository dealsDetailsRepository;

    public DealsDetailsController(DealsDetailsRepository dealsDetailsRepository) {

        this.dealsDetailsRepository = dealsDetailsRepository;
    }

    @RequestMapping("/")
    public RedirectView redirectWithUsingRedirectView() {
        return new RedirectView("http://localhost:4200");
    }
    @GetMapping("/dealsDetails/")
    public Iterable<DealsDetails> getDealsDetails() {
        return dealsDetailsRepository.findAll();
    }

    @GetMapping("/dealsDetails/{id}")
    public DealsDetails getOneDealDetail(@PathVariable("id") Long id) {
        try {
            DealsDetails deal = dealsDetailsRepository.findById(id).get();
            if (deal != null)
                return deal;

        }catch(Exception e){
            return new DealsDetails();
        }
        return new DealsDetails();
    }

    @PostMapping("/dealsDetails/")
    public HttpStatus addDeals(@RequestBody DealsDetails dealsDetails) {
        return checkDeals(dealsDetails);
    }


    private HttpStatus checkDeals(DealsDetails deals) {

        Iterable<DealsDetails> allDeals = dealsDetailsRepository.findAll();
        for (DealsDetails deal : allDeals) {
            if (deals.getFromCurrency().equals(deal.getFromCurrency())
                    && deals.getToCurrency().equals(deal.getToCurrency())
                    && deals.getDealAmount() == deal.getDealAmount()) {
                return HttpStatus.BAD_REQUEST;
            }

        }
        dealsDetailsRepository.save(deals);
        return HttpStatus.CREATED;

    }
}