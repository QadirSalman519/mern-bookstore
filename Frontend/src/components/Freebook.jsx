import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from '../components/Cards';
import axios from "axios"
import { useEffect, useState } from 'react';

var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                initialSlide: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};

function Freebook() {
    const [book,setBook] = useState([])
    const appUrl = 'http://localhost:4000'
    useEffect(()=>{
        const getBook = async ()=>{
          try {
            const res = await axios.get(`${appUrl}/book`)
            setBook(res.data.filter((data) => data.category === "Free"))
          } catch (error) {
            console.log(error)
          }
        }
        getBook();
      },[])

    console.log(book);
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div>
                    <h1 className='font-semibold text-xl pb-2'>Free Offered Courses</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
                        et totam. Tempora amet atque expedita, quae corrupti totam sed
                        pariatur corporis at veniam est voluptas animi!
                    </p>
                </div>
                <div>
                    <div className="slider-container">
                        <Slider {...settings}>
                            {
                                book.map((item) => (
                                    <Cards item={item} key={item.id} />
                                ))
                            }
                        </Slider>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Freebook
