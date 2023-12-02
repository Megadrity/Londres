import { LightningElement } from 'lwc';
import getViagens from '@salesforce/apex/PesquisarViagem.listarViagens';
export default class PesquisarViagem extends LightningElement {
    value = "";
  selecao = [];

  connectedCallback() {
    getViagens().then((resultado) => {
      let aux = [];
      for (let i = 0; i < resultado.length; i++) {
        aux.push({
          label: resultado[i].Viagem__c,
          value: resultado[i].Distancia_voo__c
          
        });
      }
      this.selecao = aux;
    });
  }
  get distanciaVoo() {
return this.selecao;
  }
  //distanciaVoo() {}
  
}
