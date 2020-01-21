let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function(partySize){
        let seatsLeft = this.guestCapacity - this.guestCount;
        return partySize <= seatsLeft
    }
};

// seatParty
restaurant.seatParty = function(party) {
    this.guestCount = this.guestCount + party;
};

// removeParty
restaurant.removeParty = function(party) {
    this.guestCount = this.guestCount - party;
}



restaurant.seatParty(72);
console.log(restaurant.checkAvailability(4));


restaurant.removeParty(5);
console.log(restaurant.checkAvailability(4));