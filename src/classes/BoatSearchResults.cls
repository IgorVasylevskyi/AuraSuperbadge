public with sharing class BoatSearchResults {

    @AuraEnabled
    public static List<Boat__c> getBoats(String boatTypeId){
    
        List<Boat__c> boats = new List<Boat__c>();
        
        if(boatTypeId == ''){
            boats = [SELECT Name, BoatType__r.Name, Contact__r.Name, Picture__c FROM Boat__c];
        }
        
        else if(boatTypeId != ''){
            
            boats = [SELECT Name, BoatType__c, Contact__r.Name, Picture__c  FROM Boat__c
                        WHERE BoatType__c = :boatTypeId];
        }
        System.debug('apex');
        System.debug('boatTypeId: ' + boatTypeId);
        System.debug('boats: ' + boats);
        return boats;
    }
}