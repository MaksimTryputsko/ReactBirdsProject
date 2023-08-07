const { alias } = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@view': 'src/view',
    '@constans': 'src/constans',
    '@containers': 'src/containers',
    '@shared': 'src/shared',
    '@router': 'src/router',
    '@store': 'src/store',
    '@static': 'src/static',
    '@config': 'src/config',
  })(config)

  return config
}
