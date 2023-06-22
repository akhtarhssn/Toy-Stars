const Testimonials = () => {
  return (
    <div className="mb-16 p-5">
      <div className="text-center">
        {" "}
        <h2 className="text-3xl md:text-5xl font-black font-Nunito">
          Testimonials
        </h2>
        <p>See what our customers are saying about us</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-20">
        <div className="bg-[#EBECEF] rounded-md border hover:shadow-2xl duration-300">
          <div className="object-cover object-center -translate-y-10 flex justify-center">
            <img
              src="https://images.pexels.com/photos/2078467/pexels-photo-2078467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Review Item 1"
              className="h-20 w-20 rounded-full border-[6px] border-white"
            />
          </div>
          <div className="px-10 pb-10 pt-0">
            <p>
              I had an amazing experience shopping at your store. The quality of
              the products exceeded my expectations, and the customer service
              was exceptional. The staff was knowledgeable, friendly, and went
              above and beyond to assist me in finding the perfect items. I
              highly recommend your store to anyone looking for top-notch
              products and a fantastic shopping experience. I`ll definitely be a
              repeat customer!
            </p>
            <div className="text-center my-4">
              <h6 className="text-xl font-bold font-Nunito text-mediumPurple">
                John Doe
              </h6>
              <p>Co-Founder xyz</p>
            </div>
          </div>
        </div>
        <div className="bg-[#EBECEF] rounded-md border hover:shadow-2xl hover:-translate-y-1 duration-300">
          <div className="object-cover object-center -translate-y-10 flex justify-center">
            <img
              src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Review Item 1"
              className="h-20 w-20 rounded-full border-[6px] border-white"
            />
          </div>
          <div className="px-10 pb-10 pt-0">
            <p>
              Wow! I am absolutely thrilled with my recent purchase from your
              store. The product arrived promptly and was exactly as described.
              The attention to detail and craftsmanship are remarkable. Not only
              am I impressed with the quality, but the customer service I
              received was outstanding. The team was responsive, helpful, and
              genuinely cared about ensuring my satisfaction.
            </p>
            <div className="text-center my-4">
              <h6 className="text-xl font-bold font-Nunito text-mediumPurple">
                Elon Musk
              </h6>
              <p>CEO xyz</p>
            </div>
          </div>
        </div>
        <div className="bg-[#EBECEF] rounded-md border hover:shadow-2xl hover:-translate-y-1 duration-300">
          <div className="object-cover object-center -translate-y-10 flex justify-center">
            <img
              src="https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Review Item 1"
              className="h-20 w-20 rounded-full border-[6px] border-white"
            />
          </div>
          <div className="px-10 pb-10 pt-0">
            <p>
              I had an amazing experience shopping at your store. The quality of
              the products exceeded my expectations, and the customer service
              was exceptional. The staff was knowledgeable, friendly, and went
              above and beyond to assist me in finding the perfect items. I
              highly recommend your store to anyone looking for top-notch
              products and a fantastic shopping experience. I`ll definitely be a
              repeat customer!
            </p>
            <div className="text-center my-4">
              <h6 className="text-xl font-bold font-Nunito text-mediumPurple">
                Bill Gates
              </h6>
              <p>Founder xyz</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
