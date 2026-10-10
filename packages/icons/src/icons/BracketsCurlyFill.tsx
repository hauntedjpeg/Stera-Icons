import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsCurlyFillProps = Omit<IconBaseProps, 'children'>;

const BracketsCurlyFill = memo(
  forwardRef<SVGSVGElement, BracketsCurlyFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 2.75c.69 0 1.25.56 1.25 1.25S8.69 5.25 8 5.25H6.78c-.3 0-.53.24-.53.53v2.2c0 1.57-.67 3.01-1.77 4.02 1.1 1 1.77 2.45 1.77 4.02v2.2c0 .3.24.53.53.53H8c.69 0 1.25.56 1.25 1.25S8.69 21.25 8 21.25H6.78c-1.67 0-3.03-1.36-3.03-3.03v-2.2c0-1.3-.86-2.45-2.1-2.82-.54-.16-.9-.65-.9-1.2s.36-1.04.9-1.2c1.24-.37 2.1-1.52 2.1-2.82v-2.2c0-1.67 1.36-3.03 3.03-3.03zM17.22 2.75c1.67 0 3.03 1.36 3.03 3.03v2.2c0 1.3.86 2.45 2.1 2.82.54.16.9.65.9 1.2s-.36 1.04-.9 1.2c-1.24.37-2.1 1.52-2.1 2.82v2.2c0 1.67-1.36 3.03-3.03 3.03H16c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25h1.22c.3 0 .53-.24.53-.53v-2.2c0-1.57.67-3.01 1.77-4.02-1.1-1-1.77-2.45-1.77-4.02v-2.2c0-.3-.24-.53-.53-.53H16c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25z" />
    </IconBase>
  ))
);

BracketsCurlyFill.displayName = 'BracketsCurlyFill';

// Triple export pattern
export { BracketsCurlyFill, BracketsCurlyFill as BracketsCurlyFillIcon, BracketsCurlyFill as SiBracketsCurlyFill };
export default BracketsCurlyFill;
export type { BracketsCurlyFillProps };
