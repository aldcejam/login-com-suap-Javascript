import type { NextPage } from 'next'
import {DateSuap} from '../src/lib/DataSuap'


const Dashboard: NextPage = () => {
  
  const resourceResponse = DateSuap()

  return (
    <>
      <div className="content">
        <p>{resourceResponse.nome}</p>
      </div>
    </>
  )
}

export default Dashboard
