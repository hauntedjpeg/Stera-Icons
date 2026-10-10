import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ArrowBigUpBoldProps = Omit<IconBaseProps, 'children'>;

const ArrowBigUpBold = memo(
  forwardRef<SVGSVGElement, ArrowBigUpBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.4 3.68c.89-.88 2.31-.88 3.2 0l8.25 8.26c.95.94.28 2.56-1.06 2.56H17V18c0 1.66-1.34 3-3 3h-4c-1.66 0-3-1.34-3-3v-3.5H3.2c-1.33 0-2-1.62-1.05-2.56zm1.78 1.41c-.1-.1-.26-.1-.36 0l-7.4 7.41H8c.55 0 1 .45 1 1V18c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-4.5c0-.55.45-1 1-1h3.59z" clipRule="evenodd" />
    </IconBase>
  ))
);

ArrowBigUpBold.displayName = 'ArrowBigUpBold';

// Triple export pattern
export { ArrowBigUpBold, ArrowBigUpBold as ArrowBigUpBoldIcon, ArrowBigUpBold as SiArrowBigUpBold };
export default ArrowBigUpBold;
export type { ArrowBigUpBoldProps };
