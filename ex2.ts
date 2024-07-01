const isPrime = (n: number) => {
    return new Promise((resolve, reject) => {
        for (let i = 2, s = Math.sqrt(n); i <= s; i++)
            if (n % i === 0) reject(`${n} is not prime`);
        if (n > 1)
            return resolve(`${n} is prime`);
        else
            return reject(`${n} is not prime`);
    });
    // for (let i = 2, s = Math.sqrt(n); i <= s; i++)
    //     if (n % i === 0) return false;
    // return n > 1;
};

const isPrime2 = async (n: number) => {
    for (let i = 2, s = Math.sqrt(n); i <= s; i++)
        if (n % i === 0) throw (`${n} is not prime`);
    if (n > 1)
        return `${n} is prime`;
    else
        throw (`${n} is not prime`);

};

isPrime(5).then(console.log).catch(console.error);
isPrime(3).then(console.log).catch(console.error);
isPrime(1).then(console.log).catch(console.error);
isPrime(6).then(console.log).catch(console.error);
isPrime(2).then(console.log).catch(console.error);

console.log('start');
isPrime(7)
    .then(console.log)
    .catch(console.error);
console.log('end');

(async () => {
    try {
        const result2 = await isPrime2(17);
        console.log(result2);

        const result = await isPrime2(27);
        console.log(result);

        // unreacheable because exception
        const result3 = await isPrime2(18);
        console.log(result3);
        
    } catch (error) {
        console.error(error);
    }
})();