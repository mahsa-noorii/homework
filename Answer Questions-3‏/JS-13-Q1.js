//! OPTIONAL
// ? Question-1:Using lexical scope, Write a function that displays the following outputs in order:
/**
 * Action
 * Potential
 * Signals
 */
// !Answer:

const actionFunc = function() {
    let a = 'Action';

    let potentialFunc = function () {
        let b = 'Potential';
        let signalsFunc = function(){
            let c = 'Signals';
            let fullNamefunc = function(){
                return `${a} ${b} ${c}`;
            }
            return fullNamefunc();
        }
        return signalsFunc();
    }
    return potentialFunc();
}

console.log(actionFunc());
