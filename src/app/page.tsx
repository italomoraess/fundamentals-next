import { Suspense } from 'react'
import GitHubProfile from './componentes/githubProfile'
import LongWait from './componentes/longWait'

export default async function Home() {
  return (
    <div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto ipsam
        dolorem fuga et tempore tenetur vel minus, ea sed totam iure cumque,
        autem possimus sunt deserunt doloribus perspiciatis ad fugit!
      </p>
      <Suspense fallback="loading component GitHubProfile">
        <GitHubProfile />
      </Suspense>

      <Suspense fallback="loading component LongWait">
        <LongWait />
      </Suspense>
    </div>
  )
}
