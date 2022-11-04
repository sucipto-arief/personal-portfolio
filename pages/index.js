/* eslint-disable @next/next/no-img-element */
import Layout from '../components/Layout'

export default function Home({ title }) {
  return (
    <Layout title='Home page'>
      <div>
        <div className='wrapper'>
          {/* hero */}
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
              <img src="https://placeimg.com/260/400/arch" className="max-w-sm rounded-lg shadow-2xl" alt='props' />
              <div>
                <h1 className="text-5xl font-bold">Box Office News!</h1>
                <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
          {/* card sections */}
          <div className='justify-center items-center'>
            <div className='justify-items-center py-4 grid xl:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-3'>
              <div className="card w-96 glass">
                <figure><img src="https://placeimg.com/400/225/arch" alt="car!" /></figure>
                <div className="card-body">
                  <h2 className="card-title">Life hack</h2>
                  <p>How to park your car at your garage?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn now!</button>
                  </div>
                </div>
              </div>
              <div className="card w-96 glass">
                <figure><img src="https://placeimg.com/400/225/arch" alt="car!" /></figure>
                <div className="card-body">
                  <h2 className="card-title">Life hack</h2>
                  <p>How to park your car at your garage?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn now!</button>
                  </div>
                </div>
              </div>
              <div className="card w-96 glass">
                <figure><img src="https://placeimg.com/400/225/arch" alt="car!" /></figure>
                <div className="card-body">
                  <h2 className="card-title">Life hack</h2>
                  <p>How to park your car at your garage?</p>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">Learn now!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
