import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type HandbagRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const HandbagRegularDuotone = memo(
  forwardRef<SVGSVGElement, HandbagRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fillRule="evenodd" d="M14.62 8.75c1.25 0 2.1-.01 2.82.28q.91.4 1.53 1.18c.48.62.69 1.44 1.01 2.64l.11.4c.27 1.02.5 1.83.61 2.49.12.66.15 1.25-.02 1.82-.26.89-.85 1.65-1.64 2.14-.5.3-1.08.43-1.75.5q-.99.06-2.56.05H9.27q-1.57.02-2.56-.06c-.67-.06-1.25-.18-1.75-.5-.8-.48-1.38-1.24-1.64-2.13-.17-.57-.14-1.16-.02-1.82q.2-.97.61-2.49l.1-.4c.33-1.2.54-2.02 1.02-2.64q.61-.79 1.53-1.18c.73-.3 1.57-.28 2.82-.28zm-5.24 1.5c-1.39 0-1.86.01-2.24.17q-.56.24-.93.7c-.25.33-.38.79-.74 2.12l-.11.4c-.28 1.05-.48 1.78-.58 2.36s-.1.9-.02 1.14c.16.53.5.99.98 1.28.22.13.53.23 1.1.28.59.05 1.35.05 2.43.05h5.46c1.08 0 1.84 0 2.42-.05s.9-.15 1.11-.28q.72-.47.98-1.28c.07-.25.08-.57-.02-1.14-.1-.58-.3-1.31-.58-2.36l-.1-.4c-.37-1.33-.5-1.79-.75-2.11q-.37-.48-.93-.7c-.38-.17-.85-.18-2.24-.18z" clipRule="evenodd" opacity={.4} />
        <path d="M12 3.75c2.35 0 4.25 1.9 4.25 4.25v.78q-.64-.04-1.5-.03V8c0-1.52-1.23-2.75-2.75-2.75S9.25 6.48 9.25 8v.75q-.86 0-1.5.03V8c0-2.35 1.9-4.25 4.25-4.25" />
    </IconBase>
  ))
);

HandbagRegularDuotone.displayName = 'HandbagRegularDuotone';

// Triple export pattern
export { HandbagRegularDuotone, HandbagRegularDuotone as HandbagRegularDuotoneIcon, HandbagRegularDuotone as SiHandbagRegularDuotone };
export default HandbagRegularDuotone;
export type { HandbagRegularDuotoneProps };
