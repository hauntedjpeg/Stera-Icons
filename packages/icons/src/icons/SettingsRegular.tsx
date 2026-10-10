import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SettingsRegularProps = Omit<IconBaseProps, 'children'>;

const SettingsRegular = memo(
  forwardRef<SVGSVGElement, SettingsRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M12 8.25c2.07 0 3.75 1.68 3.75 3.75s-1.68 3.75-3.75 3.75S8.25 14.07 8.25 12 9.93 8.25 12 8.25m0 1.5c-1.24 0-2.25 1-2.25 2.25 0 1.24 1 2.25 2.25 2.25 1.24 0 2.25-1 2.25-2.25 0-1.24-1-2.25-2.25-2.25" clipRule="evenodd" />
        <path fillRule="evenodd" d="M14.01 2.7c.62-.76 1.7-.97 2.56-.47l1.6.92c.86.5 1.23 1.54.87 2.46L18.9 6c-.52 1.34.34 2.83 1.76 3.04l.4.07c.98.14 1.7.99 1.7 1.97v1.86c0 .98-.72 1.82-1.7 1.97l-.4.07c-1.42.21-2.28 1.7-1.76 3.04l.15.38c.36.92 0 1.96-.86 2.46l-1.6.92c-.86.5-1.95.3-2.57-.48l-.25-.32c-.9-1.12-2.62-1.12-3.52 0l-.25.32c-.62.77-1.7.98-2.56.48l-1.6-.92c-.86-.5-1.23-1.54-.87-2.46L5.1 18c.52-1.34-.33-2.83-1.76-3.04l-.4-.07c-.98-.15-1.7-.99-1.7-1.97v-1.86c0-.98.72-1.82 1.7-1.97l.4-.07C4.78 8.82 5.63 7.33 5.11 6l-.15-.38c-.36-.92 0-1.96.86-2.46l1.6-.92c.86-.5 1.95-.3 2.57.48l.25.32c.9 1.12 2.62 1.12 3.52 0zm1.81.83c-.21-.13-.48-.08-.64.12l-.25.32c-1.5 1.87-4.35 1.87-5.86 0l-.25-.32c-.16-.2-.43-.25-.64-.12l-1.6.92c-.22.13-.31.39-.22.62l.14.38c.88 2.24-.55 4.7-2.92 5.07l-.4.06c-.25.04-.43.25-.43.5v1.85c0 .24.18.45.42.5l.4.05c2.38.37 3.8 2.83 2.94 5.07l-.15.38c-.1.23 0 .5.21.62l1.6.92c.22.13.5.08.65-.12l.25-.32c1.5-1.87 4.36-1.87 5.86 0l.25.32c.16.2.43.25.64.12l1.6-.92c.22-.13.31-.39.22-.62l-.14-.38c-.88-2.24.55-4.7 2.92-5.07l.4-.06c.25-.04.43-.25.43-.5v-1.85c0-.24-.18-.45-.42-.5l-.4-.05c-2.38-.37-3.8-2.84-2.93-5.07l.14-.38c.1-.23 0-.5-.21-.62z" clipRule="evenodd" />
    </IconBase>
  ))
);

SettingsRegular.displayName = 'SettingsRegular';

// Triple export pattern
export { SettingsRegular, SettingsRegular as SettingsRegularIcon, SettingsRegular as SiSettingsRegular };
export default SettingsRegular;
export type { SettingsRegularProps };
