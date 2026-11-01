import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MonitorSmartphoneFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const MonitorSmartphoneFillDuotone = memo(
  forwardRef<SVGSVGElement, MonitorSmartphoneFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M19.6 9.25q.6 0 1.05.02t.87.23q.65.33.98.98.2.43.23.87t.02 1.05v5.2q0 .6-.02 1.05t-.23.87q-.33.65-.98.98-.43.2-.87.23t-1.05.02h-1.2q-.6 0-1.05-.02c-.3-.03-.59-.08-.87-.23q-.65-.33-.98-.98c-.15-.28-.2-.58-.23-.87q-.02-.44-.02-1.05v-5.2q0-.6.02-1.05t.23-.87q.33-.65.98-.98c.28-.15.58-.2.87-.23q.44-.03 1.05-.02z" opacity={.4} />
        <path d="M15 3.25q.69 0 1.15.02t.9.19c.68.28 1.21.81 1.5 1.49q.16.44.18.9.03.47.02 1.15c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.48 0-.8-.02-1.04-.01-.24-.04-.36-.07-.44q-.21-.47-.68-.68-.1-.05-.44-.07T15 4.75H5.2c-.57 0-.96 0-1.25.02s-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v4.6c0 .57 0 .96.02 1.25s.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02H13c.41 0 .75.34.75.75s-.34.75-.75.75h-1.25v2h.5c.41 0 .75.34.75.75s-.34.75-.75.75h-4.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.5v-2H5.2q-.82 0-1.37-.03-.57-.03-1.08-.27-.8-.4-1.2-1.2-.24-.51-.27-1.08-.04-.55-.03-1.37V7.2q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03z" />
    </IconBase>
  ))
);

MonitorSmartphoneFillDuotone.displayName = 'MonitorSmartphoneFillDuotone';

// Triple export pattern
export { MonitorSmartphoneFillDuotone, MonitorSmartphoneFillDuotone as MonitorSmartphoneFillDuotoneIcon, MonitorSmartphoneFillDuotone as SiMonitorSmartphoneFillDuotone };
export default MonitorSmartphoneFillDuotone;
export type { MonitorSmartphoneFillDuotoneProps };
