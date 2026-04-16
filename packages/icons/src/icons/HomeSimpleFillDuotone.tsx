import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HomeSimpleFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const HomeSimpleFillDuotone = memo(
  forwardRef<SVGSVGElement, HomeSimpleFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M10.99 2.06a4 4 0 0 1 2.02 0c.8.22 1.49.78 2.48 1.55l3.55 2.77c.7.54 1.18.91 1.53 1.39q.45.61.65 1.34c.16.57.15 1.18.15 2.06v3.63q.01 1.34-.04 2.2c-.05.6-.15 1.13-.4 1.62-.4.78-1.03 1.41-1.8 1.8-.5.26-1.03.36-1.62.4q-.87.07-2.21.05H8.7q-1.34.01-2.2-.04a4 4 0 0 1-1.62-.4 4 4 0 0 1-1.8-1.8 4 4 0 0 1-.4-1.62q-.08-.89-.06-2.21v-3.63c0-.88 0-1.5.16-2.06q.2-.73.65-1.34c.35-.48.84-.85 1.53-1.4l3.55-2.76c.99-.77 1.68-1.33 2.48-1.55m1.57 1.7q-.56-.15-1.12 0c-.37.1-.73.36-1.85 1.23L6.04 7.76c-.77.6-1.02.8-1.2 1.05q-.26.36-.38.77c-.08.28-.09.6-.09 1.59v3.63c0 .92 0 1.56.05 2.06.04.49.11.76.21.97q.36.67 1.04 1.04c.2.1.48.17.97.21.5.04 1.14.04 2.06.04h6.6c.92 0 1.57 0 2.06-.04.5-.04.76-.11.97-.21q.67-.36 1.04-1.04c.1-.2.17-.48.21-.97.04-.5.04-1.14.04-2.06v-3.63c0-.98 0-1.3-.08-1.6q-.11-.41-.38-.76a7 7 0 0 0-1.2-1.05l-3.55-2.77c-1.12-.87-1.48-1.14-1.85-1.24" clipRule="evenodd" />
        <path d="M11.44 3.75q.56-.15 1.12 0c.37.1.73.37 1.85 1.24l3.55 2.77c.77.6 1.02.8 1.2 1.05q.26.36.38.77c.08.28.09.6.09 1.59v3.63c0 .92 0 1.56-.05 2.06-.04.49-.11.76-.21.97q-.36.67-1.04 1.04c-.2.1-.48.17-.97.21-.5.04-1.14.04-2.06.04H8.7c-.92 0-1.57 0-2.06-.04a3 3 0 0 1-.97-.21Q5 18.5 4.63 17.83c-.1-.2-.17-.48-.21-.97-.04-.5-.04-1.14-.04-2.06v-3.63c0-.98 0-1.3.08-1.6q.12-.41.38-.76c.18-.24.43-.45 1.2-1.05l3.55-2.77c1.12-.87 1.48-1.14 1.85-1.24" opacity={.4} />
    </IconBase>
  ))
);

HomeSimpleFillDuotone.displayName = 'HomeSimpleFillDuotone';

// Triple export pattern (lucide-react style)
export { HomeSimpleFillDuotone, HomeSimpleFillDuotone as HomeSimpleFillDuotoneIcon, HomeSimpleFillDuotone as SiHomeSimpleFillDuotone };
export default HomeSimpleFillDuotone;
export type { HomeSimpleFillDuotoneProps };
