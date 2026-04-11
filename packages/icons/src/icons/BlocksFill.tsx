import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BlocksFillProps = Omit<IconBaseProps, 'children'>;

const BlocksFill = memo(
  forwardRef<SVGSVGElement, BlocksFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M8.75 6.13c1.17 0 2.13.95 2.13 2.12v4.88h4.87c1.17 0 2.13.95 2.13 2.12v4.5c0 1.17-.96 2.13-2.13 2.13H4.25a2.13 2.13 0 0 1-2.12-2.13V8.25c0-1.17.95-2.12 2.12-2.12zM3.88 19.74c0 .2.16.38.37.38h4.88v-5.25H3.87zm7 .38h4.87c.2 0 .38-.17.38-.38v-4.5c0-.2-.17-.37-.38-.37h-4.87zM4.25 7.88c-.2 0-.37.16-.37.37v4.88h5.25V8.25c0-.2-.17-.37-.38-.37z" clipRule="evenodd" />
        <path d="M19.75 2.13c1.17 0 2.13.95 2.13 2.12v4.5c0 1.17-.96 2.13-2.13 2.13h-4.5a2.13 2.13 0 0 1-2.12-2.13v-4.5c0-1.17.95-2.12 2.12-2.12z" />
    </IconBase>
  ))
);

BlocksFill.displayName = 'BlocksFill';

// Triple export pattern (lucide-react style)
export { BlocksFill, BlocksFill as BlocksFillIcon, BlocksFill as SiBlocksFill };
export default BlocksFill;
export type { BlocksFillProps };
