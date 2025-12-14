import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export const Project = ({title, image, description, fullDescription, repository, demo}) => {
    const [showMore, setShowMore] = useState(false);
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1
    });

    const toggleShow = () => {
        setShowMore(!showMore);
    }

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const footerVariants = {
        hidden: {
            opacity: 0,
            height: 0,
            marginTop: 0
        },
        visible: {
            opacity: 1,
            height: "auto",
            marginTop: "2rem",
            transition: {
                height: {
                    duration: 0.4,
                    ease: "easeOut"
                },
                opacity: {
                    duration: 0.3,
                    delay: 0.2
                }
            }
        },
        exit: {
            opacity: 0,
            height: 0,
            marginTop: 0,
            transition: {
                opacity: {
                    duration: 0.2
                },
                height: {
                    duration: 0.3,
                    delay: 0.1
                }
            }
        }
    };

    return (
        <motion.div
            ref={ref}
            className={showMore === false ? 'projectContainer' : 'projectFullContainer'}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
        >
            <div className='projectHeader'>
                <img src={`${image}`} alt={title} loading="lazy" />
            </div>
            <div className='projectDescription'>
                <div>
                    <h3>{title}</h3>
                    {showMore === false
                        ? <p>{description}</p>
                        : fullDescription.map((desc, index) => <p key={index}>{desc}</p>)
                    }
                </div>
                <div className='projectButton'>
                    <i
                        onClick={toggleShow}
                        className={showMore === false ? "bi bi-caret-down-fill" : "bi bi-caret-up-fill"}
                        aria-label={showMore ? "Show less" : "Show more"}
                    ></i>
                </div>
            </div>
            <AnimatePresence>
                {showMore === true && (
                    <motion.div
                        className='projectFooter'
                        variants={footerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <button><a href={repository} target="_blank" rel="noopener noreferrer">REPOSITORY</a></button>
                        {demo != null && <button><a href={demo} target="_blank" rel="noopener noreferrer">DEMO</a></button>}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default Project;