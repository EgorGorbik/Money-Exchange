
module.exports = function makeExchange(currency) {
    if(currency <= 0) return {};
    if(currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    var result = {};
    var H = Math.floor(currency / 50);
    if(H > 0) result.H = H;
    var currency = currency % 50;

    var Q = Math.floor(currency / 25);
    if(Q > 0) result.Q = Q;
    var currency = currency % 25;

    var D = Math.floor(currency / 10);
    if(D > 0) result.D = D;
    var currency = currency % 10;

    var N = Math.floor(currency / 5);
    if(N > 0) result.N = N;
    var currency = currency % 5;

    var P = Math.floor(currency / 1);
    if(P > 0) result.P = P;
    var currency = currency % 1;

    return result;
}
