import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignCenterFillProps = Omit<IconBaseProps, 'children'>;

const TextAlignCenterFill = memo(
  forwardRef<SVGSVGElement, TextAlignCenterFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19 16.75a1.25 1.25 0 1 1 0 2.5H5a1.25 1.25 0 1 1 0-2.5zM17 10.75a1.25 1.25 0 1 1 0 2.5H7a1.25 1.25 0 1 1 0-2.5zM21 4.75a1.25 1.25 0 1 1 0 2.5H3a1.25 1.25 0 1 1 0-2.5z" />
    </IconBase>
  ))
);

TextAlignCenterFill.displayName = 'TextAlignCenterFill';

// Triple export pattern (lucide-react style)
export { TextAlignCenterFill, TextAlignCenterFill as TextAlignCenterFillIcon, TextAlignCenterFill as SiTextAlignCenterFill };
export default TextAlignCenterFill;
export type { TextAlignCenterFillProps };
