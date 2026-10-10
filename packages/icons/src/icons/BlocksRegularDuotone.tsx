import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BlocksRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const BlocksRegularDuotone = memo(
  forwardRef<SVGSVGElement, BlocksRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M8.75 6.25c1.1 0 2 .9 2 2v5h5c1.1 0 2 .9 2 2v4.5c0 1.1-.9 2-2 2H4.25c-1.1 0-2-.9-2-2V8.25c0-1.1.9-2 2-2zm-5 13.5c0 .28.22.5.5.5h5v-5.5h-5.5zm7 .5h5c.28 0 .5-.22.5-.5v-4.5c0-.28-.22-.5-.5-.5h-5zm-6.5-12.5c-.28 0-.5.22-.5.5v5h5.5v-5c0-.28-.22-.5-.5-.5z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M19.75 2.25c1.1 0 2 .9 2 2v4.5c0 1.1-.9 2-2 2h-4.5c-1.1 0-2-.9-2-2v-4.5c0-1.1.9-2 2-2zm-4.5 1.5c-.28 0-.5.22-.5.5v4.5c0 .28.22.5.5.5h4.5c.28 0 .5-.22.5-.5v-4.5c0-.28-.22-.5-.5-.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

BlocksRegularDuotone.displayName = 'BlocksRegularDuotone';

// Triple export pattern
export { BlocksRegularDuotone, BlocksRegularDuotone as BlocksRegularDuotoneIcon, BlocksRegularDuotone as SiBlocksRegularDuotone };
export default BlocksRegularDuotone;
export type { BlocksRegularDuotoneProps };
