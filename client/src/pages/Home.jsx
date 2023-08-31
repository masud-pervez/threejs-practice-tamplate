import state from "../store";
import { AnimatePresence, motion } from "framer-motion";
import { useSnapshot } from "valtio";
import {
  slideAnimation,
  headContentAnimation,
  headTextAnimation,
} from "../config/motion";
import logo from "../assets/logo.png";
import CustomButton from "../components/CustomButton";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img alt="logo" src={logo} className="w-12 h-12 object-contain" />
          </motion.header>
          <motion.div className="home-content" {...headContentAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                {"Let's"} <br className="xl:block hidden" />
                DO IT.
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-500 text-base">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
                sequi voluptatibus rerum.
              </p>

              <CustomButton
                type="filled"
                title="Customize It"
                handleClick={() => (state.intro = false)}
                customStyle="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
