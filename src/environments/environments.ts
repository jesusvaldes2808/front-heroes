const server = {
  protocol: 'http'
}
export const environments = {
  production: false,
  urlBase: `${server.protocol}://localhost:8081/api/v1/superhero`,
  urlBackend: `${server.protocol}://localhost:8081/api/v1`
}
