import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SkipBackRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SkipBackRegularDuotone = memo(
  forwardRef<SVGSVGElement, SkipBackRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M18.6 4.12c.51.03.99.28 1.3.7.23.3.3.66.32.97q.04.49.03 1.2V17q0 .71-.03 1.2c-.03.3-.1.67-.32.98-.31.4-.79.66-1.3.69-.38.02-.72-.13-1-.28q-.42-.23-1-.63l-7.02-4.68q-.61-.4-1.01-.71c-.26-.21-.52-.47-.66-.81-.2-.5-.2-1.05 0-1.54.14-.34.4-.6.66-.8q.4-.32 1.01-.72l7.02-4.68q.58-.4 1-.63c.25-.13.54-.26.86-.28zm-.07 1.5q-.03 0-.21.1-.29.14-.9.56l-7 4.68c-.44.29-.72.47-.91.63-.2.15-.22.22-.22.22q-.08.19 0 .38s.03.07.22.22c.2.16.47.34.9.63l7.02 4.68q.6.4.89.57l.2.09q.1 0 .17-.09l.04-.22c.02-.24.02-.56.02-1.06V7c0-.5 0-.82-.02-1.06l-.04-.22q-.06-.07-.16-.09" clipRule="evenodd" />
        <path d="M4.5 4.25c.41 0 .75.34.75.75v14c0 .41-.34.75-.75.75s-.75-.34-.75-.75V5c0-.41.34-.75.75-.75" opacity={.4} />
    </IconBase>
  ))
);

SkipBackRegularDuotone.displayName = 'SkipBackRegularDuotone';

// Triple export pattern
export { SkipBackRegularDuotone, SkipBackRegularDuotone as SkipBackRegularDuotoneIcon, SkipBackRegularDuotone as SiSkipBackRegularDuotone };
export default SkipBackRegularDuotone;
export type { SkipBackRegularDuotoneProps };
