import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CursorClickRegularProps = Omit<IconBaseProps, 'children'>;

const CursorClickRegular = memo(
  forwardRef<SVGSVGElement, CursorClickRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M8.81 10.69c-.37-1.12.65-2.2 1.77-1.9l.1.02 10.06 3.35c1.37.46 1.34 2.42-.05 2.83l-4.4 1.3-1.3 4.4c-.4 1.39-2.37 1.42-2.83.05zm4.76 9.52 1.4-4.74.02-.09q.16-.31.48-.42l4.74-1.4-9.96-3.31z" clipRule="evenodd" />
        <path d="M5.12 12.8c.3-.3.77-.3 1.06 0 .3.29.3.76 0 1.05l-1.36 1.36c-.29.3-.76.3-1.06 0-.29-.29-.29-.77 0-1.06zM2.28 7.56c.1-.4.51-.64.91-.53l1.86.5c.4.1.64.51.53.91s-.52.64-.92.53l-1.85-.5c-.4-.1-.64-.51-.53-.91M14.15 3.76c.3-.29.77-.29 1.06 0 .3.3.3.77 0 1.06l-1.35 1.36c-.3.3-.77.3-1.07 0-.29-.3-.29-.77 0-1.06zM7.56 2.28c.4-.11.8.13.91.53l.5 1.85c.1.4-.13.81-.53.92s-.81-.13-.92-.53l-.5-1.86c-.1-.4.14-.8.54-.91" />
    </IconBase>
  ))
);

CursorClickRegular.displayName = 'CursorClickRegular';

// Triple export pattern
export { CursorClickRegular, CursorClickRegular as CursorClickRegularIcon, CursorClickRegular as SiCursorClickRegular };
export default CursorClickRegular;
export type { CursorClickRegularProps };
