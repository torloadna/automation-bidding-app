class whiteLVBag {

    async insertBid(BID){
        let insert = element.all(by.id("bid-amount-input"));
        insert.sendKeys(BID);
    }
    async placeBid(){
        let placeBidButton = element.all(by.id("place-bid-span"));
        placeBidButton.click();
    }

}

module.exports = new whiteLVBag();