import React from 'react'
import './phantomFooter.css'
import PhantomLogo from '../../assets/PhantomLogo.jpg'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const PhantomFooter = () => {
  return (
    <>
        <div className='phantom_footer_container'>
            <section className='phantom_footer_top'>
                <div className='phantom_footer_logo_container'>
                    {/* <img src={PhantomLogo} alt='logo'/> */}
                    {/* <svg class="css-1v7wsoy e18wg2hl3" fill="none" viewBox="0 0 108 93"><title>Logo Phantom</title><path d="M0.5 78.1789C0.5 90.2265 6.7065 93 13.1613 93C26.8155 93 37.077 80.6058 43.2007 70.8118C42.4559 72.9786 42.0422 75.1454 42.0422 77.2255C42.0422 82.946 45.1868 87.0196 51.3933 87.0196C59.9169 87.0196 69.0197 79.219 73.7367 70.8118C73.4056 72.0252 73.2401 73.1519 73.2401 74.192C73.2401 78.1789 75.3917 80.6924 79.7777 80.6924C93.5975 80.6924 107.5 55.124 107.5 32.7623C107.5 15.3411 99.0592 0 77.8743 0C40.6354 0 0.5 47.4967 0.5 78.1789ZM65.0476 30.8555C65.0476 26.5219 67.3647 23.4884 70.7575 23.4884C74.0677 23.4884 76.3848 26.5219 76.3848 30.8555C76.3848 35.1892 74.0677 38.3094 70.7575 38.3094C67.3647 38.3094 65.0476 35.1892 65.0476 30.8555ZM82.7568 30.8555C82.7568 26.5219 85.0739 23.4884 88.4668 23.4884C91.7769 23.4884 94.094 26.5219 94.094 30.8555C94.094 35.1892 91.7769 38.3094 88.4668 38.3094C85.0739 38.3094 82.7568 35.1892 82.7568 30.8555Z" fill="currentColor"></path></svg> */}
                    <svg class="" fill="none" viewBox="0 0 152 30">
                      <title>Logo Phantom</title>
                      <path 
                        d="M0 25.219C0 29.105 2.065 30 4.213 30c4.544 0 7.96-3.998 9.997-7.157-.248.698-.386 1.397-.386 2.069 0 1.845 1.047 3.159 3.112 3.159 2.837 0 5.866-2.517 7.436-5.229-.11.392-.165.755-.165 1.09 0 1.287.716 2.098 2.175 2.098 4.6 0 9.226-8.248 9.226-15.462 0-5.62-2.81-10.568-9.86-10.568C13.357 0 0 15.322 0 25.219ZM21.48 9.953c0-1.398.771-2.376 1.9-2.376 1.102 0 1.873.978 1.873 2.376s-.77 2.405-1.872 2.405c-1.13 0-1.9-1.007-1.9-2.405Zm5.894 0c0-1.398.77-2.376 1.9-2.376 1.101 0 1.872.978 1.872 2.376s-.77 2.405-1.872 2.405c-1.13 0-1.9-1.007-1.9-2.405ZM41.115 26.953h4.13v-3.775c0-1.985-.137-2.908-.936-4.725l.44-.224c1.323 3.048 3.278 4.25 5.316 4.25 3.277 0 5.893-2.908 5.893-7.41 0-4.305-2.396-7.464-5.838-7.464-2.038 0-4.048 1.174-5.37 4.222l-.44-.224c.55-1.202.935-2.404.935-3.55h-4.13v18.9Zm4.13-11.911c0-1.845 1.378-3.886 3.415-3.886 1.653 0 3.002 1.37 3.002 3.858 0 2.46-1.294 3.914-3.03 3.914-1.927 0-3.386-1.985-3.386-3.886ZM57.25 22.032h4.132V17.11c0-3.467 1.211-5.927 3.47-5.927 1.431 0 1.872.978 1.872 3.41v7.438h4.131v-8.108c0-4.418-1.57-6.32-4.572-6.32-3.056 0-4.048 2.098-5.232 4.502l-.44-.251c.605-1.51.77-2.46.77-3.803V3.327h-4.13v18.705ZM76.757 22.479c2.617 0 4.186-1.79 5.288-3.914l.468.251c-.44 1.007-.854 2.21-.854 3.216h4.049v-7.605c0-4.53-1.873-6.822-6.252-6.822-4.296 0-6.416 2.18-6.83 4.473l3.966.7c.138-1.203 1.102-2.014 2.644-2.014s2.423.783 2.423 1.734c0 .95-.908 1.398-3.332 1.426-3.58.056-6.224 1.37-6.224 4.166 0 2.292 1.79 4.389 4.654 4.389Zm-.55-4.641c0-2.265 3.442-.671 5.37-2.405v.532c0 1.985-1.763 3.41-3.415 3.41-.936 0-1.955-.39-1.955-1.537ZM87.56 22.032h4.13V17.11c0-3.467 1.212-5.927 3.47-5.927 1.432 0 1.873.978 1.873 3.41v7.438h4.131v-8.108c0-4.418-1.57-6.32-4.572-6.32-3.056 0-4.048 2.098-5.232 4.502l-.44-.251c.605-1.51.77-2.46.77-3.803h-4.13v13.98ZM112.328 22.088V18.62c-.882.307-3.333.838-3.333-1.202v-5.956h3.663v-3.41h-3.663V4.305l-4.158 1.258v2.488h-2.478v3.411h2.478l.028 6.291c0 4.67 4.103 5.34 7.463 4.334ZM120.988 22.479c4.185 0 7.38-3.243 7.38-7.465 0-4.194-3.195-7.41-7.38-7.41-4.186 0-7.408 3.216-7.408 7.41 0 4.222 3.222 7.465 7.408 7.465Zm-3.14-7.437c0-2.32 1.294-3.942 3.14-3.942 1.845 0 3.111 1.621 3.111 3.942 0 2.32-1.266 3.942-3.111 3.942-1.846 0-3.14-1.622-3.14-3.942ZM129.729 22.032h4.13V17.11c0-3.607 1.019-5.927 2.837-5.927 1.184 0 1.68.95 1.68 3.41v7.438h4.131V17.11c0-3.383 1.101-5.927 2.836-5.927 1.157 0 1.68 1.09 1.68 3.41v7.438h4.131v-8.108c0-4.446-1.432-6.32-4.241-6.32-2.919 0-4.076 2.014-4.847 4.446l-.468-.251c.413-1.454.165-2.237-.331-2.852-.716-.895-1.735-1.342-3.029-1.342-2.589 0-3.718 1.845-4.709 4.417l-.441-.28c.468-1.257.771-2.264.771-3.69h-4.13v13.98Z" 
                        fill="#3C315B">
                      </path>
                    </svg>
                </div>
                <div className='phantom_footer_top_line'></div>
                <div className='phantom_footer_top_icon_container'>
                    <div className='phantom_footer_top_icon'>
                    <FaXTwitter/>
                    </div>
                    <div className='phantom_footer_top_icon'>
                    <FaInstagram/>
                    </div>
                    <div className='phantom_footer_top_icon'>
                    <FaLinkedin/>
                    </div>
                    <div className='phantom_footer_top_icon'>
                    <FaFacebook/>
                    </div>
                </div>
            </section>
            <section className='phantom_footer_middle'>
                <p>
                    The purpose of this website is solely to display information regarding the products and services available on the Phantom.com App. It is not intended to offer access to any of such products and services. You may obtain access to such products and services on the Phantom.com App.
                </p>
                <p>
                    Please note that the availability of the products and services on the Phantom.com App is subject to jurisdictional limitations. Phantom.com may not offer certain products, features and/or services on the Phantom.com App in certain jurisdictions due to potential or actual regulatory restrictions.
                </p>
                <p>
                    Foris DAX MT Limited, a company incorporated in Malta with Company number (C88392) trading under the name Phantom.com” via the Phantom.com app is licensed as a Class 3 Virtual Financial Assets Service Provider by the Malta Financial Services Authority. Foris DAX MT Limited is authorised to provide the following VFA services: 1. execution of orders on behalf of other persons; 2. dealing on own account; 3. custodian or nominee services; and 4. transfer services to experienced and non-experienced investors.
                </p>
            </section>
            <section className='phantom_footer_bottom'>
                <div className='phantom_footer_bottom_left'>
                    <p>Copyright © 2018 - 2024 Phantom.com. All rights reserved.</p>
                </div>
                <div className='phantom_footer_bottom_right'>
                    <p>Privacy Notice</p>
                    <span></span>
                    <p>Status</p>
                    <span></span>
                    <p>Cookie Preferences</p>
                </div>
            </section>
        </div>
    </>
  )
}

export default PhantomFooter