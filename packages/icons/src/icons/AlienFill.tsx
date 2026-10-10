import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlienFillProps = Omit<IconBaseProps, 'children'>;

const AlienFill = memo(
  forwardRef<SVGSVGElement, AlienFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 3c4.42 0 8 3.66 8 8.18 0 3.76-3.8 7-6.16 8.65-1.11.78-2.57.78-3.68 0C7.8 18.18 4 14.93 4 11.18 4 6.66 7.58 3 12 3m2 12.83c0-.42-.4-.73-.8-.63l-.79.2q-.41.09-.82 0l-.79-.2c-.4-.1-.8.2-.8.63 0 .4.27.74.65.83l.86.22q.49.12.98 0l.86-.22c.38-.1.65-.44.65-.83M8 9c-.55 0-1 .45-1 1 0 1.66 1.34 3 3 3 .55 0 1-.45 1-1 0-1.66-1.34-3-3-3m8 0c-1.66 0-3 1.34-3 3 0 .55.45 1 1 1 1.66 0 3-1.34 3-3 0-.55-.45-1-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

AlienFill.displayName = 'AlienFill';

// Triple export pattern
export { AlienFill, AlienFill as AlienFillIcon, AlienFill as SiAlienFill };
export default AlienFill;
export type { AlienFillProps };
