import React from 'react'
import { motion } from 'framer-motion';

import { styles } from '../style';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const Footer = () => {
    return (
        <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Developed by mrinmoy-abstract</p>
        </motion.div>
    )
}

export default SectionWrapper(Footer, '');