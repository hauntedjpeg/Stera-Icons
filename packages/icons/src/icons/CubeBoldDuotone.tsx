import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CubeBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const CubeBoldDuotone = memo(
  forwardRef<SVGSVGElement, CubeBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M11 1.68a5 5 0 0 1 2 0c.8.16 1.52.57 2.6 1.17l2.6 1.45c1.13.63 1.9 1.05 2.48 1.67a5 5 0 0 1 .62.83l.13.24q.19.36.32.75c.26.8.25 1.67.25 2.98v2.46c0 1.3.01 2.18-.25 2.98a5 5 0 0 1-1.07 1.83c-.57.61-1.35 1.03-2.49 1.66l-2.6 1.45c-1.07.6-1.8 1.01-2.58 1.17a5 5 0 0 1-.76.1H12a1 1 0 0 0 1-1v-1.18c.34-.13.8-.38 1.62-.84l2.6-1.44c1.26-.7 1.68-.95 1.99-1.28a3 3 0 0 0 .64-1.1c.14-.41.15-.9.15-2.35v-2.46c0-1.1 0-1.65-.07-2.03L13 12.59V12a1 1 0 0 0-.51-.87l-8.44-4.7a1 1 0 0 0-1.3.29l-.05.08a5 5 0 0 1 .62-.83c.57-.62 1.35-1.04 2.49-1.67l2.6-1.45c1.07-.6 1.8-1 2.58-1.17m1.6 1.96a3 3 0 0 0-1.2 0c-.42.08-.83.3-2.02.96l-2.6 1.45c-.88.48-1.35.75-1.66.98L12 10.86l6.88-3.83c-.3-.23-.78-.5-1.66-.98l-2.6-1.45a8 8 0 0 0-2.02-.96" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M2.76 6.72a1 1 0 0 1 1.29-.28l8.44 4.69A1 1 0 0 1 13 12v9.42a1 1 0 0 1-1 1 5 5 0 0 1-1-.1c-.8-.16-1.52-.57-2.6-1.17L5.8 19.7c-1.13-.63-1.9-1.05-2.48-1.66a5 5 0 0 1-1.07-1.83C2 15.41 2 14.54 2 13.23v-2.46c0-1.3-.01-2.18.25-2.98a5 5 0 0 1 .45-.99zm1.31 2.02c-.06.38-.07.93-.07 2.03v2.46c0 1.44.01 1.94.15 2.36a3 3 0 0 0 .64 1.09c.3.33.73.58 1.99 1.27l2.6 1.45c.83.46 1.28.7 1.62.84v-7.65z" clipRule="evenodd" />
    </IconBase>
  ))
);

CubeBoldDuotone.displayName = 'CubeBoldDuotone';

// Triple export pattern (lucide-react style)
export { CubeBoldDuotone, CubeBoldDuotone as CubeBoldDuotoneIcon, CubeBoldDuotone as SiCubeBoldDuotone };
export default CubeBoldDuotone;
export type { CubeBoldDuotoneProps };
