/* eslint-disable @next/next/no-img-element */
import Layout from '../components/Layout'

export default function Home({ title }) {
  return (
    <Layout title='Home page'>
      <div>
        <div className='box'>
          <div className='min-h-screen flex justify-between'>
            <div className='w-2/3 bg-slate-700'>
            </div>
            <div className='w-1/3 bg-slate-800'>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
