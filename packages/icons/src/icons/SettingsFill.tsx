import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SettingsFillProps = Omit<IconBaseProps, 'children'>;

const SettingsFill = memo(
  forwardRef<SVGSVGElement, SettingsFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.05 2.46c.58-.72 1.6-.91 2.4-.45l1.98 1.14c.8.46 1.14 1.44.8 2.3l-.22.59c-.5 1.26.31 2.66 1.66 2.87l.61.1c.92.13 1.6.92 1.6 1.85v2.28c0 .93-.68 1.71-1.6 1.85l-.61.1c-1.35.2-2.15 1.6-1.66 2.87l.23.58c.33.86-.01 1.84-.81 2.3L16.45 22c-.8.46-1.82.27-2.4-.45l-.4-.5c-.84-1.05-2.46-1.05-3.3 0l-.4.5c-.58.72-1.6.91-2.4.45l-1.98-1.14c-.8-.47-1.14-1.45-.8-2.3l.22-.59c.5-1.27-.31-2.67-1.66-2.87l-.61-.1c-.92-.14-1.6-.92-1.6-1.85v-2.28c0-.93.68-1.72 1.6-1.86l.61-.09C4.68 8.71 5.5 7.31 5 6.04l-.23-.58c-.33-.87.01-1.85.81-2.3L7.55 2c.8-.46 1.82-.27 2.4.45l.4.49c.84 1.06 2.46 1.06 3.3 0zM12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3" clipRule="evenodd" />
    </IconBase>
  ))
);

SettingsFill.displayName = 'SettingsFill';

// Triple export pattern
export { SettingsFill, SettingsFill as SettingsFillIcon, SettingsFill as SiSettingsFill };
export default SettingsFill;
export type { SettingsFillProps };
