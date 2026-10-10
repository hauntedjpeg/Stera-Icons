import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AlienBoldProps = Omit<IconBaseProps, 'children'>;

const AlienBold = memo(
  forwardRef<SVGSVGElement, AlienBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 2c5 0 9 4.13 9 9.18 0 2.22-1.11 4.19-2.43 5.76-1.32 1.58-2.94 2.86-4.16 3.71-1.45 1.02-3.37 1.02-4.82 0-1.22-.85-2.84-2.13-4.16-3.71C4.1 15.37 3 13.4 3 11.18 3 6.13 7 2 12 2m0 2c-3.84 0-7 3.2-7 7.18 0 1.54.78 3.07 1.96 4.47 1.17 1.4 2.63 2.56 3.77 3.36.77.54 1.77.54 2.54 0 1.14-.8 2.6-1.96 3.77-3.36 1.18-1.4 1.96-2.93 1.96-4.47C19 7.2 15.84 4 12 4" clipRule="evenodd" />
        <path d="M13.2 15.2c.4-.1.8.2.8.63 0 .4-.27.74-.65.83l-.86.22q-.49.12-.98 0l-.86-.22c-.38-.1-.65-.44-.65-.83 0-.42.4-.73.8-.63l.79.2q.41.09.82 0zM8 9c1.66 0 3 1.34 3 3 0 .55-.45 1-1 1-1.66 0-3-1.34-3-3 0-.55.45-1 1-1M16 9c.55 0 1 .45 1 1 0 1.66-1.34 3-3 3-.55 0-1-.45-1-1 0-1.66 1.34-3 3-3" />
    </IconBase>
  ))
);

AlienBold.displayName = 'AlienBold';

// Triple export pattern
export { AlienBold, AlienBold as AlienBoldIcon, AlienBold as SiAlienBold };
export default AlienBold;
export type { AlienBoldProps };
