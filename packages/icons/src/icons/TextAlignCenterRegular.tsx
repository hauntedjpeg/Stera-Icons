import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignCenterRegularProps = Omit<IconBaseProps, 'children'>;

const TextAlignCenterRegular = memo(
  forwardRef<SVGSVGElement, TextAlignCenterRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19 17.25c.41 0 .75.34.75.75s-.34.75-.75.75H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM17 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM21 5.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

TextAlignCenterRegular.displayName = 'TextAlignCenterRegular';

// Triple export pattern
export { TextAlignCenterRegular, TextAlignCenterRegular as TextAlignCenterRegularIcon, TextAlignCenterRegular as SiTextAlignCenterRegular };
export default TextAlignCenterRegular;
export type { TextAlignCenterRegularProps };
