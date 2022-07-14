import React from 'react';
import './ReviewOne.css'

function ReviewOne() {
  return (
    <div>
      <section className="relative pt-10 pb-32 overflow-hidden bg-white">
        <div className="container mx-auto px-4">
          <h2
            className="mb-5 max-w-2xl mx-auto text-[36px]	text-center text-gray-900">12k+
            Happy Clients</h2>
          <p className="mb-16 text-base max-w-md mx-auto text-center text-gray-600">Read about our service feedback from our valued customers</p>
          <div className="flex flex-wrap -m-5">
            <div className="w-full md:w-1/3 p-5">
              <div
                className="h-full p-0.5 transform hover:-translate-y-3 rounded-10 transition ease-out duration-1000">
                <div className="h-full px-7 py-8 bg-slate-100 rounded-lg">
                  <img className="mb-8" src="https://shuffle.dev/gradia-assets/images/testimonials/avatar.png" alt="" />
                    <p className="mb-8 text-lg text-gray-900">&ldquo;Wow, it was a marvellous journey! This time, we were touring Everest. Everest is special for us. This is where we visited Nepal for our first tour. We remember that good memories from that trek. Thanks for them, we were able to visit this lovely area and memories.&rdquo;</p>
                    <h3 className="mb-1.5 font-heading font-bold text-lg text-gray-900">Darrell Steward</h3>
                    <p className="text-sm text-gray-600">Product Designer</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-5">
              <div
                className="h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 shadow-5xl transition ease-out duration-1000">
                <div className="h-full px-7 py-8 bg-slate-100 rounded-lg">
                  <img className="mb-8" src="https://shuffle.dev/gradia-assets/images/testimonials/avatar2.png" alt="" />
                    <p className="mb-8 text-lg text-gray-900">&ldquo;Thanks for this wonderful experience, we had a good time! Everything was seen: experienced guidance, tea houses, and all the essential permissions. We always felt safe and definitely would like to book a trip with this agency! Thanks again.&rdquo;</p>
                    <h3 className="mb-1.5 font-heading font-bold text-lg text-gray-900">Ronald Richards</h3>
                    <p className="text-sm text-gray-600">Software Engineer</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-5">
              <div
                className="h-full p-0.5 bg-gradient-cyan transform hover:-translate-y-3 rounded-10 transition ease-out duration-1000">
                <div className="h-full px-7 py-8 bg-slate-100 rounded-lg">
                  <img className="mb-8" src="https://shuffle.dev/gradia-assets/images/testimonials/avatar3.png" alt="" />
                    <p className="mb-8 text-lg text-gray-900">&ldquo; was a great experience for me. My friend Buddhi has arranged everything on very short notice. You will find their service exceptional from others. The best part was their describing the details.&rdquo;</p>
                    <h3 className="mb-1.5 font-heading font-bold text-lg text-gray-900">Darrell Steward</h3>
                    <p className="text-sm text-gray-600">BusinessMan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ReviewOne;