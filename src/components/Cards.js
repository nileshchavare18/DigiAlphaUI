import React from 'react'
import './css/Cards.css'

function Cards() {
    const data =[
        {
            Id:1,
            image: "image 18.png",
            heading:"Creating Streamlined Safeguarding Processes with OneRen"
           
        },
        {
            Id:2,
            image: "image 18.png",
            heading:"Creating Streamlined Safeguarding Processes with<OneRen"
        },
        {
            Id:3,
            image: "image 18.png",
            heading:"Creating Streamlined Safeguarding Processes withOneRen"
        }
    ]
  return (
    <div className='card-main'>
    <div className='card-heading'>
        <h2 className='second-heading'>Caring is the new marketing</h2>
        <p className='text'>The Nexcent blog is the best place to read about the latest membership insights,<br/> trends and more. See who's joining the community, read about how our community<br/> are increasing their membership income and lot's more</p>
    </div>

    <div className='card-inner'>
   
    {data.map((data)=>{
            return(
            <div className='card-img'>
                <img src={data.image} alt=""/> 
                <div className='btn-section'>
                    
                <h5>{data.heading}</h5> 
                <button className='large-btn'>Readmore &rarr;</button>
                </div>
                </div>
               
            )
        })}
       
           
                
       
    </div>
      
    </div>
  )
}

export default Cards
