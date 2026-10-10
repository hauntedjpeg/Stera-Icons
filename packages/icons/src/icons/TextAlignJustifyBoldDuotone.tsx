import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignJustifyBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextAlignJustifyBoldDuotone = memo(
  forwardRef<SVGSVGElement, TextAlignJustifyBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 11c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={.4} />
        <path d="M21 17c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1zM21 5c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

TextAlignJustifyBoldDuotone.displayName = 'TextAlignJustifyBoldDuotone';

// Triple export pattern
export { TextAlignJustifyBoldDuotone, TextAlignJustifyBoldDuotone as TextAlignJustifyBoldDuotoneIcon, TextAlignJustifyBoldDuotone as SiTextAlignJustifyBoldDuotone };
export default TextAlignJustifyBoldDuotone;
export type { TextAlignJustifyBoldDuotoneProps };
