import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';



const Testimonials = () => {
 
        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} className='test'>
    
    <Carousel.Item>
      <div className='testimonials d-block w-100 ' style={{minHeght:'400px' ,display:'flex' ,alignItems:'center',justifyContent:'center'}}>
      <h2 className="testimonial-text">" My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think "</h2>

      <div className="clh" style={{display:'flex' ,alignItems:'center' ,justifyContent:'center'}}>
    <img className="testimonial-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5axIvnTj7zhN8Hzz2SK4WdcBzhNsl1BMHhg60k-hE8Sk1Ow9Bc8tsImX_YddqPnENgbM&usqp=CAU" style={{objectFit:'cover',width:'80px',height:'80px'}} alt="lady-profile"/>
    <em style={{marginLeft:'20px'}}> - Rashmika, Bengaluru</em>
    </div>
    </div>
      </Carousel.Item>
    <Carousel.Item>
      <div className='testimonials d-block w-100 ' style={{ display:'flex' ,alignItems:'center',justifyContent:'center'}}>
      <h2 className="testimonial-text">" My dog used to be so lonely, but with TinDog's help, they've found the love of their life. I think "</h2>

      <div className="clh" style={{display:'flex' ,alignItems:'center' ,justifyContent:'center'}}>
    <img className="testimonial-image" src="https://st1.bollywoodlife.com/wp-content/uploads/2021/07/Anushka-Shetty.jpg?impolicy=Medium_Widthonly&w=350" alt="lady-profile" style={{objectFit:'cover',width:'80px',height:'80px'}} />
    <em style={{marginLeft:'20px'}}> - Beverly, Bengaluru</em>
    </div>
    </div>
      </Carousel.Item>
    <Carousel.Item>
      <div className='testimonials d-block w-100 ' style={{ display:'flex' ,alignItems:'center',justifyContent:'center'}}>
      <h2 className="testimonial-text" >" I no longer have to sniff other dogs for love. I've found the hottest Corgi on TinDog. Woof "</h2>

      <div className="clh" style={{display:'flex' ,alignItems:'center' ,justifyContent:'center'}}>
    <img className="testimonial-image" src={require("../images/dog-img.jpg")} alt="lady-profile" style={{objectFit:'cover',width:'80px',height:'80px'}} />
    <em style={{marginLeft:'20px'}}> - Oscar, Chennai</em>
    </div>
    </div>
      </Carousel.Item>
    <Carousel.Item>
      <div className='testimonials d-block w-100 ' style={{ display:'flex' ,alignItems:'center',justifyContent:'center'}}>
      <h2 className="testimonial-text">" I am Happy now, I've found the hottest Corgi on TinDog. Woof "</h2>

      <div className="clh" style={{display:'flex' ,alignItems:'center' ,justifyContent:'center'}}>
    <img className="testimonial-image" src='https://media.istockphoto.com/id/1398810303/photo/happy-dog-of-welsh-corgi-pembroke-breed-among-fallen-leaves-in-autumn.jpg?b=1&s=170667a&w=0&k=20&c=jklYfwJXKWHObS-kRUtN2k_A4-K6Co9NUri0qfth8us=' alt="lady-profile" style={{objectFit:'cover',width:'80px',height:'80px'}} />
    <em style={{marginLeft:'20px'}}> - Tom, Chennai</em>
    </div>
    </div>
      </Carousel.Item>

      
    </Carousel>





 
  )

}

export default Testimonials
