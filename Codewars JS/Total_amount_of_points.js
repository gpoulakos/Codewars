function points(games) {

    var i = 0;
    var points = 0;

    for (i; i < games.length; i++) {
        let game = games[i].split(":");
        if (game[0] > game[1]) {
            points += 3;
        } else if (game[0] == game[1]) {
            points +=1;
        } else {
            points += 0;
        }
    }
    return points;
}