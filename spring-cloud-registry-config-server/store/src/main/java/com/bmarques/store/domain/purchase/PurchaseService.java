package com.bmarques.store.domain.purchase;

import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class PurchaseService {

    private final RestTemplate restTemplate;

    public PurchaseService(RestTemplate restTemplate) {
        this.restTemplate = restTemplate;
    }

    public void generatePurchase(PurchaseEntity purchaseEntity) {
        ResponseEntity<SupplierInfo> exchange = restTemplate.exchange("http://supplier/supplier/" + purchaseEntity.getAdress().getState(),
                HttpMethod.GET, null, SupplierInfo.class);

        System.out.println(exchange.getBody().getState());
    }
}
