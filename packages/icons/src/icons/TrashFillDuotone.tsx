import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrashFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TrashFillDuotone = memo(
  forwardRef<SVGSVGElement, TrashFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M19.78 15.1q-.09 1.54-.22 2.53-.13 1-.56 1.79c-.49.85-1.23 1.54-2.11 1.97q-.81.37-1.82.43c-.68.06-1.5.05-2.54.05h-1.06q-1.53.01-2.54-.05-1-.06-1.82-.43c-.88-.43-1.62-1.12-2.1-1.97-.31-.53-.47-1.11-.57-1.79q-.13-1-.22-2.53l-.54-7.72h16.64zM9.44 10.13c-.48.03-.85.45-.81.93l.38 5.5c.03.48.45.85.93.81s.85-.45.81-.93l-.38-5.5c-.03-.48-.45-.85-.93-.81m5.12 0c-.48-.04-.9.33-.93.8l-.38 5.5c-.04.5.33.91.81.94.48.04.9-.33.93-.8l.38-5.51c.04-.48-.33-.9-.81-.93" clipRule="evenodd" opacity={.4} />
        <path d="M9.44 10.13c.48-.04.9.33.93.8l.38 5.5c.04.5-.33.91-.81.94-.48.04-.9-.33-.93-.8l-.38-5.51c-.04-.48.33-.9.8-.93M14.56 10.13c.48.03.85.45.81.93l-.38 5.5c-.03.48-.45.85-.93.81s-.85-.45-.81-.93l.38-5.5c.03-.48.45-.85.93-.81" />
        <path fillRule="evenodd" d="M13.26 2.13c1.25 0 2.34.86 2.61 2.07l.33 1.42H21c.48 0 .88.4.88.88s-.4.88-.88.88H3c-.48 0-.87-.4-.87-.88s.39-.87.87-.87h4.8l.33-1.43C8.4 3 9.49 2.12 10.73 2.12zm-2.52 1.75c-.44 0-.81.3-.9.71L9.6 5.63h4.8l-.23-1.04c-.1-.42-.47-.71-.9-.71z" clipRule="evenodd" />
    </IconBase>
  ))
);

TrashFillDuotone.displayName = 'TrashFillDuotone';

// Triple export pattern
export { TrashFillDuotone, TrashFillDuotone as TrashFillDuotoneIcon, TrashFillDuotone as SiTrashFillDuotone };
export default TrashFillDuotone;
export type { TrashFillDuotoneProps };
