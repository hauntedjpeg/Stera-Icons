import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BirdhouseFillProps = Omit<IconBaseProps, 'children'>;

const BirdhouseFill = memo(
  forwardRef<SVGSVGElement, BirdhouseFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.42 3.23c.9-.8 2.26-.8 3.16 0l8 7.12c.36.32.4.87.07 1.23-.32.36-.87.4-1.23.07l-.8-.71-1.56 8.18H19c.48 0 .87.4.87.88s-.39.87-.87.87H5c-.48 0-.88-.39-.88-.87s.4-.88.88-.88h.94l-1.56-8.18-.8.71c-.36.32-.91.3-1.23-.07-.33-.36-.3-.91.07-1.23zM12 10c-1.38 0-2.5 1.12-2.5 2.5S10.62 15 12 15s2.5-1.12 2.5-2.5S13.38 10 12 10" clipRule="evenodd" />
    </IconBase>
  ))
);

BirdhouseFill.displayName = 'BirdhouseFill';

// Triple export pattern
export { BirdhouseFill, BirdhouseFill as BirdhouseFillIcon, BirdhouseFill as SiBirdhouseFill };
export default BirdhouseFill;
export type { BirdhouseFillProps };
