'use client'
import { Herosection } from '../components/Herosection'
import {Features} from '../components/Features'
import {Appkeyfeatures} from '../components/Appkeyfeatures'
import {Installapp} from '../components/Installapp'
import {DonationSection} from '../components/DonationSection'
import {Reviews} from '../components/Reviews'
import {Footer} from '../components/Footer'
export default function Home() {
  return (
    <main className="bg-white">
   <Herosection/>
   <Features/>
   <Appkeyfeatures/>
   <Installapp/>
   <DonationSection/>
   <Reviews/>
   <Footer/>
    </main>
  );
}
