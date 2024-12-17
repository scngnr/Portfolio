import { animate, AnimatePresence, motion } from "framer-motion";


const stairAnimation = {
    initial:{
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    },
};

//calculate reverse index for staggred delay
const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
}

const Stairs = () => {
    return ( 
        <>
        
            {/* 
                Render 6 motion divs, each representing a astep of the stairs.
                Each div will have the same animation defined by the stairAnimation object.
                The delay for each div is calculated dinamically based on it's reversed index,
                creating a staggred effect with decreasinh delay for each subsequvent step.                
            */}

            {[...Array(6)].map((_, index) =>{
                return (
                    <motion.div  
                        key={index}
                        variants={stairAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit" 
                        transition={ {
                            duration: 0.4,
                            ease: "easeInOut",
                            delay: reverseIndex(index) * 0.1,
                        }}
                        className="h-full w-full bg-white relative"
                    />
                );
            })}
        </>
     );
}
 
export default Stairs;