import React from 'react'
import Crud from './Crudperfrome/Crud'
import File from './Crudperfrome/File'
import Center from './Show/Center'
import Counter from './Show/Counter'
import Fotter from './Show/Fotter'
import SUb from './Show/SUb'
import Top from './Show/Top'

export default function Home(props) {
  return ( 
    <div>
        <Crud/>
        <File/>
        <Counter/>
    <Top heading="FEATURE 4" subHeading1="Desgined with the" subHeading2=" applicant in mind." subHeading3="SaaS=Flow is built for requriters and hiring mangers who" 
         subHeading4="care about their applicants" subHeading5="page builder:"/>    
    <Center />
    <Fotter />
    <SUb />
    </div>
  )
}
