import React from 'react';

const Hero = ({children,clnm})=>{

return (
    <header className={clnm}>
{children}
    </header>
)

}

Hero.defaultProps = {
    clnm : 'defaultHero'
}

export default Hero;