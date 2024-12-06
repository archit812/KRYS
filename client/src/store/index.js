import { proxy } from 'valtio';

const state = proxy({
    //whatever will be given here, we're able to utilize that in whole application
    intro: true,
    color: '#EFBD48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './threejs.png',
    fullDecal: './threejs.png'
});

export default state;