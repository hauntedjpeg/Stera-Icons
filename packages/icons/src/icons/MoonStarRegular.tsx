import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MoonStarRegularProps = Omit<IconBaseProps, 'children'>;

const MoonStarRegular = memo(
  forwardRef<SVGSVGElement, MoonStarRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M9.63 2.54c.28-.07.57.03.76.25.18.22.22.53.1.8Q9.77 5.14 9.75 7c0 4.56 3.7 8.25 8.25 8.25q1.04 0 2-.25c.29-.07.58.03.77.25.18.22.22.53.1.8-1.53 3.36-4.93 5.7-8.87 5.7-5.38 0-9.75-4.37-9.75-9.75 0-4.57 3.14-8.4 7.38-9.46M8.58 4.5C5.73 5.8 3.75 8.67 3.75 12c0 4.56 3.7 8.25 8.25 8.25 2.8 0 5.27-1.4 6.76-3.53q-.37.03-.76.03c-5.38 0-9.75-4.37-9.75-9.75q0-1.3.33-2.5" clipRule="evenodd" />
        <path d="M17.02 3.57c.15-.47.81-.47.96 0l.26.86c.2.64.7 1.14 1.33 1.33l.86.26c.47.15.47.81 0 .96l-.86.26c-.64.2-1.14.7-1.33 1.33l-.26.86c-.15.47-.81.47-.96 0l-.26-.86c-.2-.64-.7-1.14-1.33-1.33l-.86-.26c-.47-.15-.47-.81 0-.96l.86-.26c.64-.2 1.14-.7 1.33-1.33z" />
    </IconBase>
  ))
);

MoonStarRegular.displayName = 'MoonStarRegular';

// Triple export pattern
export { MoonStarRegular, MoonStarRegular as MoonStarRegularIcon, MoonStarRegular as SiMoonStarRegular };
export default MoonStarRegular;
export type { MoonStarRegularProps };
