export default {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          // Optimize path data with reduced precision
          convertPathData: {
            floatPrecision: 2,
            transformPrecision: 2,
            // Keep curves as curves: an arc radius rounded to 2 decimals
            // no longer fits its endpoints and shifts full circles sideways
            makeArcs: false,
          },
          // Clean up numeric values
          cleanupNumericValues: {
            floatPrecision: 2,
          },
        },
      },
    },
    {
      name: 'removeDimensions',
    },
    {
      name: 'removeXMLNS',
    },
    // Remove fill attributes from paths/circles so they inherit
    // fill from the parent <svg> element set by IconBase
    {
      name: 'removeAttrs',
      params: {
        attrs: ['fill'],
        elemSeparator: ',',
        preserveCurrentColor: false,
      },
    },
  ],
};
