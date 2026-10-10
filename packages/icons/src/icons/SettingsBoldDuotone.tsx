import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SettingsBoldDuotoneProps = Omit<IconBaseProps, 'children'>;

const SettingsBoldDuotone = memo(
  forwardRef<SVGSVGElement, SettingsBoldDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M13.82 2.55c.7-.87 1.92-1.1 2.88-.54l1.6.93c.96.55 1.38 1.73.97 2.76l-.14.38c-.47 1.2.3 2.51 1.56 2.7l.4.07c1.1.17 1.91 1.11 1.91 2.22v1.86c0 1.1-.81 2.05-1.9 2.22l-.41.06c-1.27.2-2.03 1.51-1.57 2.7l.15.39c.4 1.03 0 2.2-.97 2.76l-1.6.93c-.96.55-2.19.32-2.88-.54l-.26-.32c-.8-1-2.32-1-3.12 0l-.26.32c-.7.87-1.92 1.1-2.88.54l-1.6-.93c-.96-.55-1.38-1.73-.97-2.76l.14-.38c.47-1.2-.3-2.51-1.56-2.7l-.4-.07C1.8 14.98 1 14.04 1 12.93v-1.86c0-1.1.81-2.05 1.91-2.22l.4-.06c1.27-.2 2.03-1.51 1.56-2.7l-.14-.39c-.4-1.03 0-2.2.97-2.76L7.3 2c.96-.55 2.19-.33 2.88.54l.26.32c.8 1 2.32 1 3.12 0zm1.88 1.2c-.11-.07-.25-.04-.32.05l-.26.32c-1.6 2-4.64 2-6.24 0l-.26-.32q-.14-.15-.32-.06l-1.6.93c-.11.06-.15.2-.11.3l.15.39c.93 2.38-.6 5.02-3.12 5.4l-.4.07c-.13.01-.22.12-.22.24v1.86c0 .12.1.23.21.24l.4.07c2.54.38 4.06 3.02 3.13 5.4l-.15.38q-.05.2.1.31l1.61.93c.11.06.25.03.32-.06l.26-.32c1.6-2 4.64-2 6.24 0l.26.32q.14.15.32.06l1.6-.93c.11-.06.15-.2.11-.3l-.15-.39c-.93-2.38.6-5.02 3.12-5.4l.4-.07c.13-.01.22-.12.22-.24v-1.86c0-.12-.09-.23-.21-.24l-.4-.07c-2.54-.38-4.06-3.02-3.13-5.4l.15-.38c.04-.12 0-.25-.1-.31z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M12 8c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2" clipRule="evenodd" />
    </IconBase>
  ))
);

SettingsBoldDuotone.displayName = 'SettingsBoldDuotone';

// Triple export pattern
export { SettingsBoldDuotone, SettingsBoldDuotone as SettingsBoldDuotoneIcon, SettingsBoldDuotone as SiSettingsBoldDuotone };
export default SettingsBoldDuotone;
export type { SettingsBoldDuotoneProps };
