public with sharing class VooController {
    @AuraEnabled(cacheable=true)
    public static List<Aeroporto__c> listarAeroportos(){
        return [SELECT Name, codigo_IATA__c FROM Aeroporto__c];
    }
}
