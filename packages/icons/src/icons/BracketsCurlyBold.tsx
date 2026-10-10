import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsCurlyBoldProps = Omit<IconBaseProps, 'children'>;

const BracketsCurlyBold = memo(
  forwardRef<SVGSVGElement, BracketsCurlyBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M8 3c.55 0 1 .45 1 1s-.45 1-1 1H6.78c-.43 0-.78.35-.78.78v2.2c0 1.6-.73 3.05-1.9 4.02 1.17.96 1.9 2.42 1.9 4.02v2.2c0 .43.35.78.78.78H8c.55 0 1 .45 1 1s-.45 1-1 1H6.78C5.25 21 4 19.75 4 18.22v-2.2c0-1.42-.93-2.66-2.28-3.06-.43-.13-.72-.52-.72-.96s.3-.83.72-.96C3.07 10.64 4 9.4 4 7.98v-2.2C4 4.25 5.25 3 6.78 3zM17.22 3C18.75 3 20 4.25 20 5.78v2.2c0 1.42.93 2.66 2.28 3.06.43.13.72.52.72.96s-.3.83-.72.96c-1.35.4-2.28 1.64-2.28 3.06v2.2c0 1.53-1.25 2.78-2.78 2.78H16c-.55 0-1-.45-1-1s.45-1 1-1h1.22c.43 0 .78-.35.78-.78v-2.2c0-1.6.73-3.06 1.9-4.02-1.17-.97-1.9-2.43-1.9-4.02v-2.2c0-.43-.35-.78-.78-.78H16c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

BracketsCurlyBold.displayName = 'BracketsCurlyBold';

// Triple export pattern
export { BracketsCurlyBold, BracketsCurlyBold as BracketsCurlyBoldIcon, BracketsCurlyBold as SiBracketsCurlyBold };
export default BracketsCurlyBold;
export type { BracketsCurlyBoldProps };
