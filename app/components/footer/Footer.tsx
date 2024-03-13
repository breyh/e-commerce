import React from 'react'
import Container from '../container/Container'
import FooterList from './FooterList'
import Link from 'next/link'
import dayjs from 'dayjs'
import { MdFacebook } from 'react-icons/md';
import { AiFillTwitterCircle, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

const Footer = () => {
    const lorem = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti voluptate quia cupiditate voluptatibus laborum, exercitationem beatae placeat soluta ipsa, laudantium enim explicabo architecto, laboriosam error quis temporibus! Placeat, dignissimos commodi.'
    const facebookLink = process.env.FACEBOOK_LINK || "#"
    const twitterLink = process.env.TWITTER_LINK || "#"
    const instagramLink = process.env.INSTAGRAM_LINK || "#"
    const youtubeLink = process.env.YOUTUBE_LINK || "#"
    return (
        <div className='bg-teal-700 text-teal-100 text-sm mt-16'>
            <Container>
                <div className='flex flex-col md:flex-row justify-between pt-16 pb-8'>
                    <FooterList>
                        <h3 className='text-base font-bold mb-2'>Categories</h3>
                        <Link href="#">Phones</Link>
                        <Link href="#">Laptops</Link>
                        <Link href="#">Desktops</Link>
                        <Link href="#">Tvs</Link>
                        <Link href="#">Accessories</Link>
                    </FooterList>
                    <FooterList>
                        <h3 className='text-base font-bold mb-2'>Customer Service</h3>
                        <Link href="#"> Contact us </Link>
                        <Link href="#"> Shipping Policy </Link>
                        <Link href="#"> Returns & exchanges </Link>
                        <Link href="#"> Watches </Link>
                        <Link href="#"> FAQs </Link>
                    </FooterList>
                    <div className='w-full md:w-1/3 mb-6 mb:mb-0'>
                        <h3 className='text-base font-bold mb-2'>About us</h3>
                        <p>{lorem}</p>
                        <p>&copy; {dayjs().year()} {process.env.BRAND}. All rights reserved</p>
                    </div>
                    <FooterList>
                        <h3 className='text-base font-bold mb-2'>Follos us</h3>
                        <div className='flex gap-2'>
                            <Link href={facebookLink}> <MdFacebook size={24} /> </Link>
                            <Link href={twitterLink}> <AiFillTwitterCircle size={24} /> </Link>
                            <Link href={instagramLink}> <AiFillInstagram size={24} /> </Link>
                            <Link href={youtubeLink}> <AiFillYoutube size={24} /> </Link>
                        </div>
                    </FooterList>
                </div>
            </Container>
        </div>
    )
}

export default Footer