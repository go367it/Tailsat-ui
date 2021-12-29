import React from 'react'

interface Required {
    Name?: string,
    Size?: string, // accepts values like sm md lg for giving padding
    Rounded?: string, // accepts values like sm md lg for giving padding
}


const Button = ({Name='Button', Size='md', Rounded='md'}: Required) => {
    
    return (
        <div>
            <button
            className={`${Size === 'sm'? 'py-1 px-1' : Size ==='md'? 'py-3 px-4' : Size === 'lg'? 'py-4 px-5' :'py-2 px-2'}
            ${Rounded === 'sm'? 'rounded-sm' : Rounded ==='md'? 'rounded-md' : Rounded === 'lg'? 'rounded-lg' :' rounded-none'}
            focus:ring-2 focus:ring-offset-2 outline-none
            `}
            >
                {Name}
            </button>
        </div>
    )
}

export default Button
