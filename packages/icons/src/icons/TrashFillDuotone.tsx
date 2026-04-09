import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrashFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TrashFillDuotone = memo(
  forwardRef<SVGSVGElement, TrashFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="trash-fill-duotone" {...props}>
      <path fillRule="evenodd" d="M19.78 15.1q-.09 1.54-.22 2.53-.13 1-.56 1.79a5 5 0 0 1-2.11 1.97q-.81.37-1.82.43c-.68.06-1.5.05-2.54.05h-1.06q-1.53.01-2.54-.05a5 5 0 0 1-1.82-.43 5 5 0 0 1-2.1-1.97 5 5 0 0 1-.57-1.79q-.13-1-.22-2.53l-.54-7.72h16.64zM9.44 10.13a.9.9 0 0 0-.81.93l.38 5.5a.87.87 0 1 0 1.74-.12l-.38-5.5a.9.9 0 0 0-.93-.81m5.12 0a.9.9 0 0 0-.93.8l-.38 5.5a.88.88 0 0 0 1.74.13l.38-5.5a.9.9 0 0 0-.81-.93" clipRule="evenodd" opacity={.4} />
        <path d="M9.44 10.13c.48-.04.9.33.93.8l.38 5.5a.88.88 0 0 1-1.74.13l-.38-5.5a.9.9 0 0 1 .8-.93M14.56 10.13c.48.03.85.45.81.93l-.38 5.5a.87.87 0 1 1-1.74-.12l.38-5.5a.9.9 0 0 1 .93-.81" />
        <path fillRule="evenodd" d="M13.26 2.13c1.25 0 2.34.86 2.61 2.07l.33 1.42H21a.88.88 0 0 1 0 1.76H3a.87.87 0 1 1 0-1.75h4.8l.33-1.43a2.7 2.7 0 0 1 2.6-2.08zm-2.52 1.75c-.44 0-.81.3-.9.71L9.6 5.63h4.8l-.23-1.04a.9.9 0 0 0-.9-.71z" clipRule="evenodd" />
    </IconBase>
  ))
);

TrashFillDuotone.displayName = 'TrashFillDuotone';

// Triple export pattern (lucide-react style)
export { TrashFillDuotone, TrashFillDuotone as TrashFillDuotoneIcon, TrashFillDuotone as SiTrashFillDuotone };
export default TrashFillDuotone;
export type { TrashFillDuotoneProps };
