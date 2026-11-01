import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MonitorSmartphoneRegularProps = Omit<IconBaseProps, 'children'>;

const MonitorSmartphoneRegular = memo(
  forwardRef<SVGSVGElement, MonitorSmartphoneRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19.2 9.25q.72 0 1.21.03.5.02.97.24.73.37 1.1 1.1.23.46.24.97.04.5.03 1.21v4.4q0 .72-.03 1.21-.01.5-.24.97-.37.73-1.1 1.1-.46.23-.97.24-.5.04-1.21.03h-.4q-.72 0-1.21-.03-.5-.01-.97-.24-.73-.37-1.1-1.1-.22-.46-.24-.97-.04-.5-.03-1.21v-4.4q0-.72.03-1.21.01-.5.24-.97.37-.73 1.1-1.1.46-.22.97-.24.5-.04 1.21-.03zm-.4 1.5c-.5 0-.83 0-1.09.02q-.34.04-.41.09-.3.15-.44.44c-.03.06-.07.17-.09.41-.02.26-.02.59-.02 1.09v4.4c0 .5 0 .83.02 1.09q.04.34.09.41.15.3.44.44.07.05.41.09c.26.02.59.02 1.09.02h.4c.5 0 .83 0 1.09-.02q.34-.04.41-.09.3-.15.44-.44.05-.07.09-.41c.02-.26.02-.59.02-1.09v-4.4c0-.5 0-.83-.02-1.09-.02-.24-.06-.35-.09-.41q-.15-.3-.44-.44-.07-.05-.41-.09c-.26-.02-.59-.02-1.09-.02z" clipRule="evenodd" />
        <path d="M15 3.25q.69 0 1.15.02t.9.19c.68.28 1.21.81 1.5 1.49q.16.44.18.9.03.47.02 1.15c0 .41-.34.75-.75.75s-.75-.34-.75-.75c0-.48 0-.8-.02-1.04-.01-.24-.04-.36-.07-.44q-.21-.47-.68-.68-.1-.05-.44-.07T15 4.75H5.2c-.57 0-.96 0-1.25.02s-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v4.6c0 .57 0 .96.02 1.25s.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02H13c.41 0 .75.34.75.75s-.34.75-.75.75h-1.25v2h.5c.41 0 .75.34.75.75s-.34.75-.75.75h-4.5c-.41 0-.75-.34-.75-.75s.34-.75.75-.75h.5v-2H5.2q-.82 0-1.37-.03-.57-.03-1.08-.27-.8-.4-1.2-1.2-.24-.51-.27-1.08-.04-.55-.03-1.37V7.2q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03z" />
    </IconBase>
  ))
);

MonitorSmartphoneRegular.displayName = 'MonitorSmartphoneRegular';

// Triple export pattern
export { MonitorSmartphoneRegular, MonitorSmartphoneRegular as MonitorSmartphoneRegularIcon, MonitorSmartphoneRegular as SiMonitorSmartphoneRegular };
export default MonitorSmartphoneRegular;
export type { MonitorSmartphoneRegularProps };
