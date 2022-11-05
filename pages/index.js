/* eslint-disable @next/next/no-img-element */
import Layout from '../components/Layout'

export default function Home({ title }) {
  return (
    <Layout title='Home page'>
      <div>
        {/* first content */}
        <div className='first-content'>
          <div className='min-h-screen relative flex items-center'>
            <div className='w-full h-full bg-slate-700 absolute z-10'>
            </div>
            <div className='w-2/3 h-full bg-slate-800 absolute z-20'>
            </div>
            <div className='w-2/3 h-2/3 bg-yellow-200 absolute z-30 left-24 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 hover:z-50'>
              <h1 className='font-bold'>PHOTO2</h1>
            </div>
            <div className='w-2/3 h-2/3 bg-yellow-500 absolute z-40 left-32 top-44 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300'>
              <h1 className='font-bold'>PHOTO1</h1>
            </div>
          </div>
        </div>
        {/* second content */}
        <div className='second-content'>
          <div className='min-h-screen relative flex items-center'>
            <div className='bg-pink-300 w-full h-full duration-500 absolute z-10'>
              <div className='top-0 right-0 w-1/3 h-2/3 absolute z-20 text-center'>
                <h1 className='font-bold'>HIGHLIGHT</h1>
              </div>
              <div className='w-2/3 h-2/3 bg-yellow-400 absolute z-20 text-center'>
                <h1 className='font-bold'>CONTENT</h1>
              </div>
            </div>
            <div className='w-1/3 h-1/3 bg-slate-500 absolute z-30 bottom-0 right-0'></div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
