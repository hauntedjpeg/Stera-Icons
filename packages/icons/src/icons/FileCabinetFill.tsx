import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type FileCabinetFillProps = Omit<IconBaseProps, 'children'>;

const FileCabinetFill = memo(
  forwardRef<SVGSVGElement, FileCabinetFillProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path d="M13.5 5.63c.48 0 .88.39.88.87s-.4.88-.88.88h-3c-.48 0-.87-.4-.87-.88s.39-.87.87-.87z" />
        <path fillRule="evenodd" d="M14.2 2.13q1.24-.01 2.04.04c.56.04 1.05.14 1.52.38q1.11.57 1.7 1.7.33.68.37 1.5.06.81.05 2.05v8.4q.01 1.24-.05 2.04-.04.83-.38 1.52-.57 1.11-1.7 1.7-.68.33-1.5.37-.82.06-2.05.05H9.8q-1.24.01-2.04-.05-.83-.04-1.52-.38-1.11-.57-1.7-1.7-.33-.68-.37-1.5-.06-.81-.04-2.05V7.8q-.01-1.24.04-2.04c.04-.56.14-1.05.38-1.52q.57-1.11 1.7-1.7.68-.33 1.5-.37.81-.06 2.05-.04zm-3.7 12.5c-.48 0-.87.39-.87.87s.39.88.87.88h3c.48 0 .88-.4.88-.88s-.4-.87-.88-.87zM9.8 3.88c-.85 0-1.44 0-1.9.03-.45.04-.69.1-.86.2q-.62.32-.93.93c-.1.17-.16.41-.2.86-.03.46-.04 1.05-.04 1.9v3.33h12.26V7.8c0-.85 0-1.44-.04-1.9s-.1-.69-.2-.86q-.32-.62-.93-.93c-.17-.1-.41-.16-.86-.2-.46-.03-1.05-.04-1.9-.04z" clipRule="evenodd" />
    </IconBase>
  ))
);

FileCabinetFill.displayName = 'FileCabinetFill';

// Triple export pattern
export { FileCabinetFill, FileCabinetFill as FileCabinetFillIcon, FileCabinetFill as SiFileCabinetFill };
export default FileCabinetFill;
export type { FileCabinetFillProps };
