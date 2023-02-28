import Link from 'next/link';
const CvGrid = () => {
    return (
        <>

            <div className="test text-left">
                <div className="container">
                    <div className="grid grid-cols-12 sm:gap-8">
                        <div className="col-span-12 lg:col-span-4 mt-7 sm:mt-0 first:mt-0">
                            <div className="p-5 sm:p-10 bg-[#0B51EE] dark:bg-blue-50 rounded-xl">
                                <div className=" mb-5 w-[90px] h-[90px] flex items-center justify-center text-center leading-[90px] bg-gray-500 rounded-lg">
                                    <img src="	https://bunzo.vuejstemplate.com/images/icons/open-platform.png" alt="icon" />
                                </div>
                                <h4 className="mb-4">Open Platform</h4>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry&apos;s standard dummy text ever since the 1500s when an unknown printer took galley type and scrambled.</p>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry&apos;s standard.</p>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-8 mt-7 sm:mt-0 first:mt-0">
                            <div className="p-5 sm:p-10 bg-[#0B51EE] dark:bg-blue-50 rounded-xl">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="content">
                                        <div className=" mb-5 w-[90px] h-[90px] text-center flex items-center justify-center leading-[90px] bg-gray-500 rounded-lg">
                                            <img src="	https://bunzo.vuejstemplate.com/images/icons/digital-publishing.png" alt="icon" className="mr-2" />
                                        </div>
                                        <h4 className="mb-4">Digital Publishing</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry&apos;s standard dummy text ever since the 1500s when an unknown printer took galley type and scrambled.</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been the industry&apos;s standard.</p>
                                    </div>
                                    <div className="image-holder">
                                        <div className="relative">
                                            <img src="	https://bunzo.vuejstemplate.com/images/banners/about-ex-share.jpg" alt="image" className="w-full" />
                                            <div className="absolute bottom-7 left-0 right-0 text-center">
                                                <Link href="/contact">
                                                    <a>
                                                        <button className="bg-blue-800 px-5 py-4 font-medium rounded-lg inline-flex items-center gap-2 text-white hover:text-white hover:bg-blue-900 transition-all">
                                                            Get Connected

                                                            {/* <RightArrow className="pt-1" /> */}
                                                        </button>
                                                    </a>

                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:flex lg:justify-between">
                {/* Image */}
                <div className="lg:w-[55%]">
                    <div className="relative">
                        {/* <MeInstrustration /> */}
                        <img className="w-full rounded-full" src="/assets/images/rasheed.jpg" alt="dashboard image" />
                        {/* <Image src="/static/doodles/about/about2.webp" width={450} height={450} alt="Intro Image" /> */}
                        {/* <img src="img/hero/3D_elements.png" alt="" className="animate-fly absolute top-0" /> */}
                    </div>
                </div>
                {/* Info */}
                <div className="py-20 lg:w-[45%] lg:pl-16 text-left">
                    <h2 className="text-jacarta-700 font-display mb-6 text-2xl text-white dark:text-bg">
                        DESIGN WHAT YOU WANT.
                    </h2>
                    <p>
                        Never compromise with quality
                    </p>
                    <p>Connecting all dots between Design and Code to build Real-Life projects.</p>
                    <p className="dark:text-bg mb-8 text-xl leading-normal">
                        I love designing websites and keep things as simple as possible. My goals is to focus on minimalism and conveying the message that you want to send.
                    </p>

                    <div className="flex space-x-4 sm:space-x-10">
                        <div className="flex space-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-white dark:fill-bg h-8 w-8 shrink-0">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
                            </svg>
                            <div>
                                <span className="font-display text-jacarta-700 block text-xl text-white dark:text-bg">11,2k+</span>
                                <span className="dark:text-jacarta-300 text-jacarta-700">Products launched</span>
                            </div>
                        </div>
                        <div className="flex space-x-4">
                            <svg className="text-teal-900 w-7 h-7" viewBox="0 0 24 24">
                                <polyline
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    points=" 8,5 8,1 16,1 16,5"
                                    strokeLinejoin="round"
                                />
                                <polyline
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    points="9,15 1,15 1,5 23,5 23,15 15,15"
                                    strokeLinejoin="round"
                                />
                                <polyline
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    points="22,18 22,23 2,23 2,18"
                                    strokeLinejoin="round"
                                />
                                <rect
                                    x="9"
                                    y="13"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeMiterlimit="10"
                                    width="6"
                                    height="4"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} className="fill-white dark:fill-bg h-8 w-8 shrink-0">
                                <path fill="none" d="M0 0h24v24H0z" />
                                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-.997-4L6.76 11.757l1.414-1.414 2.829 2.829 5.656-5.657 1.415 1.414L11.003 16z" />
                            </svg>
                            <div>
                                <span className="font-display text-jacarta-700 block text-xl text-white dark:text-bg">99,7%</span>
                                <span className="dark:text-jacarta-300 text-jacarta-700">Satisfaction Rate</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section py-20" id="contact">
                <div className="container">
                    <div className="lg:flex justify-center">
                        <div className="lg:w-2/3 mx-2">
                            <div className="text-center">
                                <h1 className="text-4xl font-semibold leading-[50px] tracking-wide text-transparent bg-clip-text bg-gradient-to-l from-pink-400 to-blue-600 mb-10">
                                    Let&apos;s keep in touch.
                                </h1>
                                <p className="text-base text-gray-400">Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Proin gravida nibh vel velit auctor Aenean sollicitudin, adipisicing elit sed lorem quis bibendum auctor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section py-10">
                <div className="container">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div>
                            { /* office Address */}
                            <div className="md:flex md:flex-row lg:justify-start lg:flex-col lg:text-left md:justify-between">
                                <div className="mb-6">
                                    <h1 className=" text-base font-medium mb-2">Email Address</h1>
                                    <a className="text-gray-400 text-sm font-medium" href="mailto:support.yourdomain@email.com">support.yourdomain@email.com</a>
                                </div>

                                <div className="mb-6">
                                    <h1 className=" text-base font-medium mb-2">Telephone</h1>
                                    <a className="text-gray-400 text-sm font-medium" href="tel:+(123) 456-7890">+(123) 456-7890</a>
                                </div>

                                <div className="mb-6">
                                    <h1 className=" text-base font-medium mb-2">Address</h1>
                                    <h1 className="text-gray-400 text-sm">09 Design Street, Downtown Victoria, Australia</h1>
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-2">
                            { /* Contact Form */}
                            <form method="post" name="myForm" id="myForm">
                                <p id="error-msg" />
                                <div id="simple-msg" />
                                <div className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        { /* Name Input */}
                                        <input type="text" name="name" id="name" className="border border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-blue-500 block w-full p-3" placeholder="Your Name" />

                                        { /* Email ID Input */}
                                        <input type="email" className="border border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-blue-500 block w-full p-3" id="email" name="email" placeholder="Your Email" />
                                    </div>

                                    { /* Subject Input */}
                                    <input type="text" name="subject" id="subject" placeholder="Subject" className="border border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-blue-500 block w-full p-3" />

                                    { /* Maessage Textarea Input */}
                                    <textarea className="border border-gray-300 text-gray-900 text-sm focus:ring-0 focus:border-blue-500 block w-full p-3" placeholder="Your Message" name="comments" id="comments" rows={3} spellCheck={false} />

                                    { /* Form Submit Button */}
                                    <div className="text-right">
                                        {/* <Button className="uppercase"> Send Message</Button> */}
                                    </div>
                                </div>
                            </form>
                            { /*end form*/}
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}