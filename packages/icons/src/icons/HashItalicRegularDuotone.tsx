import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HashItalicRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const HashItalicRegularDuotone = memo(
  forwardRef<SVGSVGElement, HashItalicRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M7.73 21.16c-.09.4-.49.66-.9.57-.4-.09-.65-.49-.56-.9l1.13-5.08h1.54zM13.73 21.16c-.09.4-.49.66-.9.57-.4-.09-.65-.49-.56-.9l1.13-5.08h1.54zM9.27 14.25H7.73l1-4.5h1.54zM15.27 14.25h-1.54l1-4.5h1.54zM10.27 2.84c.09-.4.49-.66.9-.57.4.09.65.49.56.9L10.6 8.24H9.06zM16.27 2.84c.09-.4.49-.66.9-.57.4.09.65.49.56.9L16.6 8.24h-1.54z" opacity={0.4} />
        <path d="M19 14.25c.41 0 .75.34.75.75s-.34.75-.75.75H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75zM21 8.25c.41 0 .75.34.75.75s-.34.75-.75.75H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75z" />
    </IconBase>
  ))
);

HashItalicRegularDuotone.displayName = 'HashItalicRegularDuotone';

// Triple export pattern
export { HashItalicRegularDuotone, HashItalicRegularDuotone as HashItalicRegularDuotoneIcon, HashItalicRegularDuotone as SiHashItalicRegularDuotone };
export default HashItalicRegularDuotone;
export type { HashItalicRegularDuotoneProps };
