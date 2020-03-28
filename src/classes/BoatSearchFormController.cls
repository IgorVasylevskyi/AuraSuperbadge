public with sharing class BoatSearchFormController {
    
    @AuraEnabled
    public static List<BoatType__c> getBoatTypes(){
        
        List<BoatType__c> boatTypes = [SELECT Name FROM BoatType__c];
        
        /*for(BoatType__c type: [SELECT Name FROM BoatType__c]){
            
            boatTypes.add(type);
        }*/
        
        return boatTypes;
    }
}