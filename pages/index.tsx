import type { NextPage } from 'next'
import Link from 'next/link'
import ButtonLoginSuap from '../src/Component/ButtonLoginSuap/Index'

const Home: NextPage = () => {

  return (
    <>
      <div className="content">
        <ButtonLoginSuap/>
        
        <Link href={"/dashboard"}>
          Dashboard
        </Link>
      </div>
    </>
  )
}

export default Home
