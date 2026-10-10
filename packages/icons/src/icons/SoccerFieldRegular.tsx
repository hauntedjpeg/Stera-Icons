import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SoccerFieldRegularProps = Omit<IconBaseProps, 'children'>;

const SoccerFieldRegular = memo(
  forwardRef<SVGSVGElement, SoccerFieldRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M20 3.25c1.52 0 2.75 1.23 2.75 2.75v12c0 1.52-1.23 2.75-2.75 2.75H4c-1.52 0-2.75-1.23-2.75-2.75V6c0-1.52 1.23-2.75 2.75-2.75zm-7.25 5.59c1.43.34 2.5 1.62 2.5 3.16s-1.07 2.82-2.5 3.16v4.09H20c.69 0 1.25-.56 1.25-1.25v-2.25H18.5c-.41 0-.75-.34-.75-.75V9c0-.41.34-.75.75-.75h2.75V6c0-.69-.56-1.25-1.25-1.25h-7.25zM4 4.75c-.69 0-1.25.56-1.25 1.25v2.25H5.5c.41 0 .75.34.75.75v6c0 .41-.34.75-.75.75H2.75V18c0 .69.56 1.25 1.25 1.25h7.25v-4.09c-1.43-.34-2.5-1.62-2.5-3.16s1.07-2.82 2.5-3.16V4.75zm-1.25 9.5h2v-4.5h-2zm16.5 0h2v-4.5h-2zm-7.25-4c-.97 0-1.75.78-1.75 1.75s.78 1.75 1.75 1.75 1.75-.78 1.75-1.75-.78-1.75-1.75-1.75" clipRule="evenodd" />
    </IconBase>
  ))
);

SoccerFieldRegular.displayName = 'SoccerFieldRegular';

// Triple export pattern
export { SoccerFieldRegular, SoccerFieldRegular as SoccerFieldRegularIcon, SoccerFieldRegular as SiSoccerFieldRegular };
export default SoccerFieldRegular;
export type { SoccerFieldRegularProps };
