import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MonitorSmartphoneBoldProps = Omit<IconBaseProps, 'children'>;

const MonitorSmartphoneBold = memo(
  forwardRef<SVGSVGElement, MonitorSmartphoneBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19.2 9q.71 0 1.23.03.54.03 1.07.27.8.4 1.2 1.2c.18.35.24.72.27 1.07q.04.52.03 1.23v4.4q0 .71-.03 1.23-.03.54-.27 1.07-.4.8-1.2 1.2c-.35.18-.72.24-1.07.27q-.52.04-1.23.03h-.4q-.71 0-1.23-.03-.54-.03-1.07-.27-.8-.4-1.2-1.2c-.18-.35-.24-.72-.27-1.07q-.04-.52-.03-1.23v-4.4q0-.71.03-1.23.03-.54.27-1.07.4-.8 1.2-1.2c.35-.18.72-.24 1.07-.27q.52-.04 1.23-.03zm-.4 2c-.5 0-.83 0-1.07.02-.23.02-.3.05-.32.06q-.22.11-.33.33-.02.01-.06.32c-.02.24-.02.56-.02 1.07v4.4c0 .5 0 .83.02 1.07.02.23.05.3.06.32q.11.22.33.33.01.02.32.06c.24.02.56.02 1.07.02h.4c.5 0 .83 0 1.07-.02.23-.02.3-.05.32-.06q.22-.11.33-.33.02-.01.06-.32c.02-.24.02-.56.02-1.07v-4.4q0-.73-.02-1.07c-.02-.23-.05-.3-.06-.32q-.11-.22-.33-.33-.01-.02-.32-.06C20.03 11 19.7 11 19.2 11z" clipRule="evenodd" />
        <path d="M15 3q.68 0 1.16.02.5.02.99.2c.73.31 1.32.9 1.62 1.63q.2.5.2.99.04.47.03 1.16c0 .55-.45 1-1 1s-1-.45-1-1c0-.48 0-.79-.02-1.03-.01-.22-.04-.31-.06-.35q-.17-.38-.54-.54-.04-.04-.35-.06C15.79 5 15.48 5 15 5H5.2c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09q-.3.15-.44.44c-.03.05-.06.15-.09.42C3 6.25 3 6.62 3 7.2v4.6c0 .58 0 .95.02 1.23.03.27.06.37.09.42q.15.3.44.44c.05.03.15.06.42.09.28.02.65.02 1.23.02H13c.55 0 1 .45 1 1s-.45 1-1 1h-1v1.5h.25c.55 0 1 .45 1 1s-.45 1-1 1h-4.5c-.55 0-1-.45-1-1s.45-1 1-1H8V16H5.2q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3-.57-.28-1.03-.74-1.31-1.3-.2-.39-.27-.78-.3-1.17Q.99 12.6 1 11.8V7.2q0-.81.03-1.4c.03-.4.1-.78.3-1.16q.44-.87 1.3-1.31c.39-.2.78-.27 1.17-.3Q4.4 2.99 5.2 3z" />
    </IconBase>
  ))
);

MonitorSmartphoneBold.displayName = 'MonitorSmartphoneBold';

// Triple export pattern
export { MonitorSmartphoneBold, MonitorSmartphoneBold as MonitorSmartphoneBoldIcon, MonitorSmartphoneBold as SiMonitorSmartphoneBold };
export default MonitorSmartphoneBold;
export type { MonitorSmartphoneBoldProps };
