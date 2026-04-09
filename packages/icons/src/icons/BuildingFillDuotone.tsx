import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BuildingFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const BuildingFillDuotone = memo(
  forwardRef<SVGSVGElement, BuildingFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="building-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M14.8 2.13q.82 0 1.38.03.6.03 1.13.28.83.42 1.25 1.25.25.54.28 1.13.05.56.04 1.38v13.93H14V16.5a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.63H5.13V6.2q0-.82.03-1.38.03-.6.28-1.13.42-.83 1.25-1.25.54-.25 1.13-.28.55-.05 1.38-.04zm-5.05 8c-.48 0-.87.39-.87.87v.5c0 .48.39.88.87.88h.5c.48 0 .88-.4.88-.88V11c0-.48-.4-.87-.88-.87zm4 0c-.48 0-.87.39-.87.87v.5c0 .48.39.88.87.88h.5c.48 0 .88-.4.88-.88V11c0-.48-.4-.87-.88-.87zm-4-4.26c-.48 0-.87.4-.87.88v.5c0 .48.39.88.87.88h.5c.48 0 .88-.4.88-.88v-.5c0-.48-.4-.87-.88-.87zm4 0c-.48 0-.87.4-.87.88v.5c0 .48.39.88.87.88h.5c.48 0 .88-.4.88-.88v-.5c0-.48-.4-.87-.88-.87z" clipRule="evenodd" opacity={.4} />
        <path d="M13 15.5a1 1 0 0 1 1 1v3.63h5.5a.88.88 0 0 1 0 1.75h-15a.88.88 0 0 1 0-1.75H10V16.5a1 1 0 0 1 1-1zM10.25 10.13c.48 0 .88.39.88.87v.5c0 .48-.4.88-.88.88h-.5a.9.9 0 0 1-.87-.88V11c0-.48.39-.87.87-.87zM14.25 10.13c.48 0 .88.39.88.87v.5c0 .48-.4.88-.88.88h-.5a.9.9 0 0 1-.87-.88V11c0-.48.39-.87.87-.87zM10.25 5.88c.48 0 .88.39.88.87v.5c0 .48-.4.88-.88.88h-.5a.87.87 0 0 1-.87-.88v-.5c0-.48.39-.87.87-.87zM14.25 5.88c.48 0 .88.39.88.87v.5c0 .48-.4.88-.88.88h-.5a.9.9 0 0 1-.87-.88v-.5c0-.48.39-.87.87-.87z" />
    </IconBase>
  ))
);

BuildingFillDuotone.displayName = 'BuildingFillDuotone';

// Triple export pattern (lucide-react style)
export { BuildingFillDuotone, BuildingFillDuotone as BuildingFillDuotoneIcon, BuildingFillDuotone as SiBuildingFillDuotone };
export default BuildingFillDuotone;
export type { BuildingFillDuotoneProps };
