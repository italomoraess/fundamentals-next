export default async function LongWait() {
  await new Promise((resolve) => setTimeout(resolve, 5000))

  return <h1>Component wait</h1>
}
