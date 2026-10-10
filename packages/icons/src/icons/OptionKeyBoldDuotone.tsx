import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type OptionKeyBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const OptionKeyBoldDuotone = memo(
  forwardRef<SVGSVGElement, OptionKeyBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 4c.55 0 1 .45 1 1s-.45 1-1 1h-6.5c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={.4} />
        <path d="M9 4c.4 0 .76.24.92.6L15.66 18H21c.55 0 1 .45 1 1s-.45 1-1 1h-6c-.4 0-.76-.24-.92-.6L8.34 6H3c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

OptionKeyBoldDuotone.displayName = 'OptionKeyBoldDuotone';

// Triple export pattern
export { OptionKeyBoldDuotone, OptionKeyBoldDuotone as OptionKeyBoldDuotoneIcon, OptionKeyBoldDuotone as SiOptionKeyBoldDuotone };
export default OptionKeyBoldDuotone;
export type { OptionKeyBoldDuotoneProps };
