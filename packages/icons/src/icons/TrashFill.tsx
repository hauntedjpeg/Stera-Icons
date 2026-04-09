import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TrashFillProps = Omit<IconBaseProps, 'children'>;

const TrashFill = memo(
  forwardRef<SVGSVGElement, TrashFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="trash-fill" {...props}>
      <path fillRule="evenodd" d="M13.26 2.13c1.25 0 2.34.86 2.61 2.07l.33 1.42H21a.88.88 0 0 1 0 1.76h-.68l-.54 7.72q-.09 1.54-.22 2.53-.13 1-.56 1.79a5 5 0 0 1-2.11 1.97q-.81.37-1.82.43c-.68.06-1.5.05-2.54.05h-1.06q-1.53.01-2.54-.05a5 5 0 0 1-1.82-.43 5 5 0 0 1-2.1-1.97 5 5 0 0 1-.57-1.79q-.13-1-.22-2.53l-.54-7.72H3a.87.87 0 1 1 0-1.75h4.8l.33-1.43a2.7 2.7 0 0 1 2.6-2.08zm-3.82 8a.9.9 0 0 0-.81.93l.38 5.5a.87.87 0 1 0 1.74-.12l-.38-5.5a.9.9 0 0 0-.93-.81m5.12 0a.9.9 0 0 0-.93.8l-.38 5.5a.88.88 0 0 0 1.74.13l.38-5.5a.9.9 0 0 0-.81-.93m-3.82-6.26c-.44 0-.81.3-.9.72L9.6 5.63h4.8l-.23-1.04a.9.9 0 0 0-.9-.71z" clipRule="evenodd" />
    </IconBase>
  ))
);

TrashFill.displayName = 'TrashFill';

// Triple export pattern (lucide-react style)
export { TrashFill, TrashFill as TrashFillIcon, TrashFill as SiTrashFill };
export default TrashFill;
export type { TrashFillProps };
