class item {
    async insertBid(BID){
        let insert = element.all(by.id("bid-amount-input"));
        await insert.sendKeys(BID);
    }
    async placeBid(){
        let placeBidButton = element.all(by.id("place-bid-span"));
        await placeBidButton.click();
    }
}
module.exports = new item();