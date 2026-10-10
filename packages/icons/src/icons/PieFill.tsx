import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PieFillProps = Omit<IconBaseProps, 'children'>;

const PieFill = memo(
  forwardRef<SVGSVGElement, PieFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17 14.62c.69.55 1.55.88 2.5.88l.28-.01q.3-.02.56-.08l-1.04 2.93c-.36 1-1.3 1.66-2.36 1.66H7.06c-1.06 0-2-.66-2.36-1.66l-1.05-2.93q.42.09.85.09h.23q1.3-.11 2.27-.88c.69.55 1.55.88 2.5.88h.23q1.3-.11 2.27-.88c.69.55 1.55.88 2.5.88h.23q1.3-.11 2.27-.88" />
        <path fillRule="evenodd" d="M12 5c4.7 0 8.51 2.65 9.79 6.28l.05.18c.1.42.1.86-.12 1.23-.45.79-1.27 1.31-2.22 1.31-.77 0-1.46-.35-1.93-.9l-.57-.67-.57.67c-.47.55-1.16.9-1.93.9s-1.46-.35-1.93-.9l-.57-.67-.57.67c-.47.55-1.16.9-1.93.9s-1.46-.35-1.93-.9L7 12.43l-.57.67c-.47.55-1.16.9-1.93.9-.94 0-1.77-.52-2.22-1.3-.24-.43-.23-.95-.06-1.42l.12-.33C3.68 7.6 7.21 5.16 11.56 5zm-1.3 2.8c-.38-.4-1.02-.4-1.4 0l-1 1c-.4.38-.4 1.02 0 1.4.38.4 1.02.4 1.4 0l1-1c.4-.38.4-1.02 0-1.4m4 0c-.38-.4-1.02-.4-1.4 0-.4.38-.4 1.02 0 1.4l1 1c.38.4 1.02.4 1.4 0 .4-.38.4-1.02 0-1.4z" clipRule="evenodd" />
    </IconBase>
  ))
);

PieFill.displayName = 'PieFill';

// Triple export pattern
export { PieFill, PieFill as PieFillIcon, PieFill as SiPieFill };
export default PieFill;
export type { PieFillProps };
