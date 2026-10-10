import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignRightRegularProps = Omit<IconBaseProps, 'children'>;

const TextAlignRightRegular = memo(
  forwardRef<SVGSVGElement, TextAlignRightRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 17.25c.41 0 .75.34.75.75s-.34.75-.75.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM21 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM21 5.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

TextAlignRightRegular.displayName = 'TextAlignRightRegular';

// Triple export pattern
export { TextAlignRightRegular, TextAlignRightRegular as TextAlignRightRegularIcon, TextAlignRightRegular as SiTextAlignRightRegular };
export default TextAlignRightRegular;
export type { TextAlignRightRegularProps };
