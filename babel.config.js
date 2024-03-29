module.exports = (api) => {
  api.cache(true)
  return {
    presets: [
      'next/babel',
      '@zeit/next-typescript/babel'
    ],
    plugins: [
      [
        'babel-plugin-styled-components',
        { ssr: true, displayName: true, preprocess: false },
      ],
      '@babel/proposal-class-properties',
      '@babel/proposal-object-rest-spread',
      ['transform-define', {
        'process.env.NODE_ENV': process.env.NODE_ENV
      }]
    ]
  }
}
