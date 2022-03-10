function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
    }

function fiveHeads() {
    return new Promise((resolve, reject)=> {
        let headsCount = 0;
        let attempts = 0;
        let attemptcap = 101; //realized that could set to 100 and then in if condition wire <=

        while(headsCount < 5 && attempts < attemptcap) {
            attempts++;
            let result = tossCoin();
            console.log(`${result} was flipped`);
            if(result === "heads"){
            headsCount++;
            } else {
            headsCount = 0;
            }
        }
        if(attempts < attemptcap){
            resolve(`It took ${attempts} tries to flip five "heads"`);
        } else{
            reject(`it took more than ${attemptcap -1 } attempts to flip five "heads"`);
        }
    });}

    
fiveHeads()
.then((res) => console.log(res))
.catch((err) => console.log(err));
console.log("When does this run now?");