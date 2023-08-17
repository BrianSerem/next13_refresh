import Repo from "@/app/components/Repo"
import RepoDirs from "@/app/components/RepoDirs"
import Link from "next/link"
import { Suspense } from "react"



const page = ({ params: { name } }) => {
  return (
    <div className='card'>
      <Link href='/code/repos' className="btn btn-back" > Back to Repositories </Link>
      <Suspense fallback={<div> Loading Repo...</div>}>
        < Repo name={name} />
      </Suspense>
      <Suspense fallback={<div> Loading directories...</div>}>
        < RepoDirs name={name} />
      </Suspense>

    </div>
  )
}

export default page
