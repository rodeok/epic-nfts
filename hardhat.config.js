require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.1',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/gSlGNtWUZEWmeyO2XiyR5zGRK0Zs1G3z',
      accounts: ['70fb3a16b34b5746260a63454aefde60c3f483c6893765aaafffd9e1a993ce9b'],
    },
  },
}