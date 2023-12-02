import { LightningElement } from "lwc";
//import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import getAeroportos from "@salesforce/apex/VooController.listarAeroportos";
//import calculateDistance from '@salesforce/apex/calculateDistance.calculateDistance';
//import{ LightningElement } from 'lwc';
export default class PesquisarRota extends LightningElement {
  value = "";
  selecao = [];

  connectedCallback() {
    getAeroportos().then((resultado) => {
      let aux = [];
      for (let i = 0; i < resultado.length; i++) {
        aux.push({
          label: resultado[i].Name,
          value: resultado[i].codigo_IATA__c
        });
      }
      this.selecao = aux;
    });
  }

  get aeroportosPartida() {
    return this.selecao;
  }
  get aeroportosDestino() {
    return this.selecao;
  }

  selecionarPartida() {}
  selecionarDestino() {}
}

