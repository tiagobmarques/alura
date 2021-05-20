import { logarTempoDeExecucao } from '../helpers/decorators/index';

import { NegociacoesView, MensagemView } from '../views/index';
import { Negociacoes, Negociacao } from "../models/index";
import { domInject, throttle } from "../helpers/decorators/index";
import { NegociacaoParcial} from "../models/index";
import { NegociacaoService, HandlerFunction} from "../services/index";
import { imprime } from '../helpers/Utils';

let timer = 0;

export class NegociacaoController {

    @domInject('#data')
    private _inputData: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;

    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');
    private _service = new NegociacaoService();

    constructor() {
        
        this._negociacoesView.update(this._negociacoes);

    }

    @throttle(500)
    adiciona() {

        let data = new Date(this._inputData.val().replace(/-/g, ','));

        if (this.ehFinalDeSemana(data)) {
            this._mensagemView.update("Somente negociações em dias úteis");
            return
        }

        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );
        
        this._negociacoes.adiciona(negociacao);

        imprime(negociacao, this._negociacoes);

        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso');
         
    }

    private ehFinalDeSemana (data: Date) {
        return (data.getDay() == DiaDaSemana.Domingo || data.getDay() == DiaDaSemana.Sabado);
    }

    @throttle()
    async importaDados() {

        try {

           // usou await antes da chamada de this.service.obterNegociacoes()

            const negociacoesParaImportar = await this._service
                .obterNegociacoes(res => {

                    if(res.ok) {
                        return res;
                    } else {
                        throw new Error(res.statusText);
                    }
                });

            const negociacoesJaImportadas = this._negociacoes.paraArray();

            negociacoesParaImportar
                .filter(negociacao => 
                    !negociacoesJaImportadas.some(jaImportada => 
                        negociacao.ehIgual(jaImportada)))
                .forEach(negociacao => 
                this._negociacoes.adiciona(negociacao));

            this._negociacoesView.update(this._negociacoes);

        } catch(err) {
            this._mensagemView.update(err.message);
        }
    }
}

enum DiaDaSemana {
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}