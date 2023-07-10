type NavigationDotsProps = {
    active: string;
}
export default function NavigationDots({ active }: NavigationDotsProps) {
  return (
    <div className='app__navigation'>
        {['home', 'about', 'work', 'skills', 'contact'].map((item, index) => (
            <a
            href={`#${item}`}
            className='app__navigation-dot'
            style={active === item
                ? {backgroundColor: '#313BAC'} 
                : {}}
            key={item + index}
             />
        ))}
    </div>
  )
}
