import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextQuoteBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextQuoteBoldDuotone = memo(
  forwardRef<SVGSVGElement, TextQuoteBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 11c.55 0 1 .45 1 1v6.1c-.06.5-.48.9-1 .9s-.94-.4-1-.9V12c0-.55.45-1 1-1" opacity={.4} />
        <path d="M21 17c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1zM21 11c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1zM16 5c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

TextQuoteBoldDuotone.displayName = 'TextQuoteBoldDuotone';

// Triple export pattern
export { TextQuoteBoldDuotone, TextQuoteBoldDuotone as TextQuoteBoldDuotoneIcon, TextQuoteBoldDuotone as SiTextQuoteBoldDuotone };
export default TextQuoteBoldDuotone;
export type { TextQuoteBoldDuotoneProps };
