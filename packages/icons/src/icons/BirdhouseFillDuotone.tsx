import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BirdhouseFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BirdhouseFillDuotone = memo(
  forwardRef<SVGSVGElement, BirdhouseFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11.59 4.54c.23-.21.59-.21.83 0l7.2 6.4-1.56 8.19H5.94l-1.56-8.19zm.4 5.46c-1.37 0-2.5 1.12-2.5 2.5S10.63 15 12 15c1.39 0 2.5-1.12 2.5-2.5S13.39 10 12 10" clipRule="evenodd" opacity={.4} />
        <path d="M12 10c1.38 0 2.5 1.12 2.5 2.5S13.38 15 12 15s-2.5-1.12-2.5-2.5S10.62 10 12 10M19 19.12c.48 0 .87.4.87.88s-.39.87-.87.87H5c-.48 0-.88-.39-.88-.87s.4-.88.88-.88z" />
        <path d="M10.42 3.23c.9-.8 2.26-.8 3.16 0l8 7.12c.36.32.4.87.07 1.23-.32.36-.87.4-1.23.07l-8-7.11c-.24-.21-.6-.21-.83 0l-8 7.11c-.37.32-.92.3-1.24-.07-.33-.36-.3-.91.07-1.23z" />
    </IconBase>
  ))
);

BirdhouseFillDuotone.displayName = 'BirdhouseFillDuotone';

// Triple export pattern
export { BirdhouseFillDuotone, BirdhouseFillDuotone as BirdhouseFillDuotoneIcon, BirdhouseFillDuotone as SiBirdhouseFillDuotone };
export default BirdhouseFillDuotone;
export type { BirdhouseFillDuotoneProps };
