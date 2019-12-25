import Vue from 'vue'

Vue.filter('formatNumber', function(input) {
    if (typeof(input) === 'undefined' || input === null || input === '-') {
        return '-';
    }
    if (input === '') {
        return '';
    }

    input = Math.round(input * 100)/100;
    return input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
});

Vue.filter('roundNumber', function(input) {
    if (typeof(input) === 'undefined' || input === null || input === '-') {
        return '-';
    }
    if (input === '') {
        return '';
    }

    if (input >= 1000000000000) {
        input = Math.round(input / 10000000000)/100;
        return input + 'T';
    }
    if (input >= 1000000000) {
        input = Math.round(input / 10000000)/100;
        return input + 'B';
    }
    if (input >= 1000000) {
        input = Math.round(input / 10000)/100;
        return input + 'M';
    }
    if (input >= 1000) {
        input = Math.round(input / 10)/100;
        return input + 'K';
    }
    return input;
});

Vue.filter('formatTime', function(input) {
    if (typeof(input) === 'undefined' || input === null || input === 0 || input === '') {
        return '';
    }

    var hours = Math.floor(input/3600),
        minutes = Math.floor((input - hours*3600)/60),
        seconds = input - hours * 3600 - minutes * 60;

    var result = '';
    if (hours) {
        result += ('0' + hours).slice(-2) + 'ч ';
    }
    if (minutes) {
        result += ('0' + minutes).slice(-2) + 'м ';
    }
    if (seconds) {
        result += ('0' + seconds).slice(-2) + 'с';
    }

    return result.trim();

    // return ('0' + hours).slice(-2) + 'ч ' + ('0' + minutes).slice(-2) + 'м ' + ('0' + seconds).slice(-2) + 'с';
});

Vue.filter('timeToWeeks', function(input) {
    if (typeof(input) === 'undefined' || input === null || input === 0 || input === '') {
        return '';
    }

    let periods = [
        [60*60*24*7, 'нед '],
        [60*60*24, 'д '],
        [60*60, 'ч '],
        [60, 'мин '],
        [1, 'сек '],
    ];

    let time = input,
        result = '';

    for (let i = 0, len = periods.length, j = len; i < len && i <= j; i++) {
        let period = periods[i][0],
            periodCount = Math.floor(time / period);

        if (periodCount) {
            result += periodCount + periods[i][1];
            if (j === len) j = i + 1;
            time -= periodCount * period;
        }
    }

    return result.trim();
});

Vue.filter('timeToGold', function(input) {
    if (typeof(input) === 'undefined' || input === null || input === 0 || input === '') {
        return '';
    }

    return Math.ceil(input / 86400 / 16) * 41840;
});

export default {}
