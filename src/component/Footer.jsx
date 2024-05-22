import React from 'react'

const Footer = () => {
    return (
        <div className='mt-32 bg-colorOne pt-24 text-gray-200 '>
            <div className='container'>
                <div className=' grid  grid-cols-1  lg:grid-cols-5  gap-9 gap-y-16'>
                    <div className='col-span-2 space-y-9 text-lg'>
                        <div>                    Our mission is to provide a free, world-class education to anyone, anywhere.
                        </div>

                        <div>Learner is a profit organization.</div>

                        <div className=' font-bold text-white'>www.learner.com</div>
                    </div>


                    <ul className='space-y-2'>
                        <div>
                            <li className='mb-8 text-xl text-white font-semibold'>About</li>
                        </div>

                        <li>News</li>
                        <li>Our Interns</li>
                        <li>Our Team</li>
                        <li>Cities</li>
                        <li>Our Specialists</li>
                        <li>Impact</li>
                        <li>Our Leadership</li>
                        <li>Our Supporters</li>
                        <li>Our Contributors</li>
                        <li>Our Finances</li>
                        <li>Careers</li>
                        <li>Internships</li>
                        <li>Cookies Preferences</li>
                    </ul>


                    <ul className='space-y-2'>
                        <div>
                            <li className='mb-8 text-xl text-white font-semibold'>Contact</li>
                        </div>

                        <li>Help Centre</li>
                        <li>Support Community</li>
                        <li>Share Your Story</li>
                        <li>Press</li>
                        <li>Business Profile</li>
                        <li>Donate</li>

                    </ul>

                    <ul className='space-y-2'>
                        <div>
                            <li className='mb-8 text-xl text-white font-semibold'>Courses</li>
                        </div>

                        <li>Math NCERT</li>
                        <li>Math Foundation</li>
                        <li>Science NCERT</li>
                        <li>All State Boards</li>
                        <li>Business Profile</li>
                        <li>Explore More</li>

                    </ul>
                </div>

                <div className='flex justify-end gap-9 mt-16 flex-wrap text-xs md:text-base'>
                    <div className=' underline'>Terms of Use</div>
                    <div className=' underline'>Privacy Policy</div>
                    <div className=' underline'>Cookie Notice</div>
                    <div className='ms-9'>2024 @Learner.Inc</div>

                </div>

            </div>
        </div>
    )
}

export default Footer
