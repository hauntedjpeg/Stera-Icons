import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BuildingBoldProps = Omit<IconBaseProps, 'children'>;

const BuildingBold = memo(
  forwardRef<SVGSVGElement, BuildingBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M10.25 10c.55 0 1 .45 1 1v.5c0 .55-.45 1-1 1h-.5c-.55 0-1-.45-1-1V11c0-.55.45-1 1-1zM14.25 10c.55 0 1 .45 1 1v.5c0 .55-.45 1-1 1h-.5c-.55 0-1-.45-1-1V11c0-.55.45-1 1-1zM10.25 5.75c.55 0 1 .45 1 1v.5c0 .55-.45 1-1 1h-.5c-.55 0-1-.45-1-1v-.5c0-.55.45-1 1-1zM14.25 5.75c.55 0 1 .45 1 1v.5c0 .55-.45 1-1 1h-.5c-.55 0-1-.45-1-1v-.5c0-.55.45-1 1-1z" />
        <path fillRule="evenodd" d="M14.8 2q.81 0 1.4.03c.4.03.78.1 1.16.3.57.28 1.03.74 1.31 1.3.2.39.27.78.3 1.17q.04.59.03 1.4V20h.5c.55 0 1 .45 1 1s-.45 1-1 1h-15c-.55 0-1-.45-1-1s.45-1 1-1H5V6.2q0-.81.03-1.4c.03-.4.1-.78.3-1.16.28-.57.74-1.03 1.3-1.31.39-.2.78-.27 1.17-.3Q8.4 1.99 9.2 2zM9.2 4c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09q-.3.15-.44.44c-.03.05-.06.15-.09.42C7 5.25 7 5.62 7 6.2V20h2v-3c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v3h2V6.2c0-.58 0-.95-.02-1.23-.03-.27-.06-.37-.09-.42q-.15-.3-.44-.44c-.05-.03-.15-.06-.42-.09C15.75 4 15.38 4 14.8 4zM11 20h2v-3h-2z" clipRule="evenodd" />
    </IconBase>
  ))
);

BuildingBold.displayName = 'BuildingBold';

// Triple export pattern
export { BuildingBold, BuildingBold as BuildingBoldIcon, BuildingBold as SiBuildingBold };
export default BuildingBold;
export type { BuildingBoldProps };
