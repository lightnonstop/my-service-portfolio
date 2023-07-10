import { useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Testimonial.scss'
function Testimonial() {
  const [brands, setBrands] = useState<{_id: string; imgUrl: string; name: string; company: string;}[]>([]);
const [testimonials, setTestimonials] = useState<{imgUrl: string; feedback: string; name: string; company: string;}[]>([]);
const [currentIndex, setCurrentIndex] = useState<number>(0);

useEffect(() => {
  const query = '*[_type == "testimonials"]';
  const brandsQuery = '*[_type == "brands"]';

  client.fetch(query)
  .then((data) => {

    setTestimonials(data);
  })

  client.fetch(brandsQuery)
  .then((data) => {
    
    setBrands(data);
    
  })
}, [])

function handleClick(item: number){
  setCurrentIndex(item);
}

const test = testimonials[currentIndex];
  return (
    <>
      {testimonials.length && (
        <>
          <div className='app__testimonial-item app__flex'>
            <img src={urlFor(test.imgUrl).url()} alt="testimonial" />
            <div className='app__testimonial-content'>
              <p className='p-text'>{test.feedback}</p>
              <div>
                <h4 className='bold-text'>
                  {test.name}
                </h4>
                <h5 className='p-text'>{test.company}</h5>
              </div>
            </div>
          </div>

          <div className='app__testimonial-btns app__flex'>
            <div className='app__flex' onClick={() => handleClick(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}>
              <HiChevronLeft />
            </div>

            <div className='app__flex' onClick={() => handleClick(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}>
            <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className='app__testimonial-brands app__flex'>
        {brands.map(brand => (
          <motion.div
          whileInView={{ opacity: [0,1] }}
          transition={{ duration: 0.5, type: 'tween' }}
          key={brand._id}
          >
            <img src={urlFor(brand.imgUrl).url()} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(MotionWrap(Testimonial, 'app__testimonial'), 
'testimonial',
'app__primarybg'
);
