import React from "react";
import Carousel from "react-multi-carousel";
import Review from "../../components/Review";
import useReviews from "../../hooks/useReviews";

const ReviewSec = () => {
  const [reviews, setReviews] = useReviews();
  return (
    <div>
      <div className="flex flex-col lg:flex-row justify-center items-center py-20 bg-slate-400">
        <div className="w-full lg:w-2/5">
          <h1 className="text-5xl font-bold text-primary text-center mb-20 lg:mb-0">
            Our Client’s Speak
          </h1>
        </div>
        <div className="w-full md:w-3/5">
          <Carousel
            additionalTransfrom={0}
            arrows
            autoPlaySpeed={3000}
            centerMode={false}
            className=""
            containerclassName="container"
            dotListclassName=""
            draggable
            focusOnSelect={false}
            infinite
            itemclassName=""
            keyBoardControl
            minimumTouchDrag={80}
            partialVisible
            renderButtonGroupOutside={false}
            renderDotsOutside={false}
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 3,
                partialVisibilityGutter: 0,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 0,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: -40,
              },
            }}
            showDots={false}
            sliderclassName=""
            slidesToSlide={1}
            swipeable
          >
            {
              reviews.map(review=>{
                return <Review key={review._id} onePersonReview={review}/>
              })
            }
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default ReviewSec;
