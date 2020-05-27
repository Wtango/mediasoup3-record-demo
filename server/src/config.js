// Config file for mediasoup elements

const os = require('os');

module.exports = Object.freeze({
  numWorkers: 2,
  worker: {
    logLevel: 'debug',
    logTags: [
      'rtp',
      'srtp',
      'rtcp',
    ],
    rtcMinPort: 40000,
    rtcMaxPort: 40005
  },
  router: {
    mediaCodecs: [
      {
        kind: 'audio',
        mimeType: 'audio/opus',
        clockRate: 48000,
        channels: 2
      },
      {
        kind: 'video',
        mimeType: 'video/VP8',
        clockRate: 90000
      },
    ]
  },
  webRtcTransport: {
    listenIps: [ { ip: '100.98.137.125', announcedIp: undefined } ],
    enableUdp: true,
    enableTcp: true,
    preferUdp: true,
    maxIncomingBitrate: 1500000
  },
  plainRtpTransport: {
    listenIp: '127.0.0.1',
    rtcpMux: true,
    comedia: false 
  }
});
