package com.bmarques.store.domain.purchase;

import com.bmarques.store.api.purchase.PurchaseAdressRequest;
import com.bmarques.store.api.purchase.PurchaseItemsRequest;
import lombok.*;

import java.util.List;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class PurchaseEntity {

    private Integer id;
    private List<PurchaseItemsEntity> items;
    private PurchaseAdressEntity adress;
}
