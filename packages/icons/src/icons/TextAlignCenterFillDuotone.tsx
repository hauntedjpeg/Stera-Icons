import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignCenterFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextAlignCenterFillDuotone = memo(
  forwardRef<SVGSVGElement, TextAlignCenterFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17 10.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H7c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25z" opacity={.4} />
        <path d="M19 16.75c.69 0 1.25.56 1.25 1.25s-.56 1.25-1.25 1.25H5c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25zM21 4.75c.69 0 1.25.56 1.25 1.25S21.69 7.25 21 7.25H3c-.69 0-1.25-.56-1.25-1.25S2.31 4.75 3 4.75z" />
    </IconBase>
  ))
);

TextAlignCenterFillDuotone.displayName = 'TextAlignCenterFillDuotone';

// Triple export pattern
export { TextAlignCenterFillDuotone, TextAlignCenterFillDuotone as TextAlignCenterFillDuotoneIcon, TextAlignCenterFillDuotone as SiTextAlignCenterFillDuotone };
export default TextAlignCenterFillDuotone;
export type { TextAlignCenterFillDuotoneProps };
