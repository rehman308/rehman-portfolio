import React from "react";
import AnimatedCursor from "react-animated-cursor";

const CustomCursor = () => {
    return (
        <AnimatedCursor
            innerSize={10}
            outerSize={35}
            innerScale={1}
            outerScale={2}
            outerAlpha={0}
            hasBlendMode={true}
            innerStyle={{backgroundColor: "#00bc7d"}}
            outerStyle={{border: "3px solid #a4f4cf"}}
        />
    );
};

export default CustomCursor;