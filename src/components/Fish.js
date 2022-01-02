import { Sprite, Texture } from 'pixi.js';
import gsap from 'gsap/all';

/**
 *  @class - Create new Fish
 */
export default class Fish extends Sprite{
    /**
     * @constructor
     * @param {Pixi.Texture} texture
     */
    constructor(texture){
        super(texture);
        this.name = 'fish';

        this.interactive = true;
        this.buttonMode = true;
        this.anchor.set(0.5);

    }

    /**
     * @function - Expands the fish
     */
    expand(){
        this.texture = Texture.from('bigFish');
        gsap.to(this.scale, {x: 1.5, y: 1.5, duration: 1});

        setTimeout(() => this.contract(), 5000);
    }

    /**
     * @function - Scales the fish to normal
     */
    contract(){
        gsap.to(this.scale, {x: 1, y: 1, duration: 1});
        this.texture = Texture.from('smallFish');
    }

}