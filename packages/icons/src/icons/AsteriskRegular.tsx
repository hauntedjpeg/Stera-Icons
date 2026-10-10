import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type AsteriskRegularProps = Omit<IconBaseProps, 'children'>;

const AsteriskRegular = memo(
  forwardRef<SVGSVGElement, AsteriskRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12 2.25c.41 0 .75.34.75.75v6.83c0 .39.42.63.75.43l5.92-3.41c.36-.21.82-.09 1.03.27.2.36.08.82-.28 1.03l-5.91 3.41c-.34.2-.34.67 0 .87l5.92 3.42c.36.2.48.66.27 1.02s-.66.48-1.02.28l-5.93-3.43c-.33-.19-.75.05-.75.44V21c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-6.84c0-.38-.42-.62-.75-.43l-5.92 3.42c-.36.2-.81.08-1.02-.28s-.09-.82.27-1.02l5.92-3.42c.34-.2.34-.68 0-.87L3.84 8.15c-.36-.21-.48-.67-.28-1.03.21-.36.67-.48 1.03-.27l5.91 3.4c.33.2.75-.04.75-.42V3c0-.41.34-.75.75-.75" />
    </IconBase>
  ))
);

AsteriskRegular.displayName = 'AsteriskRegular';

// Triple export pattern
export { AsteriskRegular, AsteriskRegular as AsteriskRegularIcon, AsteriskRegular as SiAsteriskRegular };
export default AsteriskRegular;
export type { AsteriskRegularProps };
