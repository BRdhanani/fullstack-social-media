let Configuration = {}
switch (process.env.REACT_APP_NODE_ENV) {
  case 'test':
    Configuration = {
      ROUTE: process.env.REACT_APP_API_ROUTE,
    }
    break
  default:
    Configuration = {
      ROUTE: 'http://localhost:5000/api/v1',
    }
}
module.exports = { Configuration }
