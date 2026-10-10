import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AsteriskRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const AsteriskRegularDuotone = memo(
  forwardRef<SVGSVGElement, AsteriskRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.75 13.29V21c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-7.71l.75-.43zM3.56 7.12c.21-.36.67-.48 1.03-.27l6.66 3.84v.87l-.75.43-6.66-3.85c-.36-.2-.48-.66-.28-1.02M19.42 6.85c.36-.21.82-.09 1.03.27.2.36.08.82-.28 1.02L13.5 12l-.75-.43v-.87z" opacity={0.4} />
        <path d="M12 2.25c.41 0 .75.34.75.75v8.56l7.43 4.29c.36.2.48.66.27 1.02s-.66.48-1.02.28L12 12.85l-7.42 4.3c-.36.2-.81.08-1.02-.28s-.09-.82.27-1.02l7.42-4.3V3c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

AsteriskRegularDuotone.displayName = 'AsteriskRegularDuotone';

// Triple export pattern
export { AsteriskRegularDuotone, AsteriskRegularDuotone as AsteriskRegularDuotoneIcon, AsteriskRegularDuotone as SiAsteriskRegularDuotone };
export default AsteriskRegularDuotone;
export type { AsteriskRegularDuotoneProps };
