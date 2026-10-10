import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type OptionKeyBoldProps = Omit<IconBaseProps, 'children'>;

const OptionKeyBold = memo(
  forwardRef<SVGSVGElement, OptionKeyBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M9 4c.4 0 .76.24.92.6L15.66 18H21c.55 0 1 .45 1 1s-.45 1-1 1h-6c-.4 0-.76-.24-.92-.6L8.34 6H3c-.55 0-1-.45-1-1s.45-1 1-1zM21 4c.55 0 1 .45 1 1s-.45 1-1 1h-6.5c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

OptionKeyBold.displayName = 'OptionKeyBold';

// Triple export pattern
export { OptionKeyBold, OptionKeyBold as OptionKeyBoldIcon, OptionKeyBold as SiOptionKeyBold };
export default OptionKeyBold;
export type { OptionKeyBoldProps };
