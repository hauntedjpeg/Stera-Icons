import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HashItalicRegularProps = Omit<IconBaseProps, 'children'>;

const HashItalicRegular = memo(
  forwardRef<SVGSVGElement, HashItalicRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M16.27 2.84c.09-.4.49-.66.9-.57.4.09.65.49.56.9L16.6 8.24H21c.41 0 .75.34.75.75s-.34.75-.75.75h-4.73l-1 4.5H19c.41 0 .75.34.75.75s-.34.75-.75.75h-4.06l-1.2 5.41c-.1.4-.5.66-.9.57s-.66-.49-.57-.9l1.13-5.08H8.94l-1.2 5.41c-.1.4-.5.66-.9.57s-.66-.49-.57-.9l1.13-5.08H3c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.73l1-4.5H5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h4.06l1.2-5.41c.1-.4.5-.66.9-.57s.66.49.57.9L10.6 8.24h4.46zm-7 11.41h4.46l1-4.5h-4.46z" clipRule="evenodd" />
    </IconBase>
  ))
);

HashItalicRegular.displayName = 'HashItalicRegular';

// Triple export pattern
export { HashItalicRegular, HashItalicRegular as HashItalicRegularIcon, HashItalicRegular as SiHashItalicRegular };
export default HashItalicRegular;
export type { HashItalicRegularProps };
