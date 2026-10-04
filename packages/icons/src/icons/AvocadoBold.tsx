import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AvocadoBoldProps = Omit<IconBaseProps, 'children'>;

const AvocadoBold = memo(
  forwardRef<SVGSVGElement, AvocadoBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 10.5a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
        <path fillRule="evenodd" d="M12 2a6 6 0 0 1 6 5.77l.04 1.08q.03.38.1.66c.09.42.27.9.73 1.98A7.48 7.48 0 0 1 12 22a7.5 7.5 0 0 1-6.87-10.51c.46-1.09.64-1.56.74-1.98s.1-.78.13-1.74l.02-.3A6 6 0 0 1 12 2m0 2a4 4 0 0 0-3.98 3.65l-.02.2c-.03.87-.04 1.46-.18 2.1-.14.62-.4 1.27-.85 2.33v.01q-.46 1.02-.47 2.21a5.5 5.5 0 1 0 10.54-2.2v-.02c-.46-1.06-.72-1.7-.86-2.33-.1-.48-.14-.93-.16-1.5l-.02-.6A4 4 0 0 0 12 4" clipRule="evenodd" />
    </IconBase>
  ))
);

AvocadoBold.displayName = 'AvocadoBold';

// Triple export pattern (lucide-react style)
export { AvocadoBold, AvocadoBold as AvocadoBoldIcon, AvocadoBold as SiAvocadoBold };
export default AvocadoBold;
export type { AvocadoBoldProps };
