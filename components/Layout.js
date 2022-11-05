import Head from 'next/head'
import Link from 'next/link'
import { FaInstagram, FaBehanceSquare, FaDribbbleSquare, FaYoutubeSquare } from 'react-icons/fa'

export default function Layout({ title, children }) {
    return (
        <>
            <Head>
                <title>{title ? title + " cipsite.net" : "cipsite.net"}</title>
                <meta name="description" content="IT consultant" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='flex min-h-screen flex-col justify-between bg-neutral-50'>
                <header className=''>
                    <nav className='navbar bg-transparent justify-between px-4'>
                        <Link href={'/'} className='text-xl p-2 ml-4 font-bold'>
                            Logo
                        </Link>
                        <div>
                            <Link href={'/about'} className='link link-hover p-2 mr-2 font-bold'>about.</Link>
                            <Link href={'/contact'} className='link link-hover p-2 mr-2 font-bold'>contact.</Link>
                            <Link href='https://instagram.com' className='link link-hover p-2 mr-2'><FaInstagram size={24} /></Link>
                        </div>
                    </nav>
                </header>
                <main>{children}</main>
            </div>
            <footer>
                <div className="footer p-10 bg-base-300 text-base-content">
                    <div>
                        <span className="footer-title">Services</span>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Photograph</a>
                    </div>
                    <div>
                        <span className="footer-title">Company</span>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Project</a>
                    </div>
                    <div>
                        <span className="footer-title">Social</span>
                        <div className="grid grid-flow-col gap-4">
                            <Link href='https://behance.com'><FaBehanceSquare size={24} /></Link>
                            <Link href='https://dribbble.com'><FaDribbbleSquare size={24} /></Link>
                            <Link href='https://youtube.com'><FaYoutubeSquare size={24} /></Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
