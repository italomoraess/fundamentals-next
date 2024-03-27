export default async function GitHubProfile() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  const response = await fetch('https://api.github.com/users/italomoraess')
  const myUser = await response.json()

  return <pre>{JSON.stringify(myUser, null, 2)}</pre>
}
