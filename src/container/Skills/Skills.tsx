import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Skills.scss'
function Skills() {
// const [experience, setExperience] = useState<any>([]);
const [skills, setSkills] = useState<{name: string; imgUrl: string; icon: string; bgColor: string; title: string; description: string; tags: [string]}[]>([]);
  useEffect(() => {
    // const query = '*[_type == "experiences"]';
    const skillsQuery = '*[_type == "skills"]';

    // client.fetch(query)
    // .then((data) => {
    //   setExperience(data);      
    // })

    client.fetch(skillsQuery)
    .then((data) => {
      setSkills(data);
    })
  }, [])
  return (
    <>
      <h2 className='head-text'>Skills {/*& <span>Experience</span>*/}</h2>

      <div className='app__skills-container'>
        <motion.div
        className='app__skills-list'
        >
          {skills.map((skill) => (
            <motion.div
            whileInView={{ opacity: [0,1] }}
            transition={{ duration: 0.5 }}
            className='app__skills-item app__flex'
            key={skill.name}
            >
              <div className='app__flex' style={{ backgroundColor: skill.bgColor }}>
                <img src={urlFor(skill.icon).url()} alt={skill.name} />
              </div>
              <p className='p-text'>{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* <motion.div className='app__skills-exp'>
            {experience.map((experience: any) => (
              <motion.div
              className='app__skills-exp-item'
              key={experience.year}
              >
                <div className='app__skills-exp-year'>
                  <p className='bold-text'>{experience.year}</p>
                </div>
                <motion.div className='app__skills-exp-works'>
                  {experience?.works?.map((work: any) => (
                    <>
                    <motion.div 
                    whileInView={{ opacity: [0,1] }}
                    transition={{ duration: 0.5 }}
                    className='app__skills-exp-work'
                    data-tip
                    data-tooltip-id={work.name}
                    data-tooltip-content={work.desc}
                    key={work.name}
                    >
                      <h4 className='bold-text'>{work.name}</h4>
                      <p className='p-text'>{work.company}</p>
                     </motion.div>
    
                     <Tooltip
                     id={work.name}
                     className='skills-tooltip'
                     classNameArrow='style-arrow'
                     />
                  </>    
                  ))}
                </motion.div>
              </motion.div>
            ))}
        </motion.div> */}
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(Skills, 'app__skills'), 
'skills',
'app__whitebg'
);