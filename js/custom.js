(function(yourcode) {
    yourcode(window.jQuery, window, document);
}(function($, window, document) {

    var wordListOne = ["24/7", "multi-Tier", "30,000 foot", "B-to-B", "win-win", "front-end", "web-based", "pervasive", "smart", "six-sigma", "critical-path", "dynamic"],
        wordListTwo = ["empowerd", "sticky", "value-added", "oriented", "centric", "distributed", "clustered", "branded", "outside-the-box", "positioned", "networked", "focused", "leveraged", "aligned", "targeted", "shared", "cooperative", "accelerated"],
        wordListThree = ["process", "tripping-point", "solution", "architecture", "core competency", "strategy", "mindshare", "portal", "space", "vision", "paradigm", "mission"];

    $(function() {

        var body = $('body'),
            button = $('#button'),
            result = $('#result'),
            tweet_button = $('#tweet');

        var action_body_class = 'cast',
            action_button_class = 'casting';

        if (window.location.search.length > 0) {
            var str = window.location.search,
                keys = str.split('=')[1].split('+'),
                phrase = "a " + wordListOne[keys[0]] + " " + wordListTwo[keys[1]] + " " + wordListThree[keys[2]];

            result.html(phrase);
            button.html('[ask again]');

            updateTweetButton(phrase, str);
        }

        body.on('click', '#button', function () {

            if ($(this).hasClass(action_button_class)) {
                return false;
            }

            body.addClass(action_body_class);
            button.html('').addClass(action_button_class);
            result.html('...');
            tweet_button.hide();

            setTimeout(function () {
                phrase = generateWhatWeNeed();
                body.removeClass(action_body_class);
                result.html(phrase);
                button.html('[ask again]').removeClass(action_button_class);
                updateTweetButton(phrase, window.location.search);
            }, 3000)
        });

        function updateTweetButton(phrase, params) {
            tweet_button.show();
            tweet_button.attr('href', 'https://twitter.com/intent/tweet?text=What we need is a ' + phrase + ': http://phrase-o-matic.soovorow.com/' + params)
        }
    });

    function generateWhatWeNeed() {
        var oneLength = wordListOne.length,
            twoLength = wordListTwo.length,
            threeLength = wordListThree.length;

        var rand1 = parseInt(Math.random() * oneLength),
            rand2 = parseInt(Math.random() * twoLength),
            rand3 = parseInt(Math.random() * threeLength);

        window.history.pushState(null, null, "/?share=" + rand1 + '+' + rand2 + '+' + rand3);

        return "a " + wordListOne[rand1] + " " + wordListTwo[rand2] + " " + wordListThree[rand3];
    }



}));

