public with sharing class ViagemController {
            @AuraEnabled(cacheable=true)
            public static List <Viagem__c> listarViagens(); {
            return [SELECT  Distancia_voo__c FROM Viagem__c]
            }
        }

    
