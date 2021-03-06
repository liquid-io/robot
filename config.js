module.exports = {
  host: '192.168.1.83', //mqtt broker
  port: '2048',
  worker: 'pi1', //must be unique when using multiple pis
  buttonPin: 'GPIO4',
  lightPin: 'GPIO7',

  machines: [
    {
      id: 0,
      ports: ['GPIO24', 'GPIO9', 'GPIO18'],
      pins: {}
    },
    {
      id: 1,
      ports : ['GPIO22', 'GPIO23', 'GPIO27'],
      pins: {}
    }
  ]
}