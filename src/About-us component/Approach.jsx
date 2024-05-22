import React from 'react'

const Approach = () => {
    return (
        <div style={{ background: "#49228c7d", }} className='mt-24'>
            <div className='container'>
                <div className='p-4 md:p-9'>
                    <div className='border-2 border-white py-12 xl:px-44 px-9 text-white'>

                        <div>

                            <div className='text-4xl font-bold'>Our Approach</div>
                            <div className='mt-6 text-gray-200'>Over the years, Learner’s has evolved its engagement with the government to a two-pronged approach towards education system transformation.</div>

                        </div>

                        <div className='grid grid-cols-1 xl:grid-cols-2 gap-9 gap-y-24 mt-9'>

                            <div className='flex flex-col items-center' >

                                <img src="about img/aone.png" className='w-[200px]' alt="" />

                                <div className=' underline text-center mt-6'>Excellence in Government Schools</div>

                                <div className='text-center mt-4 text-gray-200'>
                                    Creating excellence in government schools to improve the quality of education offered in public schools in India
                                </div>

                                <div className='inline-block px-6 py-3  bg-white  rounded-xl mt-9 text-black'>
                                    Explore More
                                </div>


                            </div>


                            <div className='flex flex-col items-center' >

                                <img src="about img/atwo.png" className='w-[225px]' alt="" />

                                <div className=' underline text-center mt-6'>System Reform</div>

                                <div className='text-center mt-4 text-gray-200'>
                                    Long and deep engagement with Governments for System Capacity Building
                                </div>

                                <div className='inline-block px-6 py-3  bg-white  rounded-xl mt-9 text-black'>
                                    Explore More
                                </div>


                            </div>



                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Approach
