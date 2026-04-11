import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MedicalCrossFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MedicalCrossFillDuotone = memo(
  forwardRef<SVGSVGElement, MedicalCrossFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.75 4.38c.2 0 .38.16.38.37V9c0 .48.39.88.87.88h4.25c.2 0 .38.16.38.37v3.5c0 .2-.17.38-.38.38H15c-.48 0-.87.39-.87.87v4.25c0 .2-.17.38-.38.38h-3.5a.4.4 0 0 1-.37-.38V15c0-.48-.4-.87-.88-.87H4.75a.4.4 0 0 1-.37-.38v-3.5c0-.2.16-.37.37-.37H9c.48 0 .88-.4.88-.88V4.75c0-.2.16-.37.37-.37z" opacity={.4} />
        <path fillRule="evenodd" d="M13.75 2.63c1.17 0 2.13.95 2.13 2.12v3.38h3.37c1.17 0 2.13.95 2.13 2.12v3.5c0 1.17-.96 2.13-2.13 2.13h-3.37v3.37c0 1.17-.96 2.13-2.13 2.13h-3.5a2.13 2.13 0 0 1-2.12-2.13v-3.37H4.75a2.13 2.13 0 0 1-2.12-2.13v-3.5c0-1.17.95-2.12 2.12-2.12h3.38V4.75c0-1.17.95-2.12 2.12-2.12zm-3.5 1.75c-.2 0-.37.16-.37.37V9c0 .48-.4.88-.88.88H4.75c-.2 0-.37.16-.37.37v3.5c0 .2.16.38.37.38H9c.48 0 .88.39.88.87v4.25c0 .2.16.38.37.38h3.5c.2 0 .38-.17.38-.38V15c0-.48.39-.87.87-.87h4.25c.2 0 .38-.17.38-.38v-3.5c0-.2-.17-.37-.38-.37H15a.9.9 0 0 1-.87-.88V4.75c0-.2-.17-.37-.38-.37z" clipRule="evenodd" />
    </IconBase>
  ))
);

MedicalCrossFillDuotone.displayName = 'MedicalCrossFillDuotone';

// Triple export pattern (lucide-react style)
export { MedicalCrossFillDuotone, MedicalCrossFillDuotone as MedicalCrossFillDuotoneIcon, MedicalCrossFillDuotone as SiMedicalCrossFillDuotone };
export default MedicalCrossFillDuotone;
export type { MedicalCrossFillDuotoneProps };
