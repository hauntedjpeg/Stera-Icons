import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type PyramidBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const PyramidBoldDuotone = memo(
  forwardRef<SVGSVGElement, PyramidBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.1 2.84c.64.03 1.27.33 1.7.9l7.2 9.6c.78 1.04.53 2.5-.54 3.23l-7.21 4.8q-.59.38-1.25.38c.55 0 1-.45 1-1v-1.62l6.35-4.23c.11-.08.14-.24.06-.36L13 6V3.83c0-.51-.4-.94-.9-.99" opacity={.4} />
        <path fillRule="evenodd" d="M12 2.83c.55 0 1 .45 1 1v16.92c0 .55-.45 1-1 1q-.67 0-1.25-.38l-7.2-4.8c-1.08-.72-1.33-2.2-.56-3.23l7.2-9.6c.46-.6 1.14-.9 1.8-.9M4.6 14.54c-.1.12-.07.28.05.36L11 19.13V6z" clipRule="evenodd" />
    </IconBase>
  ))
);

PyramidBoldDuotone.displayName = 'PyramidBoldDuotone';

// Triple export pattern
export { PyramidBoldDuotone, PyramidBoldDuotone as PyramidBoldDuotoneIcon, PyramidBoldDuotone as SiPyramidBoldDuotone };
export default PyramidBoldDuotone;
export type { PyramidBoldDuotoneProps };
