import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BuildingFillProps = Omit<IconBaseProps, 'children'>;

const BuildingFill = memo(
  forwardRef<SVGSVGElement, BuildingFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.8 2.13q.82 0 1.38.03.6.03 1.13.28.83.42 1.25 1.25.25.54.28 1.13.05.56.04 1.38V20h.62a1 1 0 0 1 0 2h-15a1 1 0 1 1 0-2h.63V6.2q0-.82.03-1.38.03-.6.28-1.13.42-.83 1.25-1.25.54-.25 1.13-.28.55-.05 1.38-.04zM11 15.5a1 1 0 0 0-1 1V20h4v-3.5a1 1 0 0 0-1-1zm-1.25-5.37c-.48 0-.87.39-.87.87v.5c0 .48.39.88.87.88h.5c.48 0 .88-.4.88-.88V11c0-.48-.4-.87-.88-.87zm4 0c-.48 0-.87.39-.87.87v.5c0 .48.39.88.87.88h.5c.48 0 .88-.4.88-.88V11c0-.48-.4-.87-.88-.87zm-4-4.26c-.48 0-.87.4-.87.88v.5c0 .48.39.87.87.88h.5c.48 0 .88-.4.88-.88v-.5c0-.48-.4-.87-.88-.87zm4 0c-.48 0-.87.4-.87.88v.5c0 .48.39.87.87.88h.5c.48 0 .88-.4.88-.88v-.5c0-.48-.4-.87-.88-.87z" clipRule="evenodd" />
    </IconBase>
  ))
);

BuildingFill.displayName = 'BuildingFill';

// Triple export pattern (lucide-react style)
export { BuildingFill, BuildingFill as BuildingFillIcon, BuildingFill as SiBuildingFill };
export default BuildingFill;
export type { BuildingFillProps };
