import Particles from "react-particles-js"

export default function particleContainer() {
    return (
        <Particles
        params={{
            "particles": {
                "number": {
                    "value": 50
                },
                "size": {
                    "value": 0
                },
                "line_linked": {
                    "color": "#1a0936"
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    }
                }
            }
        }} 
        style={{
            position: "absolute",
            width: "100vw",
            height: "100vw",
        }}/>
    )
}