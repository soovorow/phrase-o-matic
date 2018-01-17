function generateWhatWeNeed() {

    var wordListOne = ["24/7", "multi-Tier", "30,000 foot", "B-to-B", "win-win", "front-end", "web-based", "pervasive", "smart", "six-sigma", "critical-path", "dynamic"],
        wordListTwo = ["empowerd", "sticky", "value-added", "oriented", "centric", "distributed", "clustered", "branded", "outside-the-box", "positioned", "networked", "focused", "leveraged", "aligned", "targeted", "shared", "cooperative", "accelerated"],
        wordListThree = ["process", "tripping-point", "solution", "architecture", "core competency", "strategy", "mindshare", "portal", "space", "vision", "paradigm", "mission"];

    var oneLength = wordListOne.length,
        twoLength = wordListTwo.length,
        threeLength = wordListThree.length;

    var rand1 = parseInt(Math.random() * oneLength),
        rand2 = parseInt(Math.random() * twoLength),
        rand3 = parseInt(Math.random() * threeLength);

    console.log(rand1);

    return "a " + wordListOne[rand1] + " " + wordListTwo[rand2] + " " + wordListThree[rand3];
}

(function(yourcode) {
    yourcode(window.jQuery, window, document);
}(function($, window, document) {
    $(function() {

        var body = $('body'),
            button = $('#button'),
            result = $('#result');

        var action_body_class = 'cast',
            action_button_class = 'casting';

        body.on('click', '#button', function () {

            if ($(this).hasClass(action_button_class)) {
                return false;
            }

            body.addClass(action_body_class);
            button.addClass(action_button_class);

            setTimeout(function () {
                body.removeClass(action_body_class);
                result.html(generateWhatWeNeed());
                button.html('[ask again]').removeClass(action_button_class);
            }, 3000)
        })

    });
}));

