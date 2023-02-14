export const debounce = (func, timeout = 1000) => {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, timeout);
    }
}

export const sort = (e, puppies) => {
    let sortedPuppies = [...puppies];
    let sortByValue = e.target.value;
    if ("Name" === sortByValue) {
        sortedPuppies.sort((a, b) => a.name.localeCompare(b.name));
    } else if ("Life Span" === sortByValue) {
        sortedPuppies.sort((a, b) => a.lifeSpan.localeCompare(b.lifeSpan));
    } else if ("Height - Imperial" === sortByValue) {
        sortedPuppies.sort((a, b) => a.height.imperial.localeCompare(b.height.imperial));
    } else {
        sortedPuppies.sort((a, b) => a.height.metric.localeCompare(b.height.metric));
    }
    return sortedPuppies;
}