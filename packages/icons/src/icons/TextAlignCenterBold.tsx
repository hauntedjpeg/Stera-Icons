import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignCenterBoldProps = Omit<IconBaseProps, 'children'>;

const TextAlignCenterBold = memo(
  forwardRef<SVGSVGElement, TextAlignCenterBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19 17c.55 0 1 .45 1 1s-.45 1-1 1H5c-.55 0-1-.45-1-1s.45-1 1-1zM17 11c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1zM21 5c.55 0 1 .45 1 1s-.45 1-1 1H3c-.55 0-1-.45-1-1s.45-1 1-1z" />
    </IconBase>
  ))
);

TextAlignCenterBold.displayName = 'TextAlignCenterBold';

// Triple export pattern
export { TextAlignCenterBold, TextAlignCenterBold as TextAlignCenterBoldIcon, TextAlignCenterBold as SiTextAlignCenterBold };
export default TextAlignCenterBold;
export type { TextAlignCenterBoldProps };
