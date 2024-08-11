import Link from "next/link"

const NotFound = () => {
  return (
    <div>
        <h1>This page cannot be found</h1>
        <Link href={'/'}>Got to home page</Link>
    </div>
  )
}

export default NotFound