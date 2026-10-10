import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextQuoteFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextQuoteFillDuotone = memo(
  forwardRef<SVGSVGElement, TextQuoteFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 10.75c.69 0 1.25.56 1.25 1.25v6c0 .69-.56 1.25-1.25 1.25S1.75 18.69 1.75 18v-6c0-.69.56-1.25 1.25-1.25" opacity={.4} />
        <path d="M21 16.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H8c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM21 10.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H8c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM16 4.75c.69 0 1.25.56 1.25 1.25S16.69 7.25 16 7.25H3c-.69 0-1.25-.56-1.25-1.25S2.31 4.75 3 4.75z" />
    </IconBase>
  ))
);

TextQuoteFillDuotone.displayName = 'TextQuoteFillDuotone';

// Triple export pattern
export { TextQuoteFillDuotone, TextQuoteFillDuotone as TextQuoteFillDuotoneIcon, TextQuoteFillDuotone as SiTextQuoteFillDuotone };
export default TextQuoteFillDuotone;
export type { TextQuoteFillDuotoneProps };
