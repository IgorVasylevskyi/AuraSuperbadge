public with sharing class BoatReviews {

    @AuraEnabled
    public static List<BoatReview__c> getAll(Id boatId){
        System.debug('boatId: ' + boatId);
        return [
                SELECT
                        Id, Name, Comment__c, Rating__c, LastModifiedDate, CreatedDate,
                        CreatedBy.Name, CreatedBy.SmallPhotoUrl, CreatedBy.CompanyName
                FROM
                        BoatReview__c
                WHERE Boat__c = :boatId
        ];
    }
}