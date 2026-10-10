import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowBigUpBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const ArrowBigUpBoldDuotone = memo(
  forwardRef<SVGSVGElement, ArrowBigUpBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M15 13.5c0 .55.45 1 1 1h1V18c0 1.66-1.34 3-3 3h-4c-1.66 0-3-1.34-3-3v-3.5h1c.55 0 1-.45 1-1V18c0 .55.45 1 1 1h4c.55 0 1-.45 1-1z" opacity={.4} />
        <path d="M10.4 3.68c.89-.88 2.31-.88 3.2 0l8.25 8.26c.95.94.28 2.56-1.06 2.56H16c-.55 0-1-.45-1-1s.45-1 1-1h3.59l-7.41-7.4c-.1-.1-.26-.1-.36 0l-7.4 7.4H8c.55 0 1 .45 1 1s-.45 1-1 1H3.2c-1.33 0-2-1.62-1.05-2.56z" />
    </IconBase>
  ))
);

ArrowBigUpBoldDuotone.displayName = 'ArrowBigUpBoldDuotone';

// Triple export pattern
export { ArrowBigUpBoldDuotone, ArrowBigUpBoldDuotone as ArrowBigUpBoldDuotoneIcon, ArrowBigUpBoldDuotone as SiArrowBigUpBoldDuotone };
export default ArrowBigUpBoldDuotone;
export type { ArrowBigUpBoldDuotoneProps };
