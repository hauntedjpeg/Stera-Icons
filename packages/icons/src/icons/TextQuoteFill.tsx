import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextQuoteFillProps = Omit<IconBaseProps, 'children'>;

const TextQuoteFill = memo(
  forwardRef<SVGSVGElement, TextQuoteFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 10.75c.69 0 1.25.56 1.25 1.25v6c0 .69-.56 1.25-1.25 1.25S1.75 18.69 1.75 18v-6c0-.69.56-1.25 1.25-1.25M21 16.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H8c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM21 10.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H8c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM16 4.75c.69 0 1.25.56 1.25 1.25S16.69 7.25 16 7.25H3c-.69 0-1.25-.56-1.25-1.25S2.31 4.75 3 4.75z" />
    </IconBase>
  ))
);

TextQuoteFill.displayName = 'TextQuoteFill';

// Triple export pattern
export { TextQuoteFill, TextQuoteFill as TextQuoteFillIcon, TextQuoteFill as SiTextQuoteFill };
export default TextQuoteFill;
export type { TextQuoteFillProps };
