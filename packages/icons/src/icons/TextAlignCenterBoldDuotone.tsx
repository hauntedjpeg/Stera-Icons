import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignCenterBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextAlignCenterBoldDuotone = memo(
  forwardRef<SVGSVGElement, TextAlignCenterBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M17 11c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={.4} />
        <path d="M19 17c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1zM21 5c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

TextAlignCenterBoldDuotone.displayName = 'TextAlignCenterBoldDuotone';

// Triple export pattern
export { TextAlignCenterBoldDuotone, TextAlignCenterBoldDuotone as TextAlignCenterBoldDuotoneIcon, TextAlignCenterBoldDuotone as SiTextAlignCenterBoldDuotone };
export default TextAlignCenterBoldDuotone;
export type { TextAlignCenterBoldDuotoneProps };
