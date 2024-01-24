import React from 'react'
import './css/Home.css'


function Home() {

  const data =[
    {
        Id:1,
        image: "image 18.png",
        heading:"Creating Streamlined Safeguarding Processes with OneRen"
       
    },
    {
        Id:2,
        image: "image 19.png",
        heading:"What are your safeguarding responsibilities and how can you manage them?"
    },
    {
        Id:3,
        image: "image 20.png",
        heading:"Revamping the Membership Model with Triathlon Australia"
    }
]

  return (
    <div>
      <div className='main-container'>
    
        <div className='first-container'>
            <div className='left-container'>
            <h1 className='heading'>Lessons and insights <br/><span className='end-heading'> from 8 years</span></h1>
            <p className='text'>Where to grow your business as a photographer: site or social media?</p>
            <button className='large-btn'>Register</button>
            </div>
       

       
            <div className='right-container'>
            <img src='Illustration.png'  alt='Illustration.png'></img>
            </div>

        </div>
       

        <div className='second-container'>
            <div className='left-container'>
            <img src='rafiki.png' alt='rafiki.png'></img>
            </div>
            <div className='right-container'>
            <h2 className='second-heading'>The unseen of spending three <br/> years at Pixelgrade</h2>
            <p className='second-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed <br/> accumsan quam vitae est varius fringilla. Penpllentesque placerat vestibulum lorem sed <br/> porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam <br/> quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
            <button className='large-btn'>Learn More</button>
            </div>
       

        </div>

       


        <div className='third-container'>
            <div className='left-container'>
            <h2 className='second-heading'>How to design your site footer like <br/> we did</h2>
            <p className='second-text'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt <br/> molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at<br/> libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta <br/>nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer <br/> in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi <br/>ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
            <button className='large-btn'>Learn More</button>
            </div>
       

       
            <div className='right-container'>
            <img src='pana.png' alt='pana.png'></img>
            </div>

        </div>



        <div className='card-main'>

    <div className='card-heading'>
        <p className='second-heading line-hight'>Caring is the new marketing</p>
        <p className='text card-text'>The Nexcent blog is the best place to read about the latest membership insights,<br/> trends and more. See who's joining the community, read about how our community<br/> are increasing their membership income and lot's more.</p>
    </div>

    <div className='card-inner'>


    {data.map((data)=>{
            return(
            <div key={data.Id} className='card-img'>
                <img src={data.image} alt=""/> 
                <div className='btn-section'>
                    
                <div  className='desc-heading'>{data.heading}</div> 
                <button className='card-btn'>Readmore &rarr;</button>
                </div>
                </div>
               
            )
        })}
       
    </div>
      
    </div>

        <div className='banner'>
         

          <p className='third-text'>Pellentesque suscipit<br/> fringilla libero eu.</p>
          <button className='large-btn'>Get a Demo &rarr;</button>
        </div>

      </div>
    </div>
  )
}

export default Home
