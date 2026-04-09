import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BirdhouseFillProps = Omit<IconBaseProps, 'children'>;

const BirdhouseFill = memo(
  forwardRef<SVGSVGElement, BirdhouseFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="birdhouse-fill" {...props}>
      <path fillRule="evenodd" d="M10.42 3.23c.9-.8 2.26-.8 3.16 0l8 7.12a.88.88 0 0 1-1.16 1.3l-.8-.71-1.56 8.18H19a.88.88 0 0 1 0 1.75H5a.87.87 0 1 1 0-1.75h.94l-1.56-8.18-.8.71a.88.88 0 0 1-1.16-1.3zM12 10a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5" clipRule="evenodd" />
    </IconBase>
  ))
);

BirdhouseFill.displayName = 'BirdhouseFill';

// Triple export pattern (lucide-react style)
export { BirdhouseFill, BirdhouseFill as BirdhouseFillIcon, BirdhouseFill as SiBirdhouseFill };
export default BirdhouseFill;
export type { BirdhouseFillProps };
