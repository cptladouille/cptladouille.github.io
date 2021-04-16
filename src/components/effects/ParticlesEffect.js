import React from 'react';
import Particles from 'react-particles-js';

const ParticlesEffect = () =>
{
    return (
        <Particles id="particles-js"
            params={{
                background: {
                    color:{
                        value: '#00000000'
                    },
                    size: 'cover',
                    opacity:0
                },
                fullScreen:{
                    enable:true,
                    zIndex:-1
                },
                fpsLimit:60,
                particles: {
                    number: {
                        value: 100,
                    },
                    color: {
                        value: '#fff50fa5'
                    },
                    opacity: {
                        value: {
                           min: 0.1,
                           max:1.5
                        },
                        animation: {
                            enable: true,
                            speed:8
                        }
                    },
                    size: {
                        value: 7,
                        random: true,
                        anim: {
                            enable: true,
                            speed: 3
                        }
                    },
                    line_linked: {
                        enable: false
                    },
                    move: {
                        speed:0.001
                    },
                    size:{
                        value : {
                            min:1,
                            max:2
                        }
                    }
                 }
            }}
        />
    )
} 

export default ParticlesEffect;