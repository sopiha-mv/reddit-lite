const objectToQuery = (obj, prefix) => {
    let str = [],
        p;
    for (p in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, p)) {
            let k = prefix ? prefix + '[' + p + ']' : p,
                v = obj[p];
            str.push((v !== null && typeof v === 'object') ?
                objectToQuery(v, k) :
                encodeURIComponent(k) + '=' + encodeURIComponent(v));
        }
    }
    return str.join('&');
};

export default objectToQuery;