function distance(x1, x2, y1, y2) {
// returns the distance between (x1, y1) and (x2, y2)

    var leg = x1 - x2;
    var height = y1 - y2;

    var pythag = (leg * leg) + (height * height);
    return Math.sqrt(pythag);
}
