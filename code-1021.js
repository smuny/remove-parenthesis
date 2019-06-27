/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function(S) {
    let state = 0;
    let previousState = 0;
    result = [];

    for ( let i = 0; i < S.length; i += 1){
        let current = S[i];

        if (current === '(') {
            previousState = state;
            state += 1;
        } else {
            previousState = state;
            state -= 1;
        }
        if (
            !(
                (previousState === 0 && state === 1) || (previousState === 1 && state === 0)

            )
            )
            {
            result.push(current);
            }
    }

    return result.join('');
};
