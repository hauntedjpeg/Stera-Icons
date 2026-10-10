import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AvocadoBoldProps = Omit<IconBaseProps, 'children'>;

const AvocadoBold = memo(
  forwardRef<SVGSVGElement, AvocadoBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 10.5c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 2c3.24 0 5.87 2.56 6 5.77l.04 1.08q.03.38.1.66c.09.42.27.9.73 1.98q.62 1.4.63 3.01c0 4.14-3.36 7.5-7.5 7.5s-7.5-3.36-7.5-7.5q.02-1.62.63-3.01c.46-1.09.64-1.56.74-1.98s.1-.78.13-1.74l.02-.3C6.3 4.41 8.86 2 12 2m0 2C9.91 4 8.2 5.6 8.02 7.65l-.02.2c-.03.87-.04 1.46-.18 2.1-.14.62-.4 1.27-.85 2.33v.01q-.46 1.02-.47 2.21c0 3.04 2.46 5.5 5.5 5.5s5.5-2.46 5.5-5.5q-.01-1.19-.46-2.2v-.02c-.46-1.06-.72-1.7-.86-2.33-.1-.48-.14-.93-.16-1.5l-.02-.6C15.92 5.7 14.16 4 12 4" clipRule="evenodd" />
    </IconBase>
  ))
);

AvocadoBold.displayName = 'AvocadoBold';

// Triple export pattern
export { AvocadoBold, AvocadoBold as AvocadoBoldIcon, AvocadoBold as SiAvocadoBold };
export default AvocadoBold;
export type { AvocadoBoldProps };
