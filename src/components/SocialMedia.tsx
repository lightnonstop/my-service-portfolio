import { AiFillMail } from 'react-icons/ai';
import {BsLinkedin, BsGithub } from 'react-icons/bs';
export default function SocialMedia() {
  return (
    <div className='app__social'>
        <div>
          <a href="https://github.com/lightnonstop" target='_blank'>
            <BsGithub />
          </a>
        </div>
        <div>
            <a href="mailto:umichaeledet003@gmail.com">
              <AiFillMail />
            </a>
        </div>
        <div>
            <a href="https://www.linkedin.com/in/unwana-michael" target='_blank'>
              <BsLinkedin />
            </a>
        </div>
    </div>
  )
}
