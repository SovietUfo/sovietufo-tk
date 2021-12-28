import Particles from "react-particles-js"

export default function particleContainer() {
    return (
        <Particles
            params={{
                "particles": {
                    "number": {
                        "value": 100,
                        "density": {
                            "enable": true,
                            "value_area": 900
                        }
                    },
                    "size": {
                        "value": 0
                    },
                    "line_linked": {
                        "color": "#2E3440",
                        "opacity": 0.1
                    }
                },
                /*"interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "grab"
                        }
                    }
                } */
            }} 
            className="absolute w-screen h-screen"/>
    )
}