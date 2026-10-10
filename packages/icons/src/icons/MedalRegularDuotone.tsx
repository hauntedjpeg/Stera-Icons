import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type MedalRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const MedalRegularDuotone = memo(
  forwardRef<SVGSVGElement, MedalRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="m10.55 11.43-.3.1q-.8.25-1.46.7l-1.47-.73h-.07v-.04l-1.82-.9c-.59-.3-1.05-.52-1.4-.87q-.43-.45-.63-1.03c-.16-.46-.15-.97-.15-1.64V5.2q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03h9.6q.82 0 1.37.03.57.03 1.08.27.8.4 1.2 1.2.24.51.27 1.08.04.55.03 1.37v1.82c0 .67.01 1.18-.15 1.64q-.2.59-.64 1.03c-.34.35-.8.57-1.4.87l-1.81.9v.04h-.07l-1.47.73q-.66-.45-1.45-.7l-.3-.1 1.79-.9V2.76h-6.5v7.79zM7.2 2.75q-.83 0-1.25.02c-.29.03-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v1.82c0 .77.01.98.07 1.15q.1.27.29.47c.12.13.3.23 1 .57l1.14.58V2.75zm9.55 7.04 1.15-.58c.69-.34.87-.44 1-.57q.18-.2.28-.47c.06-.17.07-.38.07-1.15V5.2q0-.83-.02-1.25c-.03-.29-.07-.43-.12-.52q-.18-.35-.54-.54c-.1-.05-.23-.1-.52-.12s-.68-.02-1.25-.02h-.05z" clipRule="evenodd" opacity={.4} />
        <path fillRule="evenodd" d="M12 11.25q.92 0 1.75.27c2.32.74 4 2.92 4 5.48 0 3.18-2.57 5.75-5.75 5.75S6.25 20.18 6.25 17c0-2.56 1.68-4.74 4-5.48q.83-.26 1.75-.27m0 1.5q-.68 0-1.3.2C9 13.5 7.75 15.11 7.75 17c0 2.35 1.9 4.25 4.25 4.25s4.25-1.9 4.25-4.25c0-1.9-1.24-3.5-2.95-4.05q-.62-.2-1.3-.2" clipRule="evenodd" />
    </IconBase>
  ))
);

MedalRegularDuotone.displayName = 'MedalRegularDuotone';

// Triple export pattern
export { MedalRegularDuotone, MedalRegularDuotone as MedalRegularDuotoneIcon, MedalRegularDuotone as SiMedalRegularDuotone };
export default MedalRegularDuotone;
export type { MedalRegularDuotoneProps };
