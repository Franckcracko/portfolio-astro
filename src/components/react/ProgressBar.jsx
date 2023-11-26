import { motion, useScroll } from "framer-motion";
export const ProgressBar = () => {
  
  const { scrollYProgress } = useScroll();
  return (
    <motion.div className=" fixed bottom-0 left-0 right-0 h-[8px] bg-green-400 origin-[0%]" style={{ scaleX: scrollYProgress }} />
  )
}