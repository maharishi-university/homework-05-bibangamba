/*
const morning_meditation = new Meditation(5);
morning_meditation.start();
console.log(`Start meditation`);

// Start meditation
// 5
// 4
// 3
// 2
// 1
// Jay Guru Dev
*/

class Meditation {
    constructor(public time: number) { }

    private meditate = () => {
        while (this.time > 0) {
            console.log(this.time);
            this.time--;
        }
        console.log('Jay Gutu Dev');

    };

    start = () => setTimeout(this.meditate, 0);
}

const morning_meditation = new Meditation(5);
morning_meditation.start();
console.log(`Start meditation`);