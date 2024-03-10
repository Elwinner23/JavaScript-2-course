
//задача туточки: https://leetcode.com/problems/promise-time-limit/description/


/**
 * @param {Function} a
 * @param {number} b
 * @return {Function}
 */
var timeLimit = function(a, b) {
    return async function(...args) {
        const originalFnPromise = a(...args);

        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => {
                reject('Time Limit Exceeded')
            }, b);
        })

        return Promise.race([originalFnPromise, timeoutPromise]);
    }
};