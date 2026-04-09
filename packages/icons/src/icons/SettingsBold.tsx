import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SettingsBoldProps = Omit<IconBaseProps, 'children'>;

const SettingsBold = memo(
  forwardRef<SVGSVGElement, SettingsBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="settings-bold" {...props}>
      <path fillRule="evenodd" d="M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8m0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
        <path fillRule="evenodd" d="M13.82 2.55c.7-.87 1.92-1.1 2.88-.54l1.6.93c.96.55 1.38 1.73.97 2.76l-.14.38a2 2 0 0 0 1.56 2.7l.4.07c1.1.17 1.91 1.11 1.91 2.22v1.86c0 1.1-.81 2.05-1.9 2.22l-.41.06a2 2 0 0 0-1.57 2.7l.15.39a2.25 2.25 0 0 1-.97 2.76l-1.6.93c-.96.55-2.19.32-2.88-.54l-.26-.32a2 2 0 0 0-3.12 0l-.26.32c-.7.87-1.92 1.1-2.88.54l-1.6-.93a2.25 2.25 0 0 1-.97-2.76l.14-.38a2 2 0 0 0-1.56-2.7l-.4-.07A2.25 2.25 0 0 1 1 12.93v-1.86c0-1.1.81-2.05 1.91-2.22l.4-.06a2 2 0 0 0 1.56-2.7l-.14-.39c-.4-1.03 0-2.2.97-2.76L7.3 2a2.25 2.25 0 0 1 2.88.54l.26.32a2 2 0 0 0 3.12 0zm1.88 1.2a.25.25 0 0 0-.32.05l-.26.32a4 4 0 0 1-6.24 0l-.26-.32a.25.25 0 0 0-.32-.06l-1.6.93c-.11.06-.15.2-.11.3l.15.39a4 4 0 0 1-3.12 5.4l-.4.07a.25.25 0 0 0-.22.24v1.86c0 .12.1.23.21.24l.4.07a4 4 0 0 1 3.13 5.4l-.15.38q-.05.2.1.31l1.61.93c.11.06.25.03.32-.06l.26-.32a4 4 0 0 1 6.24 0l.26.32q.14.15.32.06l1.6-.93c.11-.06.15-.2.11-.3l-.15-.39a4 4 0 0 1 3.12-5.4l.4-.07a.25.25 0 0 0 .22-.24v-1.86a.25.25 0 0 0-.21-.24l-.4-.07a4 4 0 0 1-3.13-5.4l.15-.38a.25.25 0 0 0-.1-.31z" clipRule="evenodd" />
    </IconBase>
  ))
);

SettingsBold.displayName = 'SettingsBold';

// Triple export pattern (lucide-react style)
export { SettingsBold, SettingsBold as SettingsBoldIcon, SettingsBold as SiSettingsBold };
export default SettingsBold;
export type { SettingsBoldProps };
