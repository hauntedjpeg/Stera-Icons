import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignLeftBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextAlignLeftBoldDuotone = memo(
  forwardRef<SVGSVGElement, TextAlignLeftBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13 11c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1z" opacity={.4} />
        <path d="M17 17c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1zM21 5c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

TextAlignLeftBoldDuotone.displayName = 'TextAlignLeftBoldDuotone';

// Triple export pattern
export { TextAlignLeftBoldDuotone, TextAlignLeftBoldDuotone as TextAlignLeftBoldDuotoneIcon, TextAlignLeftBoldDuotone as SiTextAlignLeftBoldDuotone };
export default TextAlignLeftBoldDuotone;
export type { TextAlignLeftBoldDuotoneProps };
