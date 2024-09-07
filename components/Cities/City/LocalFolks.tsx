import React, { useContext } from 'react';
import '@/components/Cities/City/LocalFolks.css';
import { City } from '@/types/CityTypes';

interface LocalFolksProps {
    city: City
}

const LocalFolks:React.FC<LocalFolksProps> = ({city}) => {
    const interviews = city?.tips;

    console.log(interviews)
    
    return (
        <div className="local-folks">
            <div className="header-title">
                Voices of the Locals: Insider Tips and Stories
            </div>
            <div className="interviews">
                {
                    interviews?.map((interview, index) => (
                        <div className={`interview ${(index + 1) === 3 ? 'grid-span-row-2' : (index + 1) % 2 === 1 ? 'grid-span-col-2' :  ''}`} key={index}>
                        <div className="header">
                            <div className="avatar">
                                <img src={'https://img.freepik.com/premium-vector/avatar-icon002_750950-52.jpg'} alt="" />
                            </div>
                            <div className="name">{interview.name}</div>
                            
                        </div>
                        <p className="body">
                            {interview.tip}
                        </p>
                    </div>
                    ))    
                }
            </div>
        </div>
    )
}

export default LocalFolks