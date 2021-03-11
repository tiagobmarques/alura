import { Transferencia } from './../models/transferencia.model';
import { Component, EventEmitter, Output } from "@angular/core";
import { TransferenciaService } from "../services/transferencia.service";
import { Router } from '@angular/router';

@Component({
    selector: 'app-nova-trasferencia',
    templateUrl: './nova-transferencia.component.html',
    styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferencia {

  @Output() aoTransferir = new EventEmitter<any>();

  valor : number;
  destino : number;

  constructor(private service: TransferenciaService, private router: Router) { }

  transferencia() {
    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino};

    this.service.adicionar(valorEmitir).subscribe(resultado => {
      console.log(resultado);

      this.valor = 0;
      this.destino = 0;
      this.router.navigateByUrl("extrato");
    }, (error) => {
      console.error(error);
    });

  }
}
