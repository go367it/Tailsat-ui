import React,{useState} from 'react'
import { useRouter } from 'next/router'
import Button from './Buttons'

const Routes = () => {

    const router = useRouter()
    const [dynRoutes, setDynRoutes] = useState(router.query.routes)

    return (
        <div>
            sdvdsvdsdvsd
            {
                dynRoutes === 'Buttons' ? 
                <Button />
                :''
            }
        </div>
    )
}

export default Routes
