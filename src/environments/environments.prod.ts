const server = {
  protocol: 'http'
}
export const environments = {
  production: true,
  urlBase: `${server.protocol}://172.30.1.230:8081/api/v1/superhero`,
  urlBackend: `${server.protocol}://172.30.1.230:8081/api/v1`
}
