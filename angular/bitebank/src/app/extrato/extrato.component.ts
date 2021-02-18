import { Transferencia } from './../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {

  //transferenciasRecebe: any[];
  transferenciasRecebe: Transferencia[];

  constructor(private service: TransferenciaService) { }

  ngOnInit() {
      this.service.todas().subscribe((transferencias: Transferencia[]) => {
        console.table(transferencias);
        this.transferenciasRecebe = transferencias;
      });
      //this.transferenciasRecebe$ = this.service.todas();
  }

}
