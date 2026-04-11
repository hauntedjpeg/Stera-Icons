import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SettingsFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const SettingsFillDuotone = memo(
  forwardRef<SVGSVGElement, SettingsFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.05 2.46c.58-.72 1.6-.91 2.4-.45l1.98 1.14c.8.46 1.14 1.44.8 2.3l-.22.59a2.13 2.13 0 0 0 1.66 2.87l.61.1c.92.13 1.6.92 1.6 1.85v2.28c0 .93-.68 1.71-1.6 1.85l-.61.1A2.12 2.12 0 0 0 19 17.96l.23.58c.33.86-.01 1.84-.81 2.3L16.45 22c-.8.46-1.82.27-2.4-.45l-.4-.5a2.13 2.13 0 0 0-3.3 0l-.4.5c-.58.72-1.6.91-2.4.45l-1.98-1.14a1.9 1.9 0 0 1-.8-2.3l.22-.59a2.13 2.13 0 0 0-1.66-2.87l-.61-.1a1.9 1.9 0 0 1-1.6-1.85v-2.28c0-.93.68-1.72 1.6-1.86l.61-.09A2.13 2.13 0 0 0 5 6.04l-.23-.58c-.33-.87.01-1.85.81-2.3L7.55 2c.8-.46 1.82-.27 2.4.45l.4.49a2.13 2.13 0 0 0 3.3 0zM12 8.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5" clipRule="evenodd" opacity={.4} />
        <path d="M12 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5" />
    </IconBase>
  ))
);

SettingsFillDuotone.displayName = 'SettingsFillDuotone';

// Triple export pattern (lucide-react style)
export { SettingsFillDuotone, SettingsFillDuotone as SettingsFillDuotoneIcon, SettingsFillDuotone as SiSettingsFillDuotone };
export default SettingsFillDuotone;
export type { SettingsFillDuotoneProps };
