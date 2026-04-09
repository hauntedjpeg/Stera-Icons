import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SettingsRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SettingsRegularDuotone = memo(
  forwardRef<SVGSVGElement, SettingsRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="settings-duotone" {...props}>
      <path fillRule="evenodd" d="M14.01 2.7a2 2 0 0 1 2.56-.47l1.6.92a2 2 0 0 1 .87 2.46L18.9 6a2.25 2.25 0 0 0 1.76 3.04l.4.07a2 2 0 0 1 1.7 1.97v1.86a2 2 0 0 1-1.7 1.97l-.4.07A2.25 2.25 0 0 0 18.89 18l.15.38a2 2 0 0 1-.86 2.46l-1.6.92A2 2 0 0 1 14 21.3l-.25-.32a2.25 2.25 0 0 0-3.52 0l-.25.32a2 2 0 0 1-2.56.48l-1.6-.92a2 2 0 0 1-.87-2.46L5.1 18a2.25 2.25 0 0 0-1.76-3.04l-.4-.07a2 2 0 0 1-1.7-1.97v-1.86a2 2 0 0 1 1.7-1.97l.4-.07A2.25 2.25 0 0 0 5.11 6l-.15-.38a2 2 0 0 1 .86-2.46l1.6-.92A2 2 0 0 1 10 2.7l.25.32a2.25 2.25 0 0 0 3.52 0zm1.81.83a.5.5 0 0 0-.64.12l-.25.32a3.75 3.75 0 0 1-5.86 0l-.25-.32a.5.5 0 0 0-.64-.12l-1.6.92a.5.5 0 0 0-.22.62l.14.38a3.75 3.75 0 0 1-2.92 5.07l-.4.06a.5.5 0 0 0-.43.5v1.85c0 .24.18.45.42.5l.4.05a3.75 3.75 0 0 1 2.94 5.07l-.15.38a.5.5 0 0 0 .21.62l1.6.92a.5.5 0 0 0 .65-.12l.25-.32a3.75 3.75 0 0 1 5.86 0l.25.32c.16.2.43.25.64.12l1.6-.92a.5.5 0 0 0 .22-.62l-.14-.38a3.75 3.75 0 0 1 2.92-5.07l.4-.06a.5.5 0 0 0 .43-.5v-1.85a.5.5 0 0 0-.42-.5l-.4-.05a3.75 3.75 0 0 1-2.93-5.07l.14-.38a.5.5 0 0 0-.21-.62z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M12 8.25a3.75 3.75 0 1 1 0 7.5 3.75 3.75 0 0 1 0-7.5m0 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5" clipRule="evenodd" />
    </IconBase>
  ))
);

SettingsRegularDuotone.displayName = 'SettingsRegularDuotone';

// Triple export pattern (lucide-react style)
export { SettingsRegularDuotone, SettingsRegularDuotone as SettingsRegularDuotoneIcon, SettingsRegularDuotone as SiSettingsRegularDuotone };
export default SettingsRegularDuotone;
export type { SettingsRegularDuotoneProps };
