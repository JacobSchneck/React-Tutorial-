import {Clock} from './clock.js';

class ExtendedClock extends Clock {
    constructor({template}){
        super(template);
        let {precision = 1000} = template;
        this.precision = precision;
    }

    start() {
        this.render();
        this.timer() = setInterval(() => this.render, this.precision);
    }
}

let newClock = new ExtendedClock({template: 'h:m:s'});
newClock.start();