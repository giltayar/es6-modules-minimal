import _ from 'lodash';

document.getElementById("content").textContent = _.map([1, 2, 3], function(x) {return x * 2}).toString();
