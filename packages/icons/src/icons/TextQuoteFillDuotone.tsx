import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextQuoteFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextQuoteFillDuotone = memo(
  forwardRef<SVGSVGElement, TextQuoteFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M3 10.75c.69 0 1.25.56 1.25 1.25v6a1.25 1.25 0 1 1-2.5 0v-6c0-.69.56-1.25 1.25-1.25" opacity={.4} />
        <path d="M21 16.75a1.25 1.25 0 1 1 0 2.5H8a1.25 1.25 0 1 1 0-2.5zM21 10.75a1.25 1.25 0 1 1 0 2.5H8a1.25 1.25 0 1 1 0-2.5zM16 4.75a1.25 1.25 0 1 1 0 2.5H3a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

TextQuoteFillDuotone.displayName = 'TextQuoteFillDuotone';

// Triple export pattern (lucide-react style)
export { TextQuoteFillDuotone, TextQuoteFillDuotone as TextQuoteFillDuotoneIcon, TextQuoteFillDuotone as SiTextQuoteFillDuotone };
export default TextQuoteFillDuotone;
export type { TextQuoteFillDuotoneProps };
