import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type ForwardRegularProps = Omit<IconBaseProps, 'children'>;

const ForwardRegular = memo(
  forwardRef<SVGSVGElement, ForwardRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12.71 3.3c.28-.11.6-.04.82.17l8 8c.3.3.3.77 0 1.06l-8 8c-.21.21-.54.28-.82.16-.28-.11-.46-.39-.46-.69v-4.75H11c-2.8 0-4.62 1.04-5.75 2.06-.57.51-.97 1.02-1.22 1.4l-.27.45-.06.12-.01.02c-.15.33-.5.5-.85.43s-.59-.38-.59-.73c0-3.79.62-6.45 2.43-8.11 1.67-1.54 4.19-2.07 7.57-2.13V4c0-.3.18-.58.46-.7m1.04 6.2c0 .41-.34.75-.75.75-3.74 0-5.97.51-7.3 1.74-1 .91-1.6 2.33-1.83 4.57q.18-.19.38-.37c1.37-1.23 3.54-2.44 6.75-2.44h2c.41 0 .75.34.75.75v3.69L19.94 12l-6.19-6.19z" clipRule="evenodd" />
    </IconBase>
  ))
);

ForwardRegular.displayName = 'ForwardRegular';

// Triple export pattern
export { ForwardRegular, ForwardRegular as ForwardRegularIcon, ForwardRegular as SiForwardRegular };
export default ForwardRegular;
export type { ForwardRegularProps };
