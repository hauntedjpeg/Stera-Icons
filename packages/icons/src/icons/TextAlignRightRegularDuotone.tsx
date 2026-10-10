import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextAlignRightRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextAlignRightRegularDuotone = memo(
  forwardRef<SVGSVGElement, TextAlignRightRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M21 11.25c.41 0 .75.34.75.75s-.34.75-.75.75H11c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" opacity={.4} />
        <path d="M21 17.25c.41 0 .75.34.75.75s-.34.75-.75.75H7c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM21 5.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

TextAlignRightRegularDuotone.displayName = 'TextAlignRightRegularDuotone';

// Triple export pattern
export { TextAlignRightRegularDuotone, TextAlignRightRegularDuotone as TextAlignRightRegularDuotoneIcon, TextAlignRightRegularDuotone as SiTextAlignRightRegularDuotone };
export default TextAlignRightRegularDuotone;
export type { TextAlignRightRegularDuotoneProps };
