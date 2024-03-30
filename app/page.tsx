import Appbar from '@/components/Appbar'
import Appbody from '@/components/Appbody'
import { useSession } from 'next-auth/react';


export default async function(){
  return <div>
    <Appbody />
  </div>
}