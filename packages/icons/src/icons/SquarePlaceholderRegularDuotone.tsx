import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type SquarePlaceholderRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const SquarePlaceholderRegularDuotone = memo(
  forwardRef<SVGSVGElement, SquarePlaceholderRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M12.33 19.75H10.2L4.26 13.8l-.01-1.3v-.83zM17.49 19.25l-.06.04-.36.15q-.48.17-1.28.24L4.32 8.2q.07-.8.24-1.28l.15-.36.03-.06zM19.68 15.79q-.07.8-.24 1.28l-.15.36-.04.06L6.51 4.75l.06-.04.36-.15q.48-.17 1.28-.24zM12.5 4.25h1.3l5.94 5.95.01 1.3v.83l-8.08-8.08z" opacity={0.4} />
        <path fillRule="evenodd" d="M12.5 2.75c1.39 0 2.47 0 3.34.07.88.07 1.61.22 2.27.56 1.08.55 1.96 1.43 2.51 2.51.34.66.49 1.39.56 2.27.07.87.07 1.95.07 3.34v1q.01 1.79-.05 2.98-.04 1.19-.34 2.08-.1.29-.24.55c-.55 1.08-1.43 1.96-2.51 2.51q-.27.14-.55.24-.89.29-2.08.35t-2.98.04h-1c-1.39 0-2.47 0-3.34-.07-.88-.07-1.61-.22-2.27-.56-1.08-.55-1.96-1.43-2.51-2.51-.34-.66-.49-1.39-.56-2.27-.07-.87-.07-1.95-.07-3.34v-1q-.01-1.79.04-2.98t.35-2.08q.1-.29.24-.55c.55-1.08 1.43-1.96 2.51-2.51q.27-.14.55-.24.89-.29 2.08-.34t2.98-.05zm-1 1.5c-1.22 0-2.15 0-2.9.04-.74.05-1.26.13-1.67.27l-.36.15c-.8.41-1.45 1.06-1.86 1.86l-.15.36c-.14.41-.22.93-.27 1.68-.04.75-.04 1.67-.04 2.89v1c0 1.41 0 2.43.07 3.22.06.79.18 1.3.4 1.71.4.8 1.05 1.45 1.85 1.86.41.2.92.33 1.7.4.8.06 1.82.06 3.23.06h1c1.22 0 2.14 0 2.9-.04.74-.05 1.26-.13 1.67-.27l.36-.15c.8-.41 1.45-1.06 1.86-1.86l.15-.36c.14-.41.22-.93.27-1.68.04-.74.04-1.67.04-2.89v-1c0-1.41 0-2.43-.07-3.22-.06-.79-.18-1.3-.4-1.71-.4-.8-1.05-1.45-1.85-1.86-.41-.2-.92-.33-1.7-.4-.8-.06-1.82-.06-3.23-.06z" clipRule="evenodd" />
    </IconBase>
  ))
);

SquarePlaceholderRegularDuotone.displayName = 'SquarePlaceholderRegularDuotone';

// Triple export pattern
export { SquarePlaceholderRegularDuotone, SquarePlaceholderRegularDuotone as SquarePlaceholderRegularDuotoneIcon, SquarePlaceholderRegularDuotone as SiSquarePlaceholderRegularDuotone };
export default SquarePlaceholderRegularDuotone;
export type { SquarePlaceholderRegularDuotoneProps };
